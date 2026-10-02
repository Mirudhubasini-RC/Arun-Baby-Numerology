import styled from 'styled-components';
import { useLanguage } from '../../context/useLanguage';
import { fontFamilies, type Lang } from '../../styles/style';

const Group = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.white};
`;

const Option = styled.button<{ $active: boolean; $lang: Lang }>`
  min-height: 28px;
  padding: 2px 12px;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-family: ${({ $lang }) => fontFamilies[$lang]};
  font-size: 13.5px;
  line-height: 1.3;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.primary)};
  transition:
    background-color ${({ theme }) => theme.motion.base} ease,
    color ${({ theme }) => theme.motion.base} ease;

  &:hover {
    background: ${({ $active, theme }) => ($active ? theme.colors.primaryHover : theme.colors.primarySoft)};
  }
`;

const options: { value: Lang; label: string }[] = [
  { value: 'ta', label: 'தமிழ்' },
  { value: 'en', label: 'English' },
];

export function LanguageSwitch({ labelledBy }: { labelledBy?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <Group role="group" aria-labelledby={labelledBy} aria-label={labelledBy ? undefined : 'Language / மொழி'}>
      {options.map((opt) => (
        <Option
          key={opt.value}
          type="button"
          lang={opt.value}
          $lang={opt.value}
          $active={lang === opt.value}
          aria-pressed={lang === opt.value}
          onClick={() => setLang(opt.value)}
        >
          {opt.label}
        </Option>
      ))}
    </Group>
  );
}
