import type { MouseEvent } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../../context/useLanguage';
import { langPaths } from '../../content/routes';
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

const Option = styled.a<{ $active: boolean; $lang: Lang }>`
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 2px 12px;
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

  const onClick = (e: MouseEvent<HTMLAnchorElement>, next: Lang) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    setLang(next);
  };

  return (
    <Group role="group" aria-labelledby={labelledBy} aria-label={labelledBy ? undefined : 'Language / மொழி'}>
      {options.map((opt) => (
        <Option
          key={opt.value}
          href={langPaths[opt.value]}
          hrefLang={opt.value}
          lang={opt.value}
          $lang={opt.value}
          $active={lang === opt.value}
          aria-current={lang === opt.value ? 'page' : undefined}
          onClick={(e) => onClick(e, opt.value)}
        >
          {opt.label}
        </Option>
      ))}
    </Group>
  );
}
