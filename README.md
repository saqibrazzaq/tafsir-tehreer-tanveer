# Tafsir al-Tahrir wa al-Tanwir (تفسير التحرير والتنوير)

A web reader for studying **Tafsir al-Tahrir wa al-Tanwir** by **Imam Muhammad al-Tahir Ibn Ashur**, presenting each Qur'anic ayah alongside the original Arabic exegesis and Urdu or English translations where available.

## Features

- **Side-by-Side Reader:** Displays the original Arabic Tafsir commentary alongside an Urdu or English translation pane.
- **Pre-Translated Content Display:** Shows Urdu or English translations stored in PostgreSQL when available, and clearly indicates when a translation for an ayah is not available yet.
- **Uthmanic Qur'an Text:** Displays the Uthmanic Arabic text for each ayah from the database.
- **Fast Navigation:** Jump directly by **Para (Juz)**, **Surah**, or **Ayah**, or move sequentially using the previous/next buttons and keyboard shortcuts (`ArrowLeft` / `ArrowRight`).
- **Reading Controls:** Switch between Urdu and English, adjust font size, copy text, and toggle between light and dark themes.
- **About Page:** Includes project background and data source attribution at `/about`.

## Tech Stack

- **Framework:** Next.js (App Router), React, TypeScript
- **Styling & UI:** Tailwind CSS, shadcn/ui, Lucide icons, `next-themes`
- **Database:** PostgreSQL with Drizzle ORM (`postgres` driver)

## Getting Started

### 1. Prerequisites

- Node.js
- A PostgreSQL database

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root with your PostgreSQL connection string:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/your_database"
```

### 4. Push Schema & Seed the Database

Push the Drizzle schema and seed the `tafsir_tanveer` table from the JSON files in `docs/`:

```bash
npm run db:push
npm run db:seed
```

The seed script (`scripts/seed.ts`) loads:
- `docs/quran-uthmani.json` into `quran_text`
- `docs/Tanweer_30_Juz_JSON/Tanweer-Juz01.json` through `Tanweer-Juz30.json` into `arabic_text`

Urdu (`urdu_text`) and English (`english_text`) translations are read from the `tafsir_tanveer` table when populated.

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` — Start the Next.js development server
- `npm run build` — Build the production application
- `npm run start` — Start the production server
- `npm run typecheck` — Run TypeScript type checking (`tsc --noEmit`)
- `npm run lint` — Run ESLint
- `npm run format` — Format `.ts` and `.tsx` files with Prettier
- `npm run db:push` — Push the Drizzle schema to PostgreSQL
- `npm run db:seed` — Seed Qur'an and Arabic Tafsir data into PostgreSQL

## Data Source & Attribution

The Arabic text of *Tafsir al-Tahrir wa al-Tanwir* was sourced from the open-source repository:

- [abdalrhmanreda/islamic-data-assets](https://github.com/abdalrhmanreda/islamic-data-assets)

For easier organization and database seeding, the original Tafsir JSON was divided into 30 Juz files under `docs/Tanweer_30_Juz_JSON/`.
