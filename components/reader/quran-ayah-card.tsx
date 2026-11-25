"use client";

import { useState } from "react";
import { Copy, Check, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSurah } from "@/lib/quran-meta";

interface QuranAyahCardProps {
  sura: number;
  aya: number;
  juz: number;
  quranText: string | null;
  targetLang: "urdu" | "english";
}

export function QuranAyahCard({
  sura,
  aya,
  juz,
  quranText,
  targetLang,
}: QuranAyahCardProps) {
  const [copied, setCopied] = useState(false);
  const isUrdu = targetLang === "urdu";
  const surahInfo = getSurah(sura);

  const handleCopyAyah = async () => {
    if (!quranText) return;
    try {
      await navigator.clipboard.writeText(
        `${quranText} ﴿${aya}﴾ [${surahInfo?.transliteration || sura}:${aya}]`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  if (!quranText) return null;

  return (
    <section
      aria-label="Quran Ayah"
      className="relative mb-3.5 rounded-xl border border-primary/20 bg-linear-to-b from-card via-card/90 to-primary/5 p-4 sm:p-5 shadow-xs"
    >
      {/* Header with Badges and Copy */}
      <div className="flex items-center justify-between border-b border-border/50 pb-2.5 mb-3.5">
        <div className="flex items-center gap-2">
          <Badge
            variant="default"
            className={`text-xs font-semibold px-2.5 py-0.5 ${isUrdu ? "font-urdu" : ""}`}
          >
            {isUrdu
              ? `سورۃ ${surahInfo?.urduName || sura}`
              : `Surah ${surahInfo?.transliteration || sura}`}
          </Badge>
          <Badge variant="outline" className={`text-xs ${isUrdu ? "font-urdu" : ""}`}>
            {isUrdu ? `آیت ${aya}` : `Ayah ${aya}`}
          </Badge>
          <span className={`text-xs text-muted-foreground hidden sm:inline ${isUrdu ? "font-urdu" : ""}`}>
            {isUrdu ? `پارہ ${juz}` : `Para ${juz}`}
          </span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopyAyah}
          className={`h-7 gap-1 px-2 text-xs cursor-pointer text-muted-foreground hover:text-foreground ${
            isUrdu ? "font-urdu" : ""
          }`}
          title="Copy Quran verse"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              <span className="text-emerald-500">{isUrdu ? "آیت کاپی ہو گئی" : "Ayah Copied"}</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>{isUrdu ? "آیت کاپی کریں" : "Copy Ayah"}</span>
            </>
          )}
        </Button>
      </div>

      {/* Beautiful Uthmanic Arabic Ayah Text */}
      <div dir="rtl" className="text-center py-2 px-2 sm:px-6">
        <p className="font-arabic text-xl sm:text-2xl md:text-3xl leading-loose sm:leading-loose text-foreground font-bold tracking-wide select-text">
          {quranText}
          <span className="inline-flex items-center justify-center mx-2 text-primary font-normal text-2xl select-none">
            ۝<sub className="text-xs font-sans font-bold -ms-5.5 -mb-0.5 text-primary">{aya}</sub>
          </span>
        </p>
      </div>
    </section>
  );
}
