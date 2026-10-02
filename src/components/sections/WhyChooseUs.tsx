import styled from 'styled-components';
import { UserRound, BookOpenText, Lightbulb, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../../context/useLanguage';
import { Container, Eyebrow, Heading2, Heading3, IconBadge, Lead, Section, Small } from '../ui/Layout';
import { Reveal } from '../ui/Reveal';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: ${({ theme }) => theme.layout.gridGap};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Intro = styled.div`
  grid-column: 1 / span 4;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${Eyebrow} {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
  }
`;

const Items = styled.ul`
  grid-column: 6 / span 7;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 1px solid ${({ theme }) => theme.colors.border};

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${IconBadge} {
    margin-bottom: 8px;
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 28px 22px;
  }
`;

const icons = [UserRound, BookOpenText, Lightbulb, HeartHandshake];

export function WhyChooseUs() {
  const { t } = useLanguage();
  const { why } = t;

  return (
    <Section id="why">
      <Container>
        <Grid>
          <Intro>
            <Reveal>
              <Eyebrow>{why.eyebrow}</Eyebrow>
              <Heading2 style={{ margin: '16px 0' }}>{why.title}</Heading2>
              <Lead>{why.intro}</Lead>
            </Reveal>
          </Intro>
          <Items>
            {why.items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Item key={item.title}>
                  <Reveal delay={(i % 2) * 80}>
                    <IconBadge>
                      <Icon size={21} strokeWidth={1.75} />
                    </IconBadge>
                    <Heading3 style={{ margin: '20px 0 10px' }}>{item.title}</Heading3>
                    <Small>{item.text}</Small>
                  </Reveal>
                </Item>
              );
            })}
          </Items>
        </Grid>
      </Container>
    </Section>
  );
}
