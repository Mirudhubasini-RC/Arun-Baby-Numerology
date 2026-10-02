import styled, { css } from 'styled-components';
import { textStyle } from '../../styles/typography';

export const Container = styled.div`
  width: 100%;
  max-width: calc(${({ theme }) => theme.layout.maxWidth} + 2 * ${({ theme }) => theme.layout.gutterDesktop});
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.gutterDesktop};

  ${({ theme }) => theme.media.tablet} {
    padding: 0 ${({ theme }) => theme.layout.gutterTablet};
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 0 ${({ theme }) => theme.layout.gutterMobile};
  }
`;

type Tone = 'default' | 'alt' | 'sky';

export const Section = styled.section<{ $tone?: Tone; $bordered?: boolean }>`
  padding: ${({ theme }) => theme.layout.sectionY} 0;
  background: ${({ theme, $tone = 'default' }) =>
    $tone === 'alt' ? theme.colors.backgroundAlt : $tone === 'sky' ? theme.colors.sky : theme.colors.background};

  ${({ $bordered, theme }) =>
    $bordered &&
    css`
      border-top: 1px solid ${theme.colors.border};
    `}

  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme }) => theme.layout.sectionYTablet} 0;
  }

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.layout.sectionYMobile} 0;
  }
`;

export const Eyebrow = styled.p`
  ${textStyle('eyebrow')}
  color: ${({ theme }) => theme.colors.primary};
  text-transform: ${({ theme }) => (theme.lang === 'en' ? 'uppercase' : 'none')};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  &::before {
    content: '';
    width: 20px;
    height: 1.5px;
    background: currentColor;
  }
`;

export const Heading2 = styled.h2`
  ${textStyle('h2')}
  color: ${({ theme }) => theme.colors.text};
`;

export const Heading3 = styled.h3`
  ${textStyle('h3')}
  color: ${({ theme }) => theme.colors.text};
`;

export const Lead = styled.p`
  ${textStyle('lead')}
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: ${({ theme }) => theme.layout.readableWidth};
`;

export const Body = styled.p`
  ${textStyle('body')}
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: ${({ theme }) => theme.layout.readableWidth};
`;

export const Small = styled.p`
  ${textStyle('small')}
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const SectionHeader = styled.header<{ $center?: boolean }>`
  max-width: 680px;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ $center }) =>
    $center &&
    css`
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      align-items: center;
    `}

  ${Eyebrow} {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.media.mobile} {
    margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  }
`;

/** Icon tile used beside list items and feature titles. */
export const IconBadge = styled.span<{ $size?: number }>`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size = 44 }) => $size}px;
  height: ${({ $size = 44 }) => $size}px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
`;
