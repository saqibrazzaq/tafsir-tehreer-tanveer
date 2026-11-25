"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, BookOpen, ZoomIn, ZoomOut, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox";
import {
  SURAH_LIST,
  JUZ_LIST,
  getSurah,
  getNextAyah,
  getPrevAyah,
} from "@/lib/quran-meta";

interface ReaderNavProps {
  sura: number;
  aya: number;
  juz: number;
  targetLang: "urdu" | "english";
  fontSize: number;
  onNavigate: (sura: number, aya: number) => void;
  onLanguageChange: (lang: "urdu" | "english") => void;
  onFontSizeChange: (delta: number) => void;
}

interface TwoLineOption {
  value: number;
  primary: string;
  secondary: string;
  displayValue: string;
}

export function ReaderNav({
  sura,
  aya,
  juz,
  targetLang,
  fontSize,
  onNavigate,
  onLanguageChange,
  onFontSizeChange,
}: ReaderNavProps) {
  const isUrdu = targetLang === "urdu";
  const currentSurah = useMemo(() => getSurah(sura) || SURAH_LIST[0], [sura]);
  const prev = useMemo(() => getPrevAyah(sura, aya), [sura, aya]);
  const next = useMemo(() => getNextAyah(sura, aya), [sura, aya]);

  // Juz Options: "Para" is in the outer label, NOT inside the item
  const juzOptions: TwoLineOption[] = useMemo(
    () =>
      JUZ_LIST.map((j) => {
        const startSurah = getSurah(j.startSura);
        const name = isUrdu ? j.titleUrdu : j.titleEnglish;
        return {
          value: j.juz,
          primary: `${j.juz}. ${name}`,
          secondary: isUrdu
            ? `آغاز: ${startSurah?.urduName || j.startSura} (${j.startSura}:${j.startAya})`
            : `Starts at ${startSurah?.transliteration || j.startSura} (${j.startSura}:${j.startAya})`,
          displayValue: `${j.juz}. ${name}`,
        };
      }),
    [isUrdu]
  );

  const selectedJuzOption = useMemo(
    () => juzOptions.find((o) => o.value === juz) || juzOptions[0],
    [juzOptions, juz]
  );

  // Surah Options: "Surah" is in the outer label, NOT inside the item
  const surahOptions: TwoLineOption[] = useMemo(
    () =>
      SURAH_LIST.map((s) => ({
        value: s.number,
        primary: isUrdu ? `${s.number}. ${s.urduName}` : `${s.number}. ${s.transliteration}`,
        secondary: isUrdu
          ? `${s.transliteration} • ${s.revelationType === "Meccan" ? "مکی" : "مدنی"} • ${s.totalAyahs} آیات`
          : `${s.name} • ${s.englishName} • ${s.totalAyahs} verses`,
        displayValue: isUrdu ? `${s.number}. ${s.urduName}` : `${s.number}. ${s.transliteration}`,
      })),
    [isUrdu]
  );

  const selectedSurahOption = useMemo(
    () => surahOptions.find((o) => o.value === sura) || surahOptions[0],
    [surahOptions, sura]
  );

  // Ayah Options: "Ayah" is in the outer label, NOT inside the item
  const ayahOptions: TwoLineOption[] = useMemo(
    () =>
      Array.from({ length: currentSurah.totalAyahs }, (_, i) => ({
        value: i + 1,
        primary: `${i + 1}`,
        secondary: isUrdu ? currentSurah.urduName : currentSurah.transliteration,
        displayValue: `${i + 1}`,
      })),
    [currentSurah, isUrdu]
  );

  const selectedAyahOption = useMemo(
    () => ayahOptions.find((o) => o.value === aya) || ayahOptions[0],
    [ayahOptions, aya]
  );

  const handleJuzSelect = (opt: TwoLineOption | null) => {
    if (!opt) return;
    const selected = JUZ_LIST.find((j) => j.juz === opt.value);
    if (selected) {
      onNavigate(selected.startSura, selected.startAya);
    }
  };

  const handleSurahSelect = (opt: TwoLineOption | null) => {
    if (!opt) return;
    onNavigate(opt.value, 1);
  };

  const handleAyahSelect = (opt: TwoLineOption | null) => {
    if (!opt) return;
    onNavigate(sura, opt.value);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-xs">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6">
        {/* Brand & Title */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h1 className={`${isUrdu ? "font-urdu text-lg" : "font-sans font-semibold text-base"} leading-tight`}>
              {isUrdu ? "تفسیر التحریر والتنویر" : "Tafsir al-Tahrir wa al-Tanwir"}
            </h1>
            <p className="text-xs text-muted-foreground">
              {isUrdu ? "علامہ ابن عاشور • اردو ترجمہ" : "Imam Ibn Ashur • English Translation"}
            </p>
          </div>
        </div>

        {/* Clean shadcn Comboboxes with outer labels for Para, Surah, Ayah */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Para / Juz Combobox */}
          <div className="flex items-center gap-1.5">
            <label htmlFor="juz-combobox" className={`text-xs font-semibold text-muted-foreground shrink-0 ${isUrdu ? "font-urdu" : ""}`}>
              {isUrdu ? "پارہ:" : "Para:"}
            </label>
            <div className="w-[140px] sm:w-[155px]">
              <Combobox
                items={juzOptions}
                value={selectedJuzOption}
                onValueChange={handleJuzSelect}
                itemToStringLabel={(item: TwoLineOption) => item?.displayValue || ""}
                isItemEqualToValue={(a: TwoLineOption, b: TwoLineOption) => a?.value === b?.value}
              >
                <ComboboxInput
                  id="juz-combobox"
                  placeholder={isUrdu ? "منتخب کریں..." : "Select..."}
                  className={`h-8 text-xs font-medium ${isUrdu ? "font-urdu" : ""}`}
                />
                <ComboboxContent align="start" className="min-w-[220px]">
                  <ComboboxEmpty>{isUrdu ? "کوئی نتیجہ نہیں" : "No results."}</ComboboxEmpty>
                  <ComboboxList className="max-h-64">
                    {(item: TwoLineOption) => (
                      <ComboboxItem
                        key={item.value}
                        value={item}
                        className="py-1.5 cursor-pointer"
                      >
                        <div className={`flex flex-col gap-0.5 text-start ${isUrdu ? "font-urdu" : ""}`}>
                          <span className="font-semibold text-foreground text-xs leading-snug">
                            {item.primary}
                          </span>
                          <span className="text-[11px] text-muted-foreground leading-none font-normal">
                            {item.secondary}
                          </span>
                        </div>
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
          </div>

          {/* Surah Combobox */}
          <div className="flex items-center gap-1.5">
            <label htmlFor="surah-combobox" className={`text-xs font-semibold text-muted-foreground shrink-0 ${isUrdu ? "font-urdu" : ""}`}>
              {isUrdu ? "سورۃ:" : "Surah:"}
            </label>
            <div className="w-[170px] sm:w-[195px]">
              <Combobox
                items={surahOptions}
                value={selectedSurahOption}
                onValueChange={handleSurahSelect}
                itemToStringLabel={(item: TwoLineOption) => item?.displayValue || ""}
                isItemEqualToValue={(a: TwoLineOption, b: TwoLineOption) => a?.value === b?.value}
              >
                <ComboboxInput
                  id="surah-combobox"
                  placeholder={isUrdu ? "تلاش کریں..." : "Search..."}
                  className={`h-8 text-xs font-medium ${isUrdu ? "font-urdu" : ""}`}
                />
                <ComboboxContent align="start" className="min-w-[260px]">
                  <ComboboxEmpty>{isUrdu ? "کوئی نتیجہ نہیں" : "No results."}</ComboboxEmpty>
                  <ComboboxList className="max-h-64">
                    {(item: TwoLineOption) => (
                      <ComboboxItem
                        key={item.value}
                        value={item}
                        className="py-1.5 cursor-pointer"
                      >
                        <div className={`flex flex-col gap-0.5 text-start ${isUrdu ? "font-urdu" : ""}`}>
                          <span className="font-semibold text-foreground text-xs leading-snug">
                            {item.primary}
                          </span>
                          <span className="text-[11px] text-muted-foreground leading-none font-normal">
                            {item.secondary}
                          </span>
                        </div>
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
          </div>

          {/* Ayah Combobox */}
          <div className="flex items-center gap-1.5">
            <label htmlFor="ayah-combobox" className={`text-xs font-semibold text-muted-foreground shrink-0 ${isUrdu ? "font-urdu" : ""}`}>
              {isUrdu ? "آیت:" : "Ayah:"}
            </label>
            <div className="w-[80px] sm:w-[90px]">
              <Combobox
                items={ayahOptions}
                value={selectedAyahOption}
                onValueChange={handleAyahSelect}
                itemToStringLabel={(item: TwoLineOption) => item?.displayValue || ""}
                isItemEqualToValue={(a: TwoLineOption, b: TwoLineOption) => a?.value === b?.value}
              >
                <ComboboxInput
                  id="ayah-combobox"
                  placeholder={isUrdu ? "آیت..." : "Ayah..."}
                  className={`h-8 text-xs font-medium text-center ${isUrdu ? "font-urdu" : ""}`}
                />
                <ComboboxContent align="start" className="min-w-[140px]">
                  <ComboboxEmpty>{isUrdu ? "نہیں ملی" : "Not found"}</ComboboxEmpty>
                  <ComboboxList className="max-h-64">
                    {(item: TwoLineOption) => (
                      <ComboboxItem
                        key={item.value}
                        value={item}
                        className="py-1 cursor-pointer"
                      >
                        <div className={`flex flex-col gap-0.5 text-start ${isUrdu ? "font-urdu" : ""}`}>
                          <span className="font-semibold text-foreground text-xs leading-snug">
                            {item.primary}
                          </span>
                          <span className="text-[10px] text-muted-foreground leading-none font-normal">
                            {item.secondary}
                          </span>
                        </div>
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
          </div>

          {/* Previous / Next Ayah Buttons */}
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 cursor-pointer"
              disabled={!prev}
              onClick={() => prev && onNavigate(prev.sura, prev.aya)}
              title={prev ? (isUrdu ? `پچھلی آیت (${prev.sura}:${prev.aya})` : `Previous Ayah (${prev.sura}:${prev.aya})`) : ""}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 cursor-pointer"
              disabled={!next}
              onClick={() => next && onNavigate(next.sura, next.aya)}
              title={next ? (isUrdu ? `اگلی آیت (${next.sura}:${next.aya})` : `Next Ayah (${next.sura}:${next.aya})`) : ""}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Translation Language Switcher & Utilities */}
        <div className="flex items-center gap-2">
          {/* Segmented Language Switcher (Urdu / English) */}
          <div className="inline-flex rounded-lg border bg-muted/60 p-0.5">
            <button
              type="button"
              onClick={() => onLanguageChange("urdu")}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                isUrdu
                  ? "bg-background text-foreground shadow-sm font-urdu font-bold"
                  : "text-muted-foreground hover:text-foreground font-urdu"
              }`}
            >
              اردو
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange("english")}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                !isUrdu
                  ? "bg-background text-foreground shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              English
            </button>
          </div>

          {/* Font Size Adjusters */}
          <div className="hidden items-center gap-1 sm:flex">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 cursor-pointer"
              onClick={() => onFontSizeChange(-1)}
              disabled={fontSize <= 15}
              title={isUrdu ? "فونٹ سائز کم کریں" : "Decrease Font Size"}
            >
              <ZoomOut className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 cursor-pointer"
              onClick={() => onFontSizeChange(1)}
              disabled={fontSize >= 28}
              title={isUrdu ? "فونٹ سائز بڑا کریں" : "Increase Font Size"}
            >
              <ZoomIn className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* About Page Link */}
          <Link href="/about">
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1.5 px-2.5 text-xs cursor-pointer"
              title={isUrdu ? "تعارف" : "About"}
            >
              <Info className="h-3.5 w-3.5" />
              <span className={`hidden sm:inline ${isUrdu ? "font-urdu" : ""}`}>
                {isUrdu ? "تعارف" : "About"}
              </span>
            </Button>
          </Link>

          {/* Dark / Light Mode Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
