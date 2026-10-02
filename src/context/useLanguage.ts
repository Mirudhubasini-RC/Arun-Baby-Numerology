import { createContext, useContext } from 'react';
import type { Content } from '../content/content';
import type { Lang } from '../styles/style';

export type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Content;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
