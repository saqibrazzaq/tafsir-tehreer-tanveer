import { db } from "@/lib/db";
import { tafsirTanveer } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import { ReaderView, AyahData } from "@/components/reader/reader-view";

interface PageProps {
  searchParams: Promise<{
    sura?: string;
    aya?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const sura = params?.sura ? Number(params.sura) : 1;
  const aya = params?.aya ? Number(params.aya) : 1;

  // Fetch ayah from database
  let ayahRecord: AyahData | null = null;

  try {
    const [record] = await db
      .select()
      .from(tafsirTanveer)
      .where(and(eq(tafsirTanveer.sura, sura), eq(tafsirTanveer.aya, aya)))
      .limit(1);

    if (record) {
      ayahRecord = {
        id: record.id,
        sura: record.sura,
        aya: record.aya,
        juz: record.juz,
        quranText: record.quranText || null,
        arabicText: record.arabicText,
        urduText: record.urduText,
        englishText: record.englishText,
      };
    }
  } catch (err) {
    console.error("Database query error:", err);
  }

  // Fallback if not found or DB not yet connected
  const initialAyah: AyahData = ayahRecord || {
    id: 1,
    sura: 1,
    aya: 1,
    juz: 1,
    quranText: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    arabicText: "<p>لم يتم العثور على تفسير لهذه الآية في قاعدة البيانات.</p>",
    urduText: null,
    englishText: null,
  };

  return <ReaderView initialAyah={initialAyah} />;
}
