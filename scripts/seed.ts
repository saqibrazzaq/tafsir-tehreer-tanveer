import fs from "fs";
import path from "path";
import * as dotenv from "dotenv";
import postgres from "postgres";

// Load .env.local
dotenv.config({ path: ".env.local" });

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("❌ DATABASE_URL is not set in .env.local");
  process.exit(1);
}

const sql = postgres(connectionString, {
  prepare: false,
  ssl: connectionString.includes("sslmode=require") ? "require" : false,
});

interface JuzItem {
  id: number;
  sura: number;
  aya: number;
  juz: number;
  text: string;
}

interface QuranSurah {
  number: number;
  ayahs: Array<{
    numberInSurah: number;
    text: string;
  }>;
}

async function runSeed() {
  console.log("🌱 Starting Tafsir al-Tahrir wa al-Tanwir database seed...");
  console.log(`📡 Connecting to: ${(connectionString || "").replace(/:[^:@]+@/, ":***@")}`);

  // 1. Ensure table and indexes exist
  await sql`
    CREATE TABLE IF NOT EXISTS tafsir_tanveer (
      id INTEGER PRIMARY KEY,
      sura INTEGER NOT NULL,
      aya INTEGER NOT NULL,
      juz INTEGER NOT NULL,
      quran_text TEXT,
      arabic_text TEXT NOT NULL,
      urdu_text TEXT,
      english_text TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `;

  await sql`ALTER TABLE tafsir_tanveer ADD COLUMN IF NOT EXISTS quran_text TEXT;`;
  await sql`CREATE UNIQUE INDEX IF NOT EXISTS tafsir_sura_aya_idx ON tafsir_tanveer (sura, aya);`;
  await sql`CREATE INDEX IF NOT EXISTS tafsir_juz_idx ON tafsir_tanveer (juz);`;
  await sql`CREATE INDEX IF NOT EXISTS tafsir_sura_idx ON tafsir_tanveer (sura);`;

  console.log("✅ Table structure and indexes verified.");

  // 2. Load authentic Uthmanic Quran text
  const quranPath = path.join(process.cwd(), "docs", "quran-uthmani.json");
  const quranMap = new Map<string, string>();

  if (fs.existsSync(quranPath)) {
    const quranData: QuranSurah[] = JSON.parse(fs.readFileSync(quranPath, "utf-8"));
    for (const surah of quranData) {
      for (const ayah of surah.ayahs) {
        quranMap.set(`${surah.number}:${ayah.numberInSurah}`, ayah.text.trim());
      }
    }
    console.log(`📖 Loaded ${quranMap.size} authentic Uthmanic Quran ayahs.`);
  } else {
    console.warn("⚠️ Warning: docs/quran-uthmani.json not found.");
  }

  // 3. Read and parse all 30 JSON files
  const docsDir = path.join(process.cwd(), "docs", "Tanweer_30_Juz_JSON");
  const allRecords: JuzItem[] = [];

  for (let j = 1; j <= 30; j++) {
    const pad = String(j).padStart(2, "0");
    const filePath = path.join(docsDir, `Tanweer-Juz${pad}.json`);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Warning: ${filePath} not found, skipping.`);
      continue;
    }
    const raw = fs.readFileSync(filePath, "utf-8");
    const list: JuzItem[] = JSON.parse(raw);
    allRecords.push(...list);
  }

  console.log(`📖 Loaded ${allRecords.length} Tafsir records from 30 Juz files.`);

  // 4. Insert or Update in batches
  const BATCH_SIZE = 400;
  let processed = 0;

  for (let i = 0; i < allRecords.length; i += BATCH_SIZE) {
    const batch = allRecords.slice(i, i + BATCH_SIZE);
    
    await sql`
      INSERT INTO tafsir_tanveer ${sql(
        batch.map((b) => ({
          id: b.id,
          sura: b.sura,
          aya: b.aya,
          juz: b.juz,
          quran_text: quranMap.get(`${b.sura}:${b.aya}`) || null,
          arabic_text: b.text,
        })),
        "id",
        "sura",
        "aya",
        "juz",
        "quran_text",
        "arabic_text"
      )}
      ON CONFLICT (id) DO UPDATE SET
        quran_text = EXCLUDED.quran_text
      WHERE tafsir_tanveer.quran_text IS NULL
    `;

    processed += batch.length;
    process.stdout.write(`\r⏳ Processed ${processed} / ${allRecords.length} ayahs...`);
  }

  console.log("\n");

  const [countResult] = await sql`
    SELECT 
      COUNT(*)::int AS total,
      COUNT(quran_text)::int AS with_quran
    FROM tafsir_tanveer
  `;
  console.log(
    `🎉 Seeding complete! Total records: ${countResult.total}, Ayahs with Uthmanic Quran text: ${countResult.with_quran}`
  );

  await sql.end();
}

runSeed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
