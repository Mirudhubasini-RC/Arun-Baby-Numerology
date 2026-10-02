import styled from 'styled-components';
import { useLanguage } from '../../context/useLanguage';
import { textStyle } from '../../styles/typography';

const Link = styled.a<{ $inverse?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  ${({ theme }) => theme.media.mobile} {
    gap: 10px;
  }

  color: ${({ theme, $inverse }) => ($inverse ? theme.colors.white : theme.colors.text)};
`;

const Mark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.02em;

  flex-shrink: 0;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const Text = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const Name = styled.span`
  ${textStyle('brand')}
  white-space: nowrap;

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => (theme.lang === 'ta' ? '15px' : theme.type.brand.sizeMobile)};
  }
`;

const Tagline = styled.span<{ $inverse?: boolean }>`
  font-size: 12.5px;
  line-height: 1.3;
  color: ${({ theme, $inverse }) => ($inverse ? theme.colors.inkText : theme.colors.textSubtle)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  white-space: nowrap;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

export function Brand({ inverse = false }: { inverse?: boolean }) {
  const { t } = useLanguage();
  return (
    <Link href="#top" $inverse={inverse} aria-label={t.brand.name}>
      <Mark aria-hidden="true">AN</Mark>
      <Text>
        <Name>{t.brand.name}</Name>
        <Tagline $inverse={inverse}>{t.brand.tagline}</Tagline>
      </Text>
    </Link>
  );
}
