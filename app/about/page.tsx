import Link from "next/link";
import { ArrowLeft, BookOpen, Database, ExternalLink, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "About | Tafsir al-Tahrir wa al-Tanwir",
  description:
    "About this Tafsir al-Tahrir wa al-Tanwir reader application and its open-source data attribution.",
};

export default function AboutPage() {
  return (
    <div dir="ltr" className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-xs">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="outline" size="sm" className="gap-1.5 cursor-pointer">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Reader</span>
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-12 space-y-6">
        {/* Hero / Title Section */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5 text-primary" />
            <span>About This Project</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Tafsir al-Tahrir wa al-Tanwir
          </h1>
          <p className="font-arabic text-xl sm:text-2xl text-primary/90" dir="rtl">
            تفسير التحرير والتنوير — للإمام محمد الطاهر ابن عاشور
          </p>
        </div>

        {/* About the App */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Languages className="h-5 w-5 text-primary" />
              <span>About the Application</span>
            </CardTitle>
            <CardDescription>
              A focused, side-by-side reader for studying the classical Arabic exegesis alongside translations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <p>
              This web application is designed to make reading and studying{" "}
              <strong className="text-foreground">Tafsir al-Tahrir wa al-Tanwir</strong>{" "}
              (<em>The Verification and Enlightenment</em>) by{" "}
              <strong className="text-foreground">Imam Muhammad al-Tahir Ibn Ashur</strong>{" "}
              accessible in a clean, distraction-free interface.
            </p>
            <p>
              Each Qur&apos;anic ayah is presented with its Uthmanic Arabic text, the complete
              original Arabic commentary, and a companion pane for Urdu or English translations
              where available. You can navigate smoothly by Para (Juz), Surah, and Ayah, adjust
              reading font sizes, and switch between light and dark themes.
            </p>
          </CardContent>
        </Card>

        {/* Data Source & Attribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Database className="h-5 w-5 text-primary" />
              <span>Data Source &amp; Attribution</span>
            </CardTitle>
            <CardDescription>
              Open-source dataset used for the Arabic Tafsir text.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <p>
              The Arabic text of <em>Tafsir al-Tahrir wa al-Tanwir</em> used in this project was
              sourced from the open-source{" "}
              <strong className="text-foreground">islamic-data-assets</strong> repository on
              GitHub. For easier organization and database seeding, the original JSON dataset was
              divided into 30 parts corresponding to the 30 Juz of the Qur&apos;an.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border bg-muted/30 p-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">
                    abdalrhmanreda/islamic-data-assets
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    GitHub
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Original repository containing the Tafsir JSON data assets.
                </p>
              </div>

              <a
                href="https://github.com/abdalrhmanreda/islamic-data-assets"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="sm" className="gap-1.5 cursor-pointer w-full sm:w-auto">
                  <span>View Repository</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
