import styled from 'styled-components';
import { Baby, Building2, House, CalendarHeart, SpellCheck } from 'lucide-react';
import { useLanguage } from '../../context/useLanguage';
import { Container, Eyebrow, Heading2, Heading3, IconBadge, Lead, Section, SectionHeader, Small } from '../ui/Layout';
import { Reveal } from '../ui/Reveal';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: ${({ theme }) => theme.layout.gridGap};
  row-gap: 48px;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 28px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  height: 100%;
`;

const ItemTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
`;

const Hint = styled.span`
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.sky};
  color: ${({ theme }) => theme.colors.skyInk};
  font-size: 12.5px;
  line-height: 1.6;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => (theme.lang === 'en' ? '0.06em' : '0')};
  text-transform: ${({ theme }) => (theme.lang === 'en' ? 'uppercase' : 'none')};
  white-space: nowrap;
`;

const icons = [Baby, Building2, House, CalendarHeart, SpellCheck];

export function Service() {
  const { t } = useLanguage();
  const { service } = t;

  return (
    <Section id="service">
      <Container>
        <Reveal>
          <SectionHeader>
            <Eyebrow>{service.eyebrow}</Eyebrow>
            <Heading2>{service.title}</Heading2>
            <Lead>{service.intro}</Lead>
          </SectionHeader>
        </Reveal>

        <Grid>
          {service.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={(i % 3) * 70}>
                <Item>
                  <ItemTop>
                    <IconBadge>
                      <Icon size={21} strokeWidth={1.75} />
                    </IconBadge>
                    <Hint>{item.hint}</Hint>
                  </ItemTop>
                  <Heading3>{item.title}</Heading3>
                  <Small>{item.text}</Small>
                </Item>
              </Reveal>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
