import styled from 'styled-components';
import { useLanguage } from '../../context/useLanguage';
import { Body, Container, Eyebrow, Heading2, Section } from '../ui/Layout';
import { Reveal } from '../ui/Reveal';

const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: ${({ theme }) => theme.layout.gridGap};
  align-items: end;
  margin-bottom: 56px;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }
`;

const TitleCol = styled.div`
  grid-column: 1 / span 6;

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
  }
`;

const TextCol = styled.div`
  grid-column: 8 / span 5;

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
  }
`;

const Stats = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid ${({ theme }) => theme.colors.borderStrong};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  padding: 32px 24px 0 0;

  & + & {
    padding-left: 24px;
    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }

  ${({ theme }) => theme.media.tablet} {
    padding: 28px 16px 0 0;

    & + & {
      padding-left: 0;
      border-left: 0;
    }

    &:nth-child(even) {
      padding-left: 20px;
      border-left: 1px solid ${({ theme }) => theme.colors.border};
    }
  }

  dt {
    font-size: 15px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  dd {
    font-size: 40px;
    line-height: 1.1;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.primary};
    font-variant-numeric: tabular-nums;

    ${({ theme }) => theme.media.mobile} {
      font-size: 32px;
    }
  }
`;

export function Experience() {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <Section id="experience" $tone="alt">
      <Container>
        <Reveal>
          <Top>
            <TitleCol>
              <Eyebrow>{experience.eyebrow}</Eyebrow>
              <Heading2>{experience.title}</Heading2>
            </TitleCol>
            <TextCol>
              <Body>{experience.text}</Body>
            </TextCol>
          </Top>
        </Reveal>
        <Reveal delay={80}>
          <Stats>
            {experience.stats.map((s) => (
              <Stat key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </Stat>
            ))}
          </Stats>
        </Reveal>
      </Container>
    </Section>
  );
}
