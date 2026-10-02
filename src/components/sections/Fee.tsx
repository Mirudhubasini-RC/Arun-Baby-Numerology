import styled from 'styled-components';
import { ChevronRight, MessageCircle, CreditCard, FileCheck2, Wallet } from 'lucide-react';
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

const Note = styled.p`
  ${textStyle('small')}
  max-width: 300px;
  color: ${({ theme }) => theme.colors.textMuted};

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  ${({ theme }) => theme.media.mobile} {
    max-width: none;
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

const Numbers = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const NumberTile = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  min-width: 0;
`;

const TileIcon = styled.span<{ $tone: 'whatsapp' | 'primary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme, $tone }) => ($tone === 'whatsapp' ? theme.colors.whatsappSoft : theme.colors.primarySoft)};
  color: ${({ theme, $tone }) => ($tone === 'whatsapp' ? theme.colors.whatsapp : theme.colors.primary)};
`;

const TileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const TileLabel = styled.span`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textSubtle};
`;

const TileNumber = styled.span`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.text};

  a&:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TileHint = styled.span`
  font-size: 13.5px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Actions = styled.div`
  ${({ theme }) => theme.media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
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
              <Note>
                <a href="#service">{fee.note}</a>
              </Note>
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
              <Numbers>
                <NumberTile>
                  <TileIcon $tone="whatsapp">
                    <FaWhatsapp size={20} />
                  </TileIcon>
                  <TileText>
                    <TileLabel>{fee.whatsappLabel}</TileLabel>
                    <TileNumber as="a" href={contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                      {contact.whatsappDisplay}
                    </TileNumber>
                    <TileHint>{fee.whatsappHint}</TileHint>
                  </TileText>
                </NumberTile>
                <NumberTile>
                  <TileIcon $tone="primary">
                    <Wallet size={19} strokeWidth={1.75} />
                  </TileIcon>
                  <TileText>
                    <TileLabel>{fee.gpayLabel}</TileLabel>
                    <TileNumber>{contact.gpayDisplay}</TileNumber>
                    <TileHint>{fee.gpayHint}</TileHint>
                  </TileText>
                </NumberTile>
              </Numbers>
              <Actions>
                <Button href={contact.whatsappLink} target="_blank" rel="noopener noreferrer" $variant="whatsapp">
                  <FaWhatsapp size={19} />
                  {fee.cta}
                </Button>
              </Actions>
            </Bottom>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}
