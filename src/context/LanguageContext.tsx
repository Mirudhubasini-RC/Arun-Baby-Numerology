import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { content } from '../content/content';
import { getLangFromPath, langPaths } from '../content/routes';
import { createTheme, type Lang } from '../styles/style';
import { LanguageContext } from './useLanguage';

type Props = { initialLang: Lang; children: ReactNode };

export function LanguageProvider({ initialLang, children }: Props) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    const onPopState = () => setLangState(getLangFromPath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content[lang].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', content[lang].meta.description);
  }, [lang]);

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return;
      window.history.pushState(null, '', langPaths[next] + window.location.hash);
      setLangState(next);
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t: content[lang] }), [lang, setLang]);
  const theme = useMemo(() => createTheme(lang), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LanguageContext.Provider>
  );
}
