import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { tafsirTanveer } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sura = Number(searchParams.get("sura") || 1);
    const aya = Number(searchParams.get("aya") || 1);

    const [record] = await db
      .select()
      .from(tafsirTanveer)
      .where(and(eq(tafsirTanveer.sura, sura), eq(tafsirTanveer.aya, aya)))
      .limit(1);

    if (!record) {
      return NextResponse.json({ error: "Ayah not found." }, { status: 404 });
    }

    return NextResponse.json({
      id: record.id,
      sura: record.sura,
      aya: record.aya,
      juz: record.juz,
      quranText: record.quranText,
      arabicText: record.arabicText,
      urduText: record.urduText,
      englishText: record.englishText,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
