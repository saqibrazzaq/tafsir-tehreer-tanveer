"use client";

import { useState, useEffect, useCallback, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ReaderNav } from "./reader-nav";
import { QuranAyahCard } from "./quran-ayah-card";
import { ArabicPane } from "./arabic-pane";
import { TranslationPane } from "./translation-pane";
import { getNextAyah, getPrevAyah } from "@/lib/quran-meta";
import { Skeleton } from "@/components/ui/skeleton";

export interface AyahData {
  id: number;
  sura: number;
  aya: number;
  juz: number;
  quranText: string | null;
  arabicText: string;
  urduText: string | null;
  englishText: string | null;
}

interface ReaderViewProps {
  initialAyah: AyahData;
}

export function ReaderView({ initialAyah }: ReaderViewProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [currentAyah, setCurrentAyah] = useState<AyahData>(initialAyah);
  const [targetLang, setTargetLang] = useState<"urdu" | "english">("urdu");
  const [fontSize, setFontSize] = useState<number>(20);
  const [loading, setLoading] = useState<boolean>(false);

  // Navigate to specific sura and aya
  const navigateTo = useCallback(
    async (sura: number, aya: number) => {
      setLoading(true);
      try {
        const res = await fetch(`/api/ayah?sura=${sura}&aya=${aya}`);
        if (!res.ok) throw new Error("Failed to load Ayah");
        const data = await res.json();
        setCurrentAyah(data);

        // Update URL search parameters without full reload
        startTransition(() => {
          const params = new URLSearchParams(searchParams.toString());
          params.set("sura", String(sura));
          params.set("aya", String(aya));
          router.replace(`/?${params.toString()}`, { scroll: false });
        });
      } catch (err) {
        console.error("Navigation error:", err);
      } finally {
        setLoading(false);
      }
    },
    [router, searchParams]
  );

  // Keyboard navigation: ArrowLeft (Next Ayah) / ArrowRight (Prev Ayah)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLSelectElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        const next = getNextAyah(currentAyah.sura, currentAyah.aya);
        if (next) navigateTo(next.sura, next.aya);
      } else if (e.key === "ArrowRight") {
        const prev = getPrevAyah(currentAyah.sura, currentAyah.aya);
        if (prev) navigateTo(prev.sura, prev.aya);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentAyah, navigateTo]);

  const activeTranslation =
    targetLang === "urdu" ? currentAyah.urduText : currentAyah.englishText;

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      {/* Top Navigation Bar */}
      <ReaderNav
        sura={currentAyah.sura}
        aya={currentAyah.aya}
        juz={currentAyah.juz}
        targetLang={targetLang}
        fontSize={fontSize}
        onNavigate={navigateTo}
        onLanguageChange={setTargetLang}
        onFontSizeChange={(delta) =>
          setFontSize((prev) => Math.min(28, Math.max(15, prev + delta)))
        }
      />

      {/* Main Reader View */}
      <main className="flex-1 flex flex-col overflow-hidden p-3 sm:p-4 lg:p-5 gap-3">
        {/* Prominent Quran Ayah Card */}
        <QuranAyahCard
          sura={currentAyah.sura}
          aya={currentAyah.aya}
          juz={currentAyah.juz}
          quranText={currentAyah.quranText}
          targetLang={targetLang}
        />

        {/* Dual-Pane Tafsir & Translation */}
        {loading ? (
          <div className="flex-1 grid grid-cols-1 gap-4 lg:grid-cols-2 min-h-0">
            <Skeleton className="h-full w-full rounded-xl" />
            <Skeleton className="h-full w-full rounded-xl" />
          </div>
        ) : (
          <div className="flex-1 grid grid-cols-1 gap-4 lg:grid-cols-2 overflow-hidden min-h-0">
            {/* Left Pane: Translation (Urdu or English) */}
            <div className="h-full overflow-hidden order-2 lg:order-1">
              <TranslationPane
                sura={currentAyah.sura}
                aya={currentAyah.aya}
                lang={targetLang}
                translation={activeTranslation}
                fontSize={fontSize}
              />
            </div>

            {/* Right Pane: Arabic Tafsir (Original) */}
            <div className="h-full overflow-hidden order-1 lg:order-2">
              <ArabicPane
                sura={currentAyah.sura}
                aya={currentAyah.aya}
                juz={currentAyah.juz}
                arabicHtml={currentAyah.arabicText}
                fontSize={fontSize}
                targetLang={targetLang}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
