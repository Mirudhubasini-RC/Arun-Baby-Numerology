import styled from 'styled-components';
import { Check } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';
import { whatsappWithMessage } from '../../content/contact';
import type { ServiceItem } from '../../content/content';
import { textStyle } from '../../styles/typography';
import { Container, Eyebrow, Heading2, Heading3, Lead, Section, SectionHeader, Small } from '../ui/Layout';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

const List = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Row = styled.article`
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) 280px;
  column-gap: 40px;
  padding: 40px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 52px minmax(0, 1fr);
    column-gap: 24px;
    row-gap: 24px;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    row-gap: 16px;
    padding: 32px 0;
  }
`;

const Index = styled.span`
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 4px;

  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 1.5px;
    margin-top: 10px;
    background: ${({ theme }) => theme.colors.primaryBorder};
  }

  ${({ theme }) => theme.media.mobile} {
    padding-top: 0;

    &::after {
      display: none;
    }
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
`;

const AltName = styled.p`
  font-size: 14.5px;
  line-height: 1.6;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textSubtle};
  margin-top: -6px;
`;

const Deliverables = styled.div`
  margin-top: 8px;
`;

const DeliverablesLabel = styled.p`
  font-size: 12.5px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => (theme.lang === 'en' ? '0.08em' : '0')};
  text-transform: ${({ theme }) => (theme.lang === 'en' ? 'uppercase' : 'none')};
  color: ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 10px;
`;

const DeliverableList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 24px;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Deliverable = styled.li`
  ${textStyle('small')}
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text};

  svg {
    flex-shrink: 0;
    margin-top: 0.3em;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 18px;
  padding-left: 28px;
  border-left: 1px solid ${({ theme }) => theme.colors.border};

  ${({ theme }) => theme.media.tablet} {
    grid-column: 2;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0 0;
    border-left: 0;
    border-top: 1px dashed ${({ theme }) => theme.colors.border};
  }

  ${({ theme }) => theme.media.mobile} {
    grid-column: 1;
    flex-direction: column;
    align-items: stretch;
  }
`;

const FeeBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FeeLabel = styled.span`
  font-size: 12.5px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => (theme.lang === 'en' ? '0.08em' : '0')};
  text-transform: ${({ theme }) => (theme.lang === 'en' ? 'uppercase' : 'none')};
  color: ${({ theme }) => theme.colors.textSubtle};
`;

const FeeRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  strong {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 26px;
    line-height: 1.2;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    letter-spacing: -0.01em;
    font-variant-numeric: tabular-nums;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    min-width: 64px;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const BookButton = styled(Button)`
  white-space: normal;
  text-align: center;

  svg {
    color: ${({ theme }) => theme.colors.whatsapp};
  }
`;

function ServiceRow({ item, index }: { item: ServiceItem; index: number }) {
  const { t, lang } = useLanguage();
  const { service } = t;
  const message = `${service.bookingMessage} ${item.name} (${item.altName})`;

  return (
    <Row>
      <Index aria-hidden="true">{String(index + 1).padStart(2, '0')}</Index>

      <Main>
        <Heading3>{item.name}</Heading3>
        <AltName lang={lang === 'ta' ? 'en' : 'ta'}>{item.altName}</AltName>
        <Small style={{ maxWidth: 620 }}>{item.text}</Small>
        <Deliverables>
          <DeliverablesLabel>{service.deliverablesLabel}</DeliverablesLabel>
          <DeliverableList>
            {item.deliverables.map((d) => (
              <Deliverable key={d}>
                <Check size={14} strokeWidth={2.5} />
                {d}
              </Deliverable>
            ))}
          </DeliverableList>
        </Deliverables>
      </Main>

      <Aside>
        <FeeBlock>
          <FeeLabel>{service.feeLabel}</FeeLabel>
          {item.fees.map((fee) => (
            <FeeRow key={fee.amount}>
              {fee.label && <span>{fee.label}</span>}
              <strong>{fee.amount}</strong>
            </FeeRow>
          ))}
        </FeeBlock>
        <BookButton
          href={whatsappWithMessage(message)}
          target="_blank"
          rel="noopener noreferrer"
          $variant="secondary"
          $size="sm"
        >
          <FaWhatsapp size={17} />
          {service.cta}
        </BookButton>
      </Aside>
    </Row>
  );
}

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

        <List role="list">
          {service.items.map((item, i) => (
            <Reveal key={item.name} role="listitem">
              <ServiceRow item={item} index={i} />
            </Reveal>
          ))}
        </List>
      </Container>
    </Section>
  );
}
