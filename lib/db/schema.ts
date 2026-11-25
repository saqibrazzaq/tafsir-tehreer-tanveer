import { pgTable, integer, text, timestamp, uniqueIndex, index } from "drizzle-orm/pg-core";

export const tafsirTanveer = pgTable(
  "tafsir_tanveer",
  {
    id: integer("id").primaryKey(), // 1 to 6236 (ayah sequence in Quran)
    sura: integer("sura").notNull(), // 1 to 114
    aya: integer("aya").notNull(), // 1 to N
    juz: integer("juz").notNull(), // 1 to 30
    quranText: text("quran_text"), // Authentic Uthmanic Arabic Quran verse
    arabicText: text("arabic_text").notNull(), // Original Tafsir Ibn Ashur HTML text
    urduText: text("urdu_text"), // Urdu translation (on-demand or pre-translated)
    englishText: text("english_text"), // English translation (on-demand or pre-translated)
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("tafsir_sura_aya_idx").on(table.sura, table.aya),
    index("tafsir_juz_idx").on(table.juz),
    index("tafsir_sura_idx").on(table.sura),
  ]
);

export type TafsirAyah = typeof tafsirTanveer.$inferSelect;
export type NewTafsirAyah = typeof tafsirTanveer.$inferInsert;
