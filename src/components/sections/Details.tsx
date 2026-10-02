import styled from 'styled-components';
import { Check, Info } from 'lucide-react';
import { useLanguage } from '../../context/useLanguage';
import { Body, Container, Eyebrow, Heading2, Heading3, Section, Small } from '../ui/Layout';
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

const Left = styled.div`
  grid-column: 1 / span 5;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${Eyebrow} {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
  }
`;

const Note = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 12px;
  padding: 18px 20px;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primarySoft};
  border-radius: 0 ${({ theme }) => theme.radii.md} ${({ theme }) => theme.radii.md} 0;

  svg {
    flex-shrink: 0;
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Card = styled.div`
  grid-column: 7 / span 6;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: 36px 40px;

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 28px 22px;
  }
`;

const List = styled.ul`
  margin-top: 20px;
`;

const Row = styled.li`
  ${textStyle('body')}
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 15px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};

  &:first-child {
    border-top: 0;
  }
`;

const Tick = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-top: 2px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.sky};
  color: ${({ theme }) => theme.colors.skyInk};
`;

const Label = styled.span`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 12px;
  row-gap: 6px;

  > span:first-child {
    flex: 1 1 200px;
  }
`;

const Tag = styled.span`
  flex-shrink: 0;
  margin-top: 3px;
  line-height: 1.6;
  padding: 2px 10px;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 12.5px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textSubtle};
`;

export function Details() {
  const { t } = useLanguage();
  const { details } = t;

  return (
    <Section id="details">
      <Container>
        <Grid>
          <Left>
            <Reveal>
              <Eyebrow>{details.eyebrow}</Eyebrow>
              <Heading2 style={{ margin: '16px 0 20px' }}>{details.title}</Heading2>
              <Body>{details.intro}</Body>
              <Note>
                <Info size={18} strokeWidth={1.75} />
                <Small>{details.note}</Small>
              </Note>
            </Reveal>
          </Left>

          <Card>
            <Reveal delay={80}>
              <Heading3>{details.listTitle}</Heading3>
              <List>
                {details.items.map((item) => (
                  <Row key={item.label}>
                    <Tick>
                      <Check size={14} strokeWidth={2.5} />
                    </Tick>
                    <Label>
                      <span>{item.label}</span>
                      {item.optional && <Tag>{details.optionalTag}</Tag>}
                    </Label>
                  </Row>
                ))}
              </List>
            </Reveal>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}
