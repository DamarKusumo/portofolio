'use client';

import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useLang } from '@/lib/i18n';

const controlClass =
  'flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

export function ThemeLangToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { lang, setLang, t } = useLang();

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2">
      <button
        type="button"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        aria-label={t.ui.theme}
        className={`${controlClass} w-11 h-11 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-200 shadow-md backdrop-blur hover:bg-gray-100 dark:hover:bg-gray-700`}
      >
        {/* CSS decides the icon so server and client HTML match (no hydration gate). */}
        <FaMoon className="w-5 h-5 dark:hidden" aria-hidden="true" />
        <FaSun className="w-5 h-5 hidden dark:block" aria-hidden="true" />
      </button>

      <div
        role="group"
        aria-label={t.ui.lang}
        className="flex items-center rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md backdrop-blur p-1"
      >
        {(['en', 'id'] as const).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`${controlClass} w-10 h-9 text-xs font-semibold uppercase ${
              lang === code
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {code}
          </button>
        ))}
      </div>
    </div>
  );
}
