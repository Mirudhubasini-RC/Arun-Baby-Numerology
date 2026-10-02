import { useId, useState } from 'react';
import styled from 'styled-components';
import { Plus } from 'lucide-react';
import { useLanguage } from '../../context/useLanguage';
import { Body, Container, Eyebrow, Heading2, Lead, Section } from '../ui/Layout';
import { Reveal } from '../ui/Reveal';
import { textStyle } from '../../styles/typography';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: ${({ theme }) => theme.layout.gridGap};
  align-items: start;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Intro = styled.div`
  grid-column: 1 / span 4;
  position: sticky;
  top: calc(${({ theme }) => theme.layout.headerHeight} + ${({ theme }) => theme.layout.topBarHeight} + 32px);
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
    position: static;
  }
`;

const List = styled.div`
  grid-column: 6 / span 7;
  border-top: 1px solid ${({ theme }) => theme.colors.borderStrong};

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
  }
`;

const ItemWrap = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Trigger = styled.button<{ $open: boolean }>`
  ${textStyle('h3')}
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
  border: 0;
  background: none;
  text-align: left;
  color: ${({ theme, $open }) => ($open ? theme.colors.primary : theme.colors.text)};
  transition: color ${({ theme }) => theme.motion.fast} ease;

  && {
    font-size: 18px;

    ${({ theme }) => theme.media.mobile} {
      font-size: 17px;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const IconWrap = styled.span<{ $open: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid ${({ theme, $open }) => ($open ? theme.colors.primary : theme.colors.borderStrong)};
  color: ${({ theme, $open }) => ($open ? theme.colors.white : theme.colors.text)};
  background: ${({ theme, $open }) => ($open ? theme.colors.primary : 'transparent')};
  transition: all ${({ theme }) => theme.motion.base} ease;

  svg {
    transform: rotate(${({ $open }) => ($open ? '45deg' : '0deg')});
    transition: transform ${({ theme }) => theme.motion.base} ease;
  }
`;

const Panel = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? '1fr' : '0fr')};
  transition: grid-template-rows ${({ theme }) => theme.motion.base} ease;

  > div {
    overflow: hidden;
  }

  ${({ theme }) => theme.media.reducedMotion} {
    transition: none;
  }
`;

const Answer = styled(Body)`
  padding: 0 54px 26px 0;

  ${({ theme }) => theme.media.mobile} {
    padding-right: 0;
  }
`;

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <ItemWrap>
      <Trigger type="button" $open={open} aria-expanded={open} aria-controls={id} onClick={onToggle}>
        {q}
        <IconWrap $open={open}>
          <Plus size={16} strokeWidth={2} />
        </IconWrap>
      </Trigger>
      <Panel id={id} role="region" $open={open}>
        <div>
          <Answer>{a}</Answer>
        </div>
      </Panel>
    </ItemWrap>
  );
}

export function Faq() {
  const { t } = useLanguage();
  const { faq } = t;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" $tone="alt">
      <Container>
        <Grid>
          <Intro>
            <Reveal>
              <Eyebrow>{faq.eyebrow}</Eyebrow>
              <Heading2 style={{ margin: '16px 0' }}>{faq.title}</Heading2>
              <Lead>{faq.intro}</Lead>
            </Reveal>
          </Intro>
          <List>
            <Reveal delay={80}>
              {faq.items.map((item, i) => (
                <FaqItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </Reveal>
          </List>
        </Grid>
      </Container>
    </Section>
  );
}
