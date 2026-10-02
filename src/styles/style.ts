/**
 * Design system — single source of truth for colour, typography,
 * spacing and layout. Components read these values through the
 * styled-components theme; nothing else should hard-code them.
 */

export type Lang = 'en' | 'ta';

/* ------------------------------------------------------------------ */
/* Colour                                                              */
/* ------------------------------------------------------------------ */

export const colors = {
  // Brand — muted violet, used for primary actions and key accents
  primary: '#5A3EA3',
  primaryHover: '#48308A',
  primaryActive: '#3C2875',
  primarySoft: '#F1EDFA',
  primaryBorder: '#DCD3F1',

  // Supporting light blue
  sky: '#EAF2FB',
  skySoft: '#F5F9FD',
  skyBorder: '#D5E3F3',
  skyInk: '#2F6BB3',

  // Neutrals
  white: '#FFFFFF',
  background: '#FFFFFF',
  backgroundAlt: '#F5F9FD',
  surface: '#FFFFFF',
  border: '#E3E8F0',
  borderStrong: '#CBD3E0',

  // Text
  text: '#1A1E2C',
  textMuted: '#555C70',
  textSubtle: '#80879A',
  textOnPrimary: '#FFFFFF',

  // Dark surfaces (closing CTA, footer)
  ink: '#1D1933',
  inkSoft: '#2A2547',
  inkText: '#C9C5DA',

  // WhatsApp — darkened slightly from the brand green for AA contrast
  whatsapp: '#1E9E52',
  whatsappHover: '#178644',
  whatsappSoft: '#E8F6EE',
} as const;

/* ------------------------------------------------------------------ */
/* Typography                                                          */
/* ------------------------------------------------------------------ */

export const fontFamilies = {
  en: "'Plus Jakarta Sans', 'Noto Sans Tamil', system-ui, -apple-system, 'Segoe UI', sans-serif",
  ta: "'Hind Madurai', 'Noto Sans Tamil', 'Plus Jakarta Sans', system-ui, sans-serif",
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

type TypeToken = {
  size: string;
  sizeMobile: string;
  weight: number;
  lineHeight: number;
  letterSpacing: string;
};

type TypeScale = {
  brand: TypeToken;
  hero: TypeToken;
  h2: TypeToken;
  h3: TypeToken;
  lead: TypeToken;
  body: TypeToken;
  small: TypeToken;
  eyebrow: TypeToken;
  button: TypeToken;
};

const englishScale: TypeScale = {
  brand: { size: '19px', sizeMobile: '17px', weight: 700, lineHeight: 1.2, letterSpacing: '-0.01em' },
  hero: { size: '52px', sizeMobile: '34px', weight: 600, lineHeight: 1.14, letterSpacing: '-0.025em' },
  h2: { size: '36px', sizeMobile: '28px', weight: 600, lineHeight: 1.22, letterSpacing: '-0.02em' },
  h3: { size: '21px', sizeMobile: '19px', weight: 600, lineHeight: 1.35, letterSpacing: '-0.01em' },
  lead: { size: '19px', sizeMobile: '17px', weight: 400, lineHeight: 1.65, letterSpacing: '0' },
  body: { size: '17px', sizeMobile: '16px', weight: 400, lineHeight: 1.65, letterSpacing: '0' },
  small: { size: '14.5px', sizeMobile: '14px', weight: 400, lineHeight: 1.55, letterSpacing: '0' },
  eyebrow: { size: '13px', sizeMobile: '12.5px', weight: 600, lineHeight: 1.4, letterSpacing: '0.12em' },
  button: { size: '15.5px', sizeMobile: '15px', weight: 600, lineHeight: 1.2, letterSpacing: '0' },
};

// Tamil glyphs are taller and words longer: slightly smaller display
// sizes, generous line-height and no tracking.
const tamilScale: TypeScale = {
  brand: { size: '19px', sizeMobile: '17px', weight: 700, lineHeight: 1.3, letterSpacing: '0' },
  hero: { size: '44px', sizeMobile: '30px', weight: 700, lineHeight: 1.4, letterSpacing: '0' },
  h2: { size: '32px', sizeMobile: '26px', weight: 600, lineHeight: 1.45, letterSpacing: '0' },
  h3: { size: '20px', sizeMobile: '18.5px', weight: 600, lineHeight: 1.55, letterSpacing: '0' },
  lead: { size: '18.5px', sizeMobile: '17px', weight: 400, lineHeight: 1.85, letterSpacing: '0' },
  body: { size: '17px', sizeMobile: '16px', weight: 400, lineHeight: 1.85, letterSpacing: '0' },
  small: { size: '15px', sizeMobile: '14.5px', weight: 400, lineHeight: 1.75, letterSpacing: '0' },
  eyebrow: { size: '14px', sizeMobile: '13.5px', weight: 600, lineHeight: 1.5, letterSpacing: '0' },
  button: { size: '15.5px', sizeMobile: '15px', weight: 600, lineHeight: 1.4, letterSpacing: '0' },
};

export const typeScales: Record<Lang, TypeScale> = {
  en: englishScale,
  ta: tamilScale,
};

/* ------------------------------------------------------------------ */
/* Spacing, layout, shape                                              */
/* ------------------------------------------------------------------ */

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
  '4xl': '64px',
  '5xl': '96px',
} as const;

export const layout = {
  maxWidth: '1200px',
  readableWidth: '640px',
  gutterDesktop: '40px',
  gutterTablet: '32px',
  gutterMobile: '20px',
  sectionY: '104px',
  sectionYTablet: '80px',
  sectionYMobile: '64px',
  headerHeight: '72px',
  headerHeightMobile: '64px',
  topBarHeight: '40px',
  gridColumns: 12,
  gridGap: '32px',
} as const;

export const radii = {
  sm: '6px',
  md: '8px',
  lg: '12px',
  full: '999px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(26, 30, 44, 0.04)',
  md: '0 1px 2px rgba(26, 30, 44, 0.04), 0 4px 16px rgba(26, 30, 44, 0.05)',
  lg: '0 2px 4px rgba(26, 30, 44, 0.04), 0 12px 32px rgba(26, 30, 44, 0.07)',
  focus: `0 0 0 3px ${colors.primaryBorder}`,
} as const;

export const breakpoints = {
  narrow: 360,
  mobile: 640,
  tablet: 960,
  desktop: 1200,
  // Width below which the header collapses to the menu button.
  // Tamil nav labels are longer, so they need more room.
  navCollapse: { en: 1000, ta: 1180 } as Record<Lang, number>,
} as const;

export const media = {
  narrow: `@media (max-width: ${breakpoints.narrow}px)`,
  mobile: `@media (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media (max-width: ${breakpoints.tablet}px)`,
  desktop: `@media (min-width: ${breakpoints.tablet + 1}px)`,
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
} as const;

export const motion = {
  fast: '150ms',
  base: '220ms',
  reveal: '700ms',
  easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
} as const;

/* ------------------------------------------------------------------ */
/* Theme                                                               */
/* ------------------------------------------------------------------ */

export const createTheme = (lang: Lang) => ({
  lang,
  colors,
  fonts: { body: fontFamilies[lang] },
  fontWeights,
  type: typeScales[lang],
  spacing,
  layout,
  radii,
  shadows,
  media: {
    ...media,
    navCollapsed: `@media (max-width: ${breakpoints.navCollapse[lang]}px)`,
  },
  motion,
});

export type AppTheme = ReturnType<typeof createTheme>;
