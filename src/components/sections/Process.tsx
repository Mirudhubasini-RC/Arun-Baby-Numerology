import styled from 'styled-components';
import { useLanguage } from '../../context/useLanguage';
import { Container, Eyebrow, Heading2, Heading3, Lead, Section, SectionHeader, Small } from '../ui/Layout';
import { Reveal } from '../ui/Reveal';

const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.layout.gridGap};
  counter-reset: step;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 48px;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    row-gap: 0;
  }
`;

const Step = styled.li<{ $last: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &::after {
    content: '';
    display: ${({ $last }) => ($last ? 'none' : 'block')};
    position: absolute;
    top: 22px;
    left: 60px;
    right: -16px;
    height: 1px;
    background: ${({ theme }) => theme.colors.skyBorder};
  }

  ${({ theme }) => theme.media.tablet} {
    &::after {
      display: none;
    }
  }

  ${({ theme }) => theme.media.mobile} {
    flex-direction: row;
    gap: 20px;
    padding-bottom: 32px;

    &::after {
      display: ${({ $last }) => ($last ? 'none' : 'block')};
      top: 52px;
      bottom: 4px;
      left: 22px;
      right: auto;
      width: 1px;
      height: auto;
    }
  }
`;

const StepNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-variant-numeric: tabular-nums;
  margin-bottom: 8px;
`;

const StepBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export function Process() {
  const { t } = useLanguage();
  const { process } = t;

  return (
    <Section id="process" $tone="sky">
      <Container>
        <Reveal>
          <SectionHeader>
            <Eyebrow>{process.eyebrow}</Eyebrow>
            <Heading2>{process.title}</Heading2>
            <Lead>{process.intro}</Lead>
          </SectionHeader>
        </Reveal>

        <Steps>
          {process.steps.map((step, i) => (
            <Step key={step.title} $last={i === process.steps.length - 1}>
              <Reveal delay={i * 80}>
                <StepNumber>{String(i + 1).padStart(2, '0')}</StepNumber>
              </Reveal>
              <Reveal delay={i * 80}>
                <StepBody>
                  <Heading3>{step.title}</Heading3>
                  <Small>{step.text}</Small>
                </StepBody>
              </Reveal>
            </Step>
          ))}
        </Steps>
      </Container>
    </Section>
  );
}
