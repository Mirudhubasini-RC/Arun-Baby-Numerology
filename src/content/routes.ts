import type { Lang } from '../styles/style';

export const langPaths: Record<Lang, string> = {
  en: '/',
  ta: '/ta/',
};

export const getLangFromPath = (pathname: string): Lang => (/^\/ta(\/|$)/.test(pathname) ? 'ta' : 'en');
