"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSurah } from "@/lib/quran-meta";

interface ArabicPaneProps {
  sura: number;
  aya: number;
  juz: number;
  arabicHtml: string;
  fontSize: number;
  targetLang: "urdu" | "english";
}

export function ArabicPane({
  sura,
  aya,
  juz,
  arabicHtml,
  fontSize,
  targetLang,
}: ArabicPaneProps) {
  const [copied, setCopied] = useState(false);
  const isUrdu = targetLang === "urdu";
  const surahInfo = getSurah(sura);

  const handleCopy = async () => {
    try {
      const plainText = arabicHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      const header = isUrdu
        ? `تفسیر التحریر والتنویر (عربی متن) - سورۃ ${surahInfo?.urduName || sura}، آیت ${aya}:`
        : `Tafsir al-Tahrir wa al-Tanwir (Arabic Text) - Surah ${surahInfo?.transliteration || sura}, Ayah ${aya}:`;
      await navigator.clipboard.writeText(`${header}\n\n${plainText}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm">
      {/* Pane Header */}
      <div className="flex items-center justify-between border-b px-4 py-2.5 bg-muted/30">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={`text-xs font-semibold px-2.5 py-0.5 ${isUrdu ? "font-urdu" : ""}`}>
            {isUrdu ? `سورۃ ${surahInfo?.urduName || sura}` : `Surah ${surahInfo?.transliteration || sura}`}
          </Badge>
          <Badge variant="secondary" className={`text-xs ${isUrdu ? "font-urdu" : ""}`}>
            {isUrdu ? `آیت ${aya}` : `Ayah ${aya}`}
          </Badge>
          <span className={`text-xs text-muted-foreground hidden sm:inline ${isUrdu ? "font-urdu" : ""}`}>
            {isUrdu ? `پارہ ${juz}` : `Para ${juz}`}
          </span>
          <Badge variant="outline" className="hidden md:inline-flex text-[11px] text-muted-foreground">
            {isUrdu ? "اصل عربی تفسیر" : "Original Arabic"}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className={`h-7 gap-1 px-2 text-xs cursor-pointer ${isUrdu ? "font-urdu" : ""}`}
            title="Copy Arabic Tafsir text"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-emerald-500">{isUrdu ? "کاپی ہو گیا" : "Copied"}</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>{isUrdu ? "عربی کاپی کریں" : "Copy Arabic"}</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Pane Content */}
      <div
        dir="rtl"
        className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 selection:bg-amber-100 selection:text-amber-900 dark:selection:bg-amber-950 dark:selection:text-amber-100"
      >
        <article
          className="font-arabic leading-loose text-foreground/95"
          style={{ fontSize: `${fontSize}px` }}
          dangerouslySetInnerHTML={{ __html: arabicHtml }}
        />
      </div>
    </div>
  );
}
