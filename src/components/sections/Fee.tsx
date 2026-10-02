import styled from 'styled-components';
import { ChevronRight, MessageCircle, CreditCard, FileCheck2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';
import { contact } from '../../content/contact';
import { Body, Container, Eyebrow, Heading2, Section } from '../ui/Layout';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { textStyle } from '../../styles/typography';

const Card = styled.div`
  max-width: 880px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.skyBorder};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
`;

const Top = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  padding: 44px 48px 36px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${Eyebrow} {
    margin-bottom: 12px;
  }

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 32px 22px 28px;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
  text-align: right;

  strong {
    font-size: 44px;
    line-height: 1;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: -0.02em;
    font-variant-numeric: tabular-nums;

    ${({ theme }) => theme.media.mobile} {
      font-size: 38px;
    }
  }

  span {
    ${textStyle('small')}
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const Steps = styled.ol`
  display: flex;
  align-items: stretch;
  padding: 28px 48px;
  background: ${({ theme }) => theme.colors.skySoft};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    gap: 14px;
    padding: 24px 22px;
  }
`;

const Step = styled.li`
  ${textStyle('small')}
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const StepIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  color: ${({ theme }) => theme.colors.primary};
`;

const Arrow = styled(ChevronRight)`
  flex-shrink: 0;
  align-self: center;
  margin: 0 12px 0 auto;
  color: ${({ theme }) => theme.colors.textSubtle};

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 36px 48px 44px;

  ${({ theme }) => theme.media.mobile} {
    padding: 28px 22px 32px;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
  }
`;

const WhatsappNumber = styled.a`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textMuted};

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-variant-numeric: tabular-nums;
  }

  &:hover strong {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme }) => theme.media.mobile} {
    text-align: center;
  }
`;

const stepIcons = [MessageCircle, CreditCard, FileCheck2];

export function Fee() {
  const { t } = useLanguage();
  const { fee } = t;

  return (
    <Section id="fee" $tone="sky">
      <Container>
        <Reveal>
          <Card>
            <Top>
              <div>
                <Eyebrow>{fee.eyebrow}</Eyebrow>
                <Heading2>{fee.title}</Heading2>
              </div>
              <Price>
                <strong>{fee.price}</strong>
                <span>{fee.priceUnit}</span>
              </Price>
            </Top>

            <Steps>
              {fee.steps.map((step, i) => {
                const Icon = stepIcons[i];
                return (
                  <Step key={step}>
                    <StepIcon>
                      <Icon size={17} strokeWidth={1.75} />
                    </StepIcon>
                    {step}
                    {i < fee.steps.length - 1 && <Arrow size={18} strokeWidth={1.75} aria-hidden="true" />}
                  </Step>
                );
              })}
            </Steps>

            <Bottom>
              <Body style={{ maxWidth: 'none' }}>{fee.description}</Body>
              <Actions>
                <Button href={contact.whatsappLink} target="_blank" rel="noopener noreferrer" $variant="whatsapp">
                  <FaWhatsapp size={19} />
                  {fee.cta}
                </Button>
                <WhatsappNumber href={contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                  {fee.whatsappLabel}: <strong>{contact.whatsappDisplay}</strong>
                </WhatsappNumber>
              </Actions>
            </Bottom>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}
