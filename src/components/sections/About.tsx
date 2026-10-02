import styled from 'styled-components';
import { ShieldCheck, MessagesSquare, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../../context/useLanguage';
import { Body, Container, Eyebrow, Heading2, IconBadge, Section } from '../ui/Layout';
import { Reveal } from '../ui/Reveal';
import { textStyle } from '../../styles/typography';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: ${({ theme }) => theme.layout.gridGap};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const Left = styled.div`
  grid-column: 1 / span 5;

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
  }
`;

const Right = styled.div`
  grid-column: 7 / span 6;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
  }
`;

const Highlights = styled.ul`
  margin-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Highlight = styled.li`
  ${textStyle('body')}
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const icons = [ShieldCheck, MessagesSquare, HeartHandshake];

export function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <Section id="about" $tone="alt">
      <Container>
        <Grid>
          <Left>
            <Reveal>
              <Eyebrow>{about.eyebrow}</Eyebrow>
              <Heading2>{about.title}</Heading2>
            </Reveal>
          </Left>
          <Right>
            <Reveal delay={80}>
              {about.paragraphs.map((p) => (
                <Body key={p.slice(0, 24)} style={{ marginBottom: 20 }}>
                  {p}
                </Body>
              ))}
              <Highlights>
                {about.highlights.map((h, i) => {
                  const Icon = icons[i % icons.length];
                  return (
                    <Highlight key={h}>
                      <IconBadge $size={36}>
                        <Icon size={18} strokeWidth={1.75} />
                      </IconBadge>
                      {h}
                    </Highlight>
                  );
                })}
              </Highlights>
            </Reveal>
          </Right>
        </Grid>
      </Container>
    </Section>
  );
}
