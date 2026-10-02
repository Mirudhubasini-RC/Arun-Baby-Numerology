import styled from 'styled-components';
import { Quote } from 'lucide-react';
import { useLanguage } from '../../context/useLanguage';
import { Container, Eyebrow, Heading2, Section, SectionHeader } from '../ui/Layout';
import { Reveal } from '../ui/Reveal';
import { textStyle } from '../../styles/typography';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
    max-width: 640px;
  }
`;

const Card = styled.figure`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  transition: border-color ${({ theme }) => theme.motion.base} ease, box-shadow ${({ theme }) => theme.motion.base} ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryBorder};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 26px 22px;
  }
`;

const Mark = styled(Quote)`
  color: ${({ theme }) => theme.colors.primaryBorder};
  fill: ${({ theme }) => theme.colors.primaryBorder};
`;

const Text = styled.blockquote`
  ${textStyle('body')}
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
`;

const Author = styled.figcaption`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Initials = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.sky};
  color: ${({ theme }) => theme.colors.skyInk};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const Who = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;

  strong {
    font-size: 15.5px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`;

export function Testimonials() {
  const { t } = useLanguage();
  const { testimonials } = t;

  return (
    <Section id="testimonials">
      <Container>
        <Reveal>
          <SectionHeader>
            <Eyebrow>{testimonials.eyebrow}</Eyebrow>
            <Heading2>{testimonials.title}</Heading2>
          </SectionHeader>
        </Reveal>
        <Grid>
          {testimonials.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <Card>
                <Mark size={28} strokeWidth={0} aria-hidden="true" />
                <Text>{item.quote}</Text>
                <Author>
                  <Initials aria-hidden="true">{Array.from(item.name)[0]}</Initials>
                  <Who>
                    <strong>{item.name}</strong>
                    <span>{item.place}</span>
                  </Who>
                </Author>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
