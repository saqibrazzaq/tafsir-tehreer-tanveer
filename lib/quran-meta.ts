export interface SurahMeta {
  number: number;
  name: string; // Arabic name
  urduName: string; // Urdu name (without 'سورۃ' prefix)
  transliteration: string; // English transliteration (without 'Surah' prefix)
  englishName: string; // English translation of name
  totalAyahs: number;
  revelationType: "Meccan" | "Medinan";
}

export const SURAH_LIST: SurahMeta[] = [
  { number: 1, name: "الفاتحة", urduName: "الفاتحہ", transliteration: "Al-Fatihah", englishName: "The Opening", totalAyahs: 7, revelationType: "Meccan" },
  { number: 2, name: "البقرة", urduName: "البقرہ", transliteration: "Al-Baqarah", englishName: "The Cow", totalAyahs: 286, revelationType: "Medinan" },
  { number: 3, name: "آل عمران", urduName: "آلِ عمران", transliteration: "Ali 'Imran", englishName: "Family of Imran", totalAyahs: 200, revelationType: "Medinan" },
  { number: 4, name: "النساء", urduName: "النساء", transliteration: "An-Nisa", englishName: "The Women", totalAyahs: 176, revelationType: "Medinan" },
  { number: 5, name: "المائدة", urduName: "المائدہ", transliteration: "Al-Ma'idah", englishName: "The Table Spread", totalAyahs: 120, revelationType: "Medinan" },
  { number: 6, name: "الأنعام", urduName: "الانعام", transliteration: "Al-An'am", englishName: "The Cattle", totalAyahs: 165, revelationType: "Meccan" },
  { number: 7, name: "الأعراف", urduName: "الاعراف", transliteration: "Al-A'raf", englishName: "The Heights", totalAyahs: 206, revelationType: "Meccan" },
  { number: 8, name: "الأنفال", urduName: "الانفال", transliteration: "Al-Anfal", englishName: "The Spoils of War", totalAyahs: 75, revelationType: "Medinan" },
  { number: 9, name: "التوبة", urduName: "التوبہ", transliteration: "At-Tawbah", englishName: "The Repentance", totalAyahs: 129, revelationType: "Medinan" },
  { number: 10, name: "يونس", urduName: "یونس", transliteration: "Yunus", englishName: "Jonah", totalAyahs: 109, revelationType: "Meccan" },
  { number: 11, name: "هود", urduName: "ہود", transliteration: "Hud", englishName: "Hud", totalAyahs: 123, revelationType: "Meccan" },
  { number: 12, name: "يوسف", urduName: "یوسف", transliteration: "Yusuf", englishName: "Joseph", totalAyahs: 111, revelationType: "Meccan" },
  { number: 13, name: "الرعد", urduName: "الرعد", transliteration: "Ar-Ra'd", englishName: "The Thunder", totalAyahs: 43, revelationType: "Medinan" },
  { number: 14, name: "ابراهيم", urduName: "ابراہیم", transliteration: "Ibrahim", englishName: "Abraham", totalAyahs: 52, revelationType: "Meccan" },
  { number: 15, name: "الحجر", urduName: "الحجر", transliteration: "Al-Hijr", englishName: "The Rocky Tract", totalAyahs: 99, revelationType: "Meccan" },
  { number: 16, name: "النحل", urduName: "النحل", transliteration: "An-Nahl", englishName: "The Bee", totalAyahs: 128, revelationType: "Meccan" },
  { number: 17, name: "الإسراء", urduName: "بنی اسرائیل (الاسراء)", transliteration: "Al-Isra", englishName: "The Night Journey", totalAyahs: 111, revelationType: "Meccan" },
  { number: 18, name: "الكهف", urduName: "الکہف", transliteration: "Al-Kahf", englishName: "The Cave", totalAyahs: 110, revelationType: "Meccan" },
  { number: 19, name: "مريم", urduName: "مریم", transliteration: "Maryam", englishName: "Mary", totalAyahs: 98, revelationType: "Meccan" },
  { number: 20, name: "طه", urduName: "طٰہٰ", transliteration: "Ta-Ha", englishName: "Ta-Ha", totalAyahs: 135, revelationType: "Meccan" },
  { number: 21, name: "الأنبياء", urduName: "الانبیاء", transliteration: "Al-Anbiya", englishName: "The Prophets", totalAyahs: 112, revelationType: "Meccan" },
  { number: 22, name: "الحج", urduName: "الحج", transliteration: "Al-Hajj", englishName: "The Pilgrimage", totalAyahs: 78, revelationType: "Medinan" },
  { number: 23, name: "المؤمنون", urduName: "المؤمنون", transliteration: "Al-Mu'minun", englishName: "The Believers", totalAyahs: 118, revelationType: "Meccan" },
  { number: 24, name: "النور", urduName: "النور", transliteration: "An-Nur", englishName: "The Light", totalAyahs: 64, revelationType: "Medinan" },
  { number: 25, name: "الفرقان", urduName: "الفرقان", transliteration: "Al-Furqan", englishName: "The Criterion", totalAyahs: 77, revelationType: "Meccan" },
  { number: 26, name: "الشعراء", urduName: "الشعراء", transliteration: "Ash-Shu'ara", englishName: "The Poets", totalAyahs: 227, revelationType: "Meccan" },
  { number: 27, name: "النمل", urduName: "النمل", transliteration: "An-Naml", englishName: "The Ant", totalAyahs: 93, revelationType: "Meccan" },
  { number: 28, name: "القصص", urduName: "القصص", transliteration: "Al-Qasas", englishName: "The Stories", totalAyahs: 88, revelationType: "Meccan" },
  { number: 29, name: "العنكبوت", urduName: "العنکبوت", transliteration: "Al-'Ankabut", englishName: "The Spider", totalAyahs: 69, revelationType: "Meccan" },
  { number: 30, name: "الروم", urduName: "الروم", transliteration: "Ar-Rum", englishName: "The Romans", totalAyahs: 60, revelationType: "Meccan" },
  { number: 31, name: "لقمان", urduName: "لقمان", transliteration: "Luqman", englishName: "Luqman", totalAyahs: 34, revelationType: "Meccan" },
  { number: 32, name: "السجدة", urduName: "السجدہ", transliteration: "As-Sajdah", englishName: "The Prostration", totalAyahs: 30, revelationType: "Meccan" },
  { number: 33, name: "الأحزاب", urduName: "الاحزاب", transliteration: "Al-Ahzab", englishName: "The Combined Forces", totalAyahs: 73, revelationType: "Medinan" },
  { number: 34, name: "سبإ", urduName: "سبا", transliteration: "Saba", englishName: "Sheba", totalAyahs: 54, revelationType: "Meccan" },
  { number: 35, name: "فاطر", urduName: "فاطر", transliteration: "Fatir", englishName: "Originator", totalAyahs: 45, revelationType: "Meccan" },
  { number: 36, name: "يس", urduName: "یٰسٓ", transliteration: "Ya-Sin", englishName: "Ya-Sin", totalAyahs: 83, revelationType: "Meccan" },
  { number: 37, name: "الصافات", urduName: "الصافات", transliteration: "As-Saffat", englishName: "Those who set the Ranks", totalAyahs: 182, revelationType: "Meccan" },
  { number: 38, name: "ص", urduName: "صٓ", transliteration: "Sad", englishName: "The Letter Sad", totalAyahs: 88, revelationType: "Meccan" },
  { number: 39, name: "الزمر", urduName: "الزمر", transliteration: "Az-Zumar", englishName: "The Troops", totalAyahs: 75, revelationType: "Meccan" },
  { number: 40, name: "غافر", urduName: "المؤمن (غافر)", transliteration: "Ghafir", englishName: "The Forgiver", totalAyahs: 85, revelationType: "Meccan" },
  { number: 41, name: "فصلت", urduName: "حٰمٓ السجدہ (فصلت)", transliteration: "Fussilat", englishName: "Explained in Detail", totalAyahs: 54, revelationType: "Meccan" },
  { number: 42, name: "الشورى", urduName: "الشورٰی", transliteration: "Ash-Shura", englishName: "The Consultation", totalAyahs: 53, revelationType: "Meccan" },
  { number: 43, name: "الزخرف", urduName: "الزخرف", transliteration: "Az-Zukhruf", englishName: "The Ornaments of Gold", totalAyahs: 89, revelationType: "Meccan" },
  { number: 44, name: "الدخان", urduName: "الدخان", transliteration: "Ad-Dukhan", englishName: "The Smoke", totalAyahs: 59, revelationType: "Meccan" },
  { number: 45, name: "الجاثية", urduName: "الجاثیہ", transliteration: "Al-Jathiyah", englishName: "The Crouching", totalAyahs: 37, revelationType: "Meccan" },
  { number: 46, name: "الأحقاف", urduName: "الاحقاف", transliteration: "Al-Ahqaf", englishName: "The Wind-Curved Sandhills", totalAyahs: 35, revelationType: "Meccan" },
  { number: 47, name: "محمد", urduName: "محمد", transliteration: "Muhammad", englishName: "Muhammad", totalAyahs: 38, revelationType: "Medinan" },
  { number: 48, name: "الفتح", urduName: "الفتح", transliteration: "Al-Fath", englishName: "The Victory", totalAyahs: 29, revelationType: "Medinan" },
  { number: 49, name: "الحجرات", urduName: "الحجرات", transliteration: "Al-Hujurat", englishName: "The Rooms", totalAyahs: 18, revelationType: "Medinan" },
  { number: 50, name: "ق", urduName: "قٓ", transliteration: "Qaf", englishName: "The Letter Qaf", totalAyahs: 45, revelationType: "Meccan" },
  { number: 51, name: "الذاريات", urduName: "الذاریات", transliteration: "Adh-Dhariyat", englishName: "The Winnowing Winds", totalAyahs: 60, revelationType: "Meccan" },
  { number: 52, name: "الطور", urduName: "الطور", transliteration: "At-Tur", englishName: "The Mount", totalAyahs: 49, revelationType: "Meccan" },
  { number: 53, name: "النجم", urduName: "النجم", transliteration: "An-Najm", englishName: "The Star", totalAyahs: 62, revelationType: "Meccan" },
  { number: 54, name: "القمر", urduName: "القمر", transliteration: "Al-Qamar", englishName: "The Moon", totalAyahs: 55, revelationType: "Meccan" },
  { number: 55, name: "الرحمن", urduName: "الرحمٰن", transliteration: "Ar-Rahman", englishName: "The Beneficent", totalAyahs: 78, revelationType: "Medinan" },
  { number: 56, name: "الواقعة", urduName: "الواقعہ", transliteration: "Al-Waqi'ah", englishName: "The Inevitable", totalAyahs: 96, revelationType: "Meccan" },
  { number: 57, name: "الحديد", urduName: "الحدید", transliteration: "Al-Hadid", englishName: "The Iron", totalAyahs: 29, revelationType: "Medinan" },
  { number: 58, name: "المجادلة", urduName: "المجادلہ", transliteration: "Al-Mujadila", englishName: "The Pleading Woman", totalAyahs: 22, revelationType: "Medinan" },
  { number: 59, name: "الحشر", urduName: "الحشر", transliteration: "Al-Hashr", englishName: "The Exile", totalAyahs: 24, revelationType: "Medinan" },
  { number: 60, name: "الممتحنة", urduName: "الممتحنہ", transliteration: "Al-Mumtahanah", englishName: "She that is to be examined", totalAyahs: 13, revelationType: "Medinan" },
  { number: 61, name: "الصف", urduName: "الصف", transliteration: "As-Saff", englishName: "The Ranks", totalAyahs: 14, revelationType: "Medinan" },
  { number: 62, name: "الجمعة", urduName: "الجمعہ", transliteration: "Al-Jumu'ah", englishName: "Friday", totalAyahs: 11, revelationType: "Medinan" },
  { number: 63, name: "المنافقون", urduName: "المنافقون", transliteration: "Al-Munafiqun", englishName: "The Hypocrites", totalAyahs: 11, revelationType: "Medinan" },
  { number: 64, name: "التغابن", urduName: "التغابن", transliteration: "At-Taghabun", englishName: "Mutual Disillusion", totalAyahs: 18, revelationType: "Medinan" },
  { number: 65, name: "الطلاق", urduName: "الطلاق", transliteration: "At-Talaq", englishName: "The Divorce", totalAyahs: 12, revelationType: "Medinan" },
  { number: 66, name: "التحريم", urduName: "التحریم", transliteration: "At-Tahrim", englishName: "The Prohibition", totalAyahs: 12, revelationType: "Medinan" },
  { number: 67, name: "الملك", urduName: "الملک", transliteration: "Al-Mulk", englishName: "The Sovereignty", totalAyahs: 30, revelationType: "Meccan" },
  { number: 68, name: "القلم", urduName: "القلم", transliteration: "Al-Qalam", englishName: "The Pen", totalAyahs: 52, revelationType: "Meccan" },
  { number: 69, name: "الحاقة", urduName: "الحاقہ", transliteration: "Al-Haqqah", englishName: "The Reality", totalAyahs: 52, revelationType: "Meccan" },
  { number: 70, name: "المعارج", urduName: "المعارج", transliteration: "Al-Ma'arij", englishName: "The Ascending Stairways", totalAyahs: 44, revelationType: "Meccan" },
  { number: 71, name: "نوح", urduName: "نوح", transliteration: "Nuh", englishName: "Noah", totalAyahs: 28, revelationType: "Meccan" },
  { number: 72, name: "الجن", urduName: "الجن", transliteration: "Al-Jinn", englishName: "The Jinn", totalAyahs: 28, revelationType: "Meccan" },
  { number: 73, name: "المزمل", urduName: "المزمل", transliteration: "Al-Muzzammil", englishName: "The Enshrouded One", totalAyahs: 20, revelationType: "Meccan" },
  { number: 74, name: "المدثر", urduName: "المدثر", transliteration: "Al-Muddaththir", englishName: "The Cloaked One", totalAyahs: 56, revelationType: "Meccan" },
  { number: 75, name: "القيامة", urduName: "القیامہ", transliteration: "Al-Qiyamah", englishName: "The Resurrection", totalAyahs: 40, revelationType: "Meccan" },
  { number: 76, name: "الانسان", urduName: "الدھر (الانسان)", transliteration: "Al-Insan", englishName: "Man", totalAyahs: 31, revelationType: "Medinan" },
  { number: 77, name: "المرسلات", urduName: "المرسلات", transliteration: "Al-Mursalat", englishName: "The Emissaries", totalAyahs: 50, revelationType: "Meccan" },
  { number: 78, name: "النبإ", urduName: "النباء (عم)", transliteration: "An-Naba", englishName: "The Tidings", totalAyahs: 40, revelationType: "Meccan" },
  { number: 79, name: "النازعات", urduName: "النازعات", transliteration: "An-Nazi'at", englishName: "Those who drag forth", totalAyahs: 46, revelationType: "Meccan" },
  { number: 80, name: "عبس", urduName: "عبس", transliteration: "'Abasa", englishName: "He Frowned", totalAyahs: 42, revelationType: "Meccan" },
  { number: 81, name: "التكوير", urduName: "التکویر", transliteration: "At-Takwir", englishName: "The Overthrowing", totalAyahs: 29, revelationType: "Meccan" },
  { number: 82, name: "الانفطار", urduName: "الانفطار", transliteration: "Al-Infitar", englishName: "The Cleaving", totalAyahs: 19, revelationType: "Meccan" },
  { number: 83, name: "المطففين", urduName: "المطففین", transliteration: "Al-Mutaffifin", englishName: "Defrauding", totalAyahs: 36, revelationType: "Meccan" },
  { number: 84, name: "الانشقاق", urduName: "الانشقاق", transliteration: "Al-Inshiqaq", englishName: "The Splitting Open", totalAyahs: 25, revelationType: "Meccan" },
  { number: 85, name: "البروج", urduName: "البروج", transliteration: "Al-Buruj", englishName: "The Mansions of the Stars", totalAyahs: 22, revelationType: "Meccan" },
  { number: 86, name: "الطارق", urduName: "الطارق", transliteration: "At-Tariq", englishName: "The Morning Star", totalAyahs: 17, revelationType: "Meccan" },
  { number: 87, name: "الأعلى", urduName: "الاعلیٰ", transliteration: "Al-A'la", englishName: "The Most High", totalAyahs: 19, revelationType: "Meccan" },
  { number: 88, name: "الغاشية", urduName: "الغاشیہ", transliteration: "Al-Ghashiyah", englishName: "The Overwhelming", totalAyahs: 26, revelationType: "Meccan" },
  { number: 89, name: "الفجر", urduName: "الفجر", transliteration: "Al-Fajr", englishName: "The Dawn", totalAyahs: 30, revelationType: "Meccan" },
  { number: 90, name: "البلد", urduName: "البلد", transliteration: "Al-Balad", englishName: "The City", totalAyahs: 20, revelationType: "Meccan" },
  { number: 91, name: "الشمس", urduName: "الشمس", transliteration: "Ash-Shams", englishName: "The Sun", totalAyahs: 15, revelationType: "Meccan" },
  { number: 92, name: "الليل", urduName: "اللیل", transliteration: "Al-Layl", englishName: "The Night", totalAyahs: 21, revelationType: "Meccan" },
  { number: 93, name: "الضحى", urduName: "الضحیٰ", transliteration: "Ad-Duha", englishName: "The Morning Hours", totalAyahs: 11, revelationType: "Meccan" },
  { number: 94, name: "الشرح", urduName: "الم نشرح", transliteration: "Ash-Sharh", englishName: "The Relief", totalAyahs: 8, revelationType: "Meccan" },
  { number: 95, name: "التين", urduName: "التین", transliteration: "At-Tin", englishName: "The Fig", totalAyahs: 8, revelationType: "Meccan" },
  { number: 96, name: "العلق", urduName: "العلق", transliteration: "Al-'Alaq", englishName: "The Clot", totalAyahs: 19, revelationType: "Meccan" },
  { number: 97, name: "القدر", urduName: "القدر", transliteration: "Al-Qadr", englishName: "The Power", totalAyahs: 5, revelationType: "Meccan" },
  { number: 98, name: "البينة", urduName: "البینہ", transliteration: "Al-Bayyinah", englishName: "The Clear Proof", totalAyahs: 8, revelationType: "Medinan" },
  { number: 99, name: "الزلزلة", urduName: "الزلزال", transliteration: "Az-Zalzalah", englishName: "The Earthquake", totalAyahs: 8, revelationType: "Medinan" },
  { number: 100, name: "العاديات", urduName: "العادیات", transliteration: "Al-'Adiyat", englishName: "The Courser", totalAyahs: 11, revelationType: "Meccan" },
  { number: 101, name: "القارعة", urduName: "القارعة", transliteration: "Al-Qari'ah", englishName: "The Calamity", totalAyahs: 11, revelationType: "Meccan" },
  { number: 102, name: "التكاثر", urduName: "التکاثر", transliteration: "At-Takathur", englishName: "The Rivalry in world increase", totalAyahs: 8, revelationType: "Meccan" },
  { number: 103, name: "العصر", urduName: "العصر", transliteration: "Al-'Asr", englishName: "The Declining Day", totalAyahs: 3, revelationType: "Meccan" },
  { number: 104, name: "الهمزة", urduName: "الہمزہ", transliteration: "Al-Humazah", englishName: "The Traducer", totalAyahs: 9, revelationType: "Meccan" },
  { number: 105, name: "الفيل", urduName: "الفیل", transliteration: "Al-Fil", englishName: "The Elephant", totalAyahs: 5, revelationType: "Meccan" },
  { number: 106, name: "قريش", urduName: "قریش", transliteration: "Quraysh", englishName: "Quraysh", totalAyahs: 4, revelationType: "Meccan" },
  { number: 107, name: "الماعون", urduName: "الماعون", transliteration: "Al-Ma'un", englishName: "The Small Kindnesses", totalAyahs: 7, revelationType: "Meccan" },
  { number: 108, name: "الكوثر", urduName: "الکوثر", transliteration: "Al-Kawthar", englishName: "The Abundance", totalAyahs: 3, revelationType: "Meccan" },
  { number: 109, name: "الكافرون", urduName: "الکافرون", transliteration: "Al-Kafirun", englishName: "The Disbelievers", totalAyahs: 6, revelationType: "Meccan" },
  { number: 110, name: "النصر", urduName: "النصر", transliteration: "An-Nasr", englishName: "The Divine Support", totalAyahs: 3, revelationType: "Medinan" },
  { number: 111, name: "المسد", urduName: "لہب (المسد)", transliteration: "Al-Masad", englishName: "The Palm Fiber", totalAyahs: 5, revelationType: "Meccan" },
  { number: 112, name: "الإخلاص", urduName: "الاخلاص", transliteration: "Al-Ikhlas", englishName: "The Sincerity", totalAyahs: 4, revelationType: "Meccan" },
  { number: 113, name: "الفلق", urduName: "الفلق", transliteration: "Al-Falaq", englishName: "The Daybreak", totalAyahs: 5, revelationType: "Meccan" },
  { number: 114, name: "الناس", urduName: "الناس", transliteration: "An-Nas", englishName: "Mankind", totalAyahs: 6, revelationType: "Meccan" },
];

export interface JuzMeta {
  juz: number;
  titleUrdu: string;
  titleEnglish: string;
  startSura: number;
  startAya: number;
}

export const JUZ_LIST: JuzMeta[] = [
  { juz: 1, titleUrdu: "الم", titleEnglish: "Alif Lam Meem", startSura: 1, startAya: 1 },
  { juz: 2, titleUrdu: "سیقول", titleEnglish: "Sayaqool", startSura: 2, startAya: 142 },
  { juz: 3, titleUrdu: "تلک الرسل", titleEnglish: "Tilka ar-Rusul", startSura: 2, startAya: 253 },
  { juz: 4, titleUrdu: "لن تنالوا", titleEnglish: "Lan Tanalu", startSura: 3, startAya: 93 },
  { juz: 5, titleUrdu: "والمحصنات", titleEnglish: "Wal-Muhsanat", startSura: 4, startAya: 24 },
  { juz: 6, titleUrdu: "لا یحب اللہ", titleEnglish: "La Yuhibbullah", startSura: 4, startAya: 148 },
  { juz: 7, titleUrdu: "واذا سمعوا", titleEnglish: "Wa Iza Sami'u", startSura: 5, startAya: 82 },
  { juz: 8, titleUrdu: "ولو اننا", titleEnglish: "Wa Lau Annana", startSura: 6, startAya: 111 },
  { juz: 9, titleUrdu: "قال الملا", titleEnglish: "Qal al-Mala'u", startSura: 7, startAya: 88 },
  { juz: 10, titleUrdu: "واعلموا", titleEnglish: "Wa'lamu", startSura: 8, startAya: 41 },
  { juz: 11, titleUrdu: "یعتذرون", titleEnglish: "Ya'taziruna", startSura: 9, startAya: 93 },
  { juz: 12, titleUrdu: "وما من دابۃ", titleEnglish: "Wa Mamin Dabbah", startSura: 11, startAya: 6 },
  { juz: 13, titleUrdu: "وما ابری", titleEnglish: "Wa Ma Ubarri'u", startSura: 12, startAya: 53 },
  { juz: 14, titleUrdu: "ربما", titleEnglish: "Rubama", startSura: 15, startAya: 1 },
  { juz: 15, titleUrdu: "سبحان الذی", titleEnglish: "Subhanallazi", startSura: 17, startAya: 1 },
  { juz: 16, titleUrdu: "قال الم", titleEnglish: "Qala Alam", startSura: 18, startAya: 75 },
  { juz: 17, titleUrdu: "اقترب", titleEnglish: "Iqtaraba", startSura: 21, startAya: 1 },
  { juz: 18, titleUrdu: "قد افلح", titleEnglish: "Qad Aflaha", startSura: 23, startAya: 1 },
  { juz: 19, titleUrdu: "وقال الذین", titleEnglish: "Wa Qalallazina", startSura: 25, startAya: 21 },
  { juz: 20, titleUrdu: "امن خلق", titleEnglish: "Amman Khalaqa", startSura: 27, startAya: 56 },
  { juz: 21, titleUrdu: "اتل ما اوحی", titleEnglish: "Utlu Ma Uhiya", startSura: 29, startAya: 46 },
  { juz: 22, titleUrdu: "ومن یقنت", titleEnglish: "Wa Man Yaqnut", startSura: 33, startAya: 31 },
  { juz: 23, titleUrdu: "وما انزلنا", titleEnglish: "Wa Ma Anzalna", startSura: 36, startAya: 28 },
  { juz: 24, titleUrdu: "فمن اظلم", titleEnglish: "Faman Azlamu", startSura: 39, startAya: 32 },
  { juz: 25, titleUrdu: "الیہ یرد", titleEnglish: "Ilayhi Yuraddu", startSura: 41, startAya: 47 },
  { juz: 26, titleUrdu: "حٰمٓ", titleEnglish: "Ha Meem", startSura: 46, startAya: 1 },
  { juz: 27, titleUrdu: "قال فما خطبکم", titleEnglish: "Qala Fama Khatbukum", startSura: 51, startAya: 31 },
  { juz: 28, titleUrdu: "قد سمع اللہ", titleEnglish: "Qad Sami'allah", startSura: 58, startAya: 1 },
  { juz: 29, titleUrdu: "تبارک الذی", titleEnglish: "Tabarakallazi", startSura: 67, startAya: 1 },
  { juz: 30, titleUrdu: "عم يتساءلون", titleEnglish: "'Amma", startSura: 78, startAya: 1 },
];

export function getSurah(number: number): SurahMeta | undefined {
  return SURAH_LIST.find((s) => s.number === number);
}

export function getJuz(number: number): JuzMeta | undefined {
  return JUZ_LIST.find((j) => j.juz === number);
}

export function getNextAyah(sura: number, aya: number): { sura: number; aya: number } | null {
  const currentSurah = getSurah(sura);
  if (!currentSurah) return null;

  if (aya < currentSurah.totalAyahs) {
    return { sura, aya: aya + 1 };
  } else if (sura < 114) {
    return { sura: sura + 1, aya: 1 };
  }
  return null; // End of Quran
}

export function getPrevAyah(sura: number, aya: number): { sura: number; aya: number } | null {
  if (aya > 1) {
    return { sura, aya: aya - 1 };
  } else if (sura > 1) {
    const prevSurah = getSurah(sura - 1);
    if (!prevSurah) return null;
    return { sura: sura - 1, aya: prevSurah.totalAyahs };
  }
  return null; // Beginning of Quran
}
