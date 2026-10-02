import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { content } from '../content/content';
import { createTheme, type Lang } from '../styles/style';
import { LanguageContext } from './useLanguage';

const STORAGE_KEY = 'preferred-language';

const getInitialLang = (): Lang => {
  const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
  return stored === 'ta' || stored === 'en' ? stored : 'en';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: content[lang] }), [lang]);
  const theme = useMemo(() => createTheme(lang), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LanguageContext.Provider>
  );
}
