import type { Lang } from '../styles/style';

export const langPaths: Record<Lang, string> = {
  ta: '/',
  en: '/en/',
};

export const getLangFromPath = (pathname: string): Lang => (/^\/en(\/|$)/.test(pathname) ? 'en' : 'ta');
