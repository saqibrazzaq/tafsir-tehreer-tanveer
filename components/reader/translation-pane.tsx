"use client";

import { useState } from "react";
import { Copy, Check, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface TranslationPaneProps {
  sura: number;
  aya: number;
  lang: "urdu" | "english";
  translation: string | null | undefined;
  fontSize: number;
}

export function TranslationPane({
  sura,
  aya,
  lang,
  translation,
  fontSize,
}: TranslationPaneProps) {
  const [copied, setCopied] = useState(false);

  const isUrdu = lang === "urdu";
  const hasTranslation = Boolean(translation && translation.trim().length > 0);

  const handleCopy = async () => {
    if (!translation) return;
    try {
      const plainText = translation.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      await navigator.clipboard.writeText(
        `Tafsir al-Tahrir wa al-Tanwir (${isUrdu ? "اردو" : "English"}) - [${sura}:${aya}]:\n\n${plainText}`
      );
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
          <Badge variant={hasTranslation ? "default" : "outline"} className="text-xs">
            {isUrdu ? "اردو ترجمہ" : "English Translation"}
          </Badge>
          {hasTranslation && (
            <span className="text-xs text-muted-foreground">
              {isUrdu ? "محفوظ شدہ" : "Available"}
            </span>
          )}
        </div>

        {hasTranslation && (
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-7 gap-1 px-2 text-xs cursor-pointer"
              title="Copy translation"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-emerald-500">{isUrdu ? "کاپی ہو گیا" : "Copied"}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>{isUrdu ? "کاپی" : "Copy"}</span>
                </>
              )}
            </Button>
          </div>
        )}
      </div>

      {/* Pane Content */}
      <div
        dir={isUrdu ? "rtl" : "ltr"}
        className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 selection:bg-primary/20"
      >
        {hasTranslation ? (
          <article
            className={`${
              isUrdu ? "font-urdu leading-loose" : "font-sans leading-relaxed"
            } text-foreground/95`}
            style={{ fontSize: `${fontSize - (isUrdu ? 0 : 2)}px` }}
            dangerouslySetInnerHTML={{ __html: translation! }}
          />
        ) : (
          <div className="flex h-full min-h-[300px] flex-col items-center justify-center p-6 text-center">
            <Card className="max-w-md w-full border-dashed shadow-none">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <BookOpen className="h-6 w-6" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-semibold text-base">
                    {isUrdu
                      ? "اردو ترجمہ ابھی دستیاب نہیں ہے"
                      : "English Translation Not Available Yet"}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-normal">
                    {isUrdu
                      ? "اس آیت کے لیے تفسير التحرير والتنوير کا اردو ترجمہ ابھی شامل نہیں کیا گیا ہے۔"
                      : "The English translation of Tafsir al-Tahrir wa al-Tanwir for this ayah is not available yet."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
