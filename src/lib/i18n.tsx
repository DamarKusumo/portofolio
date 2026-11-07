'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

const en = {
  ui: {
    theme: 'Switch theme',
    lang: 'Switch language',
  },
  hero: {
    greeting: "Hi, I'm",
    summary:
      'Full-Stack Developer & Software Engineer with entrepreneurial mindset. Graduate from Universitas Indonesia (Cumlaude, 3.71/4.00) specializing in cloud-native solutions and scalable applications.',
    currently: (
      <>
        Currently building modern HRIS platforms at{' '}
        <a
          href="https://andalsoftware.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          Andal Software
        </a>
        .
      </>
    ),
    years: 'Years Experience',
    certified: 'Certified Engineer',
    graduate: 'Graduate',
    ctaPrimary: "Let's Work Together",
    ctaSecondary: 'View Full Profile',
  },
  about: {
    heading: 'About Me',
    subtitle:
      'A passionate software engineer with entrepreneurial spirit and proven track record in building scalable applications and leading technical teams.',
    journey: 'My Journey',
    journeyP1: (
      <>
        Born and raised in Jakarta, I discovered my passion for technology during
        my studies at <strong>Universitas Indonesia</strong>, where I graduated
        Cumlaude with a degree in Information Systems.
      </>
    ),
    journeyP2: (
      <>
        My breakthrough came through{' '}
        <strong>Bangkit Academy&apos;s Cloud Computing Cohort</strong>, where I
        earned my Google Cloud certification and gained deep expertise in
        advanced cloud technologies and scalable system architectures.
      </>
    ),
    journeyP3: (
      <>
        Today, I focus on my role as a <strong>Team Leader</strong> at Andal
        Software, driving the modernization of cloud-native HRIS platforms and
        scalable solutions for the business.
      </>
    ),
    journeyP4: (
      <>
        I&apos;m driven by the challenge of transforming complex business
        requirements into elegant, scalable solutions that make a real impact.
      </>
    ),
    funFacts: 'Fun Facts About Me',
    facts: [
      '🏍️ Daily commuter from Tangerang to Jakarta (building resilience one ride at a time!)',
      '🎓 Thesis focused on Supply Chain Management Software Product Lines',
      '🌟 Passionate about open-source solutions that drive cost-efficiency',
      '🤝 Strong believer in mentoring and knowledge sharing',
    ],
    achievementsHeading: 'Key Achievements',
    achievements: [
      {
        title: 'Cumlaude Graduate',
        description: 'Universitas Indonesia - Sistem Informasi (IPK: 3.71/4.00)',
        period: '2020-2024',
      },
      {
        title: 'Google Cloud Certified',
        description: 'Associate Cloud Engineer - Bangkit Academy Graduate',
        period: 'Feb-Jul 2023',
      },
      {
        title: 'Team Leader at Andal Software',
        description:
          'Promoted to lead HRIS modernization after 3-month probation',
        period: 'Jul 2024-Present',
      },
    ],
  },
  skills: {
    heading: 'Technical Skills',
    subtitle:
      'Comprehensive expertise across the full technology stack, from frontend frameworks to cloud infrastructure and everything in between.',
    categories: {
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      cloud: 'Cloud & DevOps',
      database: 'Database & Tools',
    },
  },
  projects: {
    heading: 'Projects',
    subtitle:
      "A selection of things I've designed and built — real-world tools with real users.",
    moneyGuard:
      'Mobile-first PWA that checks any purchase against your budget before you buy — giving a clear AMAN, HATI-HATI, or JANGAN DULU verdict. No login, no backend, works offline, and data stays on your device.',
    visit: 'Visit site',
  },
  blog: {
    heading: 'Blog',
    subtitleLead:
      'Latest writing — tools, cloud, and things I learn along the way.',
    readAll: 'Read all →',
    readPost: 'Read post',
    visitBlog: 'Visit the blog →',
  },
};

const id: typeof en = {
  ui: {
    theme: 'Ganti tema',
    lang: 'Ganti bahasa',
  },
  hero: {
    greeting: 'Hai, saya',
    summary:
      'Full-Stack Developer & Software Engineer dengan pola pikir entrepreneur. Lulusan Universitas Indonesia (Cumlaude, 3.71/4.00) yang berfokus pada solusi cloud-native dan aplikasi yang skalabel.',
    currently: (
      <>
        Saat ini sedang membangun platform HRIS modern di{' '}
        <a
          href="https://andalsoftware.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          Andal Software
        </a>
        .
      </>
    ),
    years: 'Tahun Pengalaman',
    certified: 'Engineer Bersertifikat',
    graduate: 'Lulusan',
    ctaPrimary: 'Ayo Bekerja Sama',
    ctaSecondary: 'Lihat Profil Lengkap',
  },
  about: {
    heading: 'Tentang Saya',
    subtitle:
      'Software engineer yang bersemangat dengan jiwa entrepreneur dan rekam jejak terbukti dalam membangun aplikasi skalabel dan memimpin tim teknis.',
    journey: 'Perjalanan Saya',
    journeyP1: (
      <>
        Lahir dan besar di Jakarta, saya menemukan passion untuk teknologi
        selama studi di <strong>Universitas Indonesia</strong>, di mana saya
        lulus Cumlaude dengan gelar Sistem Informasi.
      </>
    ),
    journeyP2: (
      <>
        Titik balik saya datang dari{' '}
        <strong>Bangkit Academy Cloud Computing Cohort</strong>, di mana saya
        memperoleh sertifikasi Google Cloud dan mendalami teknologi cloud
        tingkat lanjut serta arsitektur sistem yang skalabel.
      </>
    ),
    journeyP3: (
      <>
        Hari ini, saya fokus pada peran sebagai <strong>Team Leader</strong> di
        Andal Software, mendorong modernisasi platform HRIS cloud-native dan
        solusi skalabel untuk bisnis.
      </>
    ),
    journeyP4: (
      <>
        Saya termotivasi oleh tantangan mengubah kebutuhan bisnis yang kompleks
        menjadi solusi elegan dan skalabel yang berdampak nyata.
      </>
    ),
    funFacts: 'Fakta Seru Tentang Saya',
    facts: [
      '🏍️ Commuter harian Tangerang–Jakarta (membangun ketahanan satu perjalanan!)',
      '🎓 Tesis tentang Software Product Lines untuk Supply Chain Management',
      '🌟 Menyukai solusi open-source yang mendorong efisiensi biaya',
      '🤝 Percaya kuat pada mentoring dan berbagi ilmu',
    ],
    achievementsHeading: 'Pencapaian Utama',
    achievements: [
      {
        title: 'Lulusan Cumlaude',
        description: 'Universitas Indonesia - Sistem Informasi (IPK: 3.71/4.00)',
        period: '2020-2024',
      },
      {
        title: 'Google Cloud Certified',
        description: 'Associate Cloud Engineer - Lulusan Bangkit Academy',
        period: 'Feb-Jul 2023',
      },
      {
        title: 'Team Leader di Andal Software',
        description:
          'Dipromosikan memimpin modernisasi HRIS setelah masa percobaan 3 bulan',
        period: 'Jul 2024-Sekarang',
      },
    ],
  },
  skills: {
    heading: 'Keahlian Teknis',
    subtitle:
      'Keahlian menyeluruh di seluruh tumpukan teknologi, dari framework frontend hingga infrastruktur cloud dan segala yang di antaranya.',
    categories: {
      frontend: 'Pengembangan Frontend',
      backend: 'Pengembangan Backend',
      cloud: 'Cloud & DevOps',
      database: 'Basis Data & Alat',
    },
  },
  projects: {
    heading: 'Proyek',
    subtitle:
      'Kumpulan hal yang saya rancang dan bangun — alat nyata dengan pengguna nyata.',
    moneyGuard:
      'PWA mobile-first yang mengecek setiap pembelian terhadap anggaran kamu sebelum beli — memberi keputusan AMAN, HATI-HATI, atau JANGAN DULU yang jelas. Tanpa login, tanpa backend, bisa offline, dan data tetap di perangkat kamu.',
    visit: 'Kunjungi situs',
  },
  blog: {
    heading: 'Blog',
    subtitleLead:
      'Tulisan terbaru — alat, cloud, dan hal-hal yang saya pelajari di perjalanan.',
    readAll: 'Baca semua →',
    readPost: 'Baca artikel',
    visitBlog: 'Kunjungi blog →',
  },
};

const dicts = { en, id };
export type Lang = keyof typeof dicts;
type Dict = typeof en;

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
}>({ lang: 'en', setLang: () => {}, t: en });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  // Persist only on explicit user choice — writing on mount would clobber the
  // saved value before the restore effect below can read it.
  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem('lang', next);
  };

  // Restore saved choice (or Indonesian browser) after mount to avoid SSR mismatch.
  useEffect(() => {
    const saved = localStorage.getItem('lang');
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is unavailable during SSR; restoring post-hydration is the only hydration-safe option
    setLangState(
      saved === 'en' || saved === 'id'
        ? saved
        : navigator.language.startsWith('id')
          ? 'id'
          : 'en'
    );
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: dicts[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
