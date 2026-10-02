import styled from 'styled-components';
import { ArrowRight, Check, BadgeCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';
import { contact } from '../../content/contact';
import { textStyle } from '../../styles/typography';
import { Container, Eyebrow, Lead } from '../ui/Layout';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { ProfilePhoto } from '../ui/ProfilePhoto';

const Wrapper = styled.section`
  position: relative;
  padding: 72px 0 104px;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  ${({ theme }) => theme.media.tablet} {
    padding: 48px 0 80px;
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 32px 0 64px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: ${({ theme }) => theme.layout.gridGap};
  align-items: center;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

const Copy = styled.div`
  grid-column: 1 / span 7;

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
  }
`;

const Title = styled.h1`
  ${textStyle('hero')}
  color: ${({ theme }) => theme.colors.text};
  max-width: 620px;
  margin-bottom: 24px;
`;

const TrustList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 32px 0 40px;
`;

const TrustItem = styled.li`
  ${textStyle('small')}
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primarySoft};
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Visual = styled.div`
  grid-column: 9 / span 4;
  position: relative;

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
    max-width: 420px;
    width: 100%;
    margin: 0 auto;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 28px;
  right: -28px;
  bottom: -28px;
  left: 28px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.sky};

  ${({ theme }) => theme.media.mobile} {
    top: 18px;
    right: -14px;
    bottom: -18px;
    left: 18px;
  }
`;

const PhotoWrap = styled.div`
  position: relative;
`;

const Caption = styled.figcaption`
  position: absolute;
  left: -32px;
  bottom: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: calc(100% + 16px);
  padding: 14px 18px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  ${({ theme }) => theme.media.tablet} {
    left: 16px;
    right: 16px;
    bottom: 16px;
    max-width: none;
  }
`;

const CaptionText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.35;

  strong {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const VerifiedIcon = styled(BadgeCheck)`
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

export function Hero() {
  const { t } = useLanguage();
  const { hero } = t;

  return (
    <Wrapper id="top">
      <Container>
        <Grid>
          <Copy>
            <Reveal>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
              <Title>{hero.title}</Title>
              <Lead>{hero.subtitle}</Lead>
              <TrustList>
                {hero.trust.map((item) => (
                  <TrustItem key={item}>
                    <span>
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    {item}
                  </TrustItem>
                ))}
              </TrustList>
              <Ctas>
                <Button href={contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={19} />
                  {hero.primaryCta}
                </Button>
                <Button href="#process" $variant="secondary">
                  {hero.secondaryCta}
                  <ArrowRight className="arrow" size={17} strokeWidth={2} />
                </Button>
              </Ctas>
            </Reveal>
          </Copy>

          <Visual>
            <Reveal delay={120}>
              <figure>
                <PhotoWrap>
                  <Backdrop aria-hidden="true" />
                  <PhotoWrap>
                    <ProfilePhoto alt={hero.photoAlt} />
                  </PhotoWrap>
                  <Caption>
                    <VerifiedIcon size={22} strokeWidth={1.75} />
                    <CaptionText>
                      <strong>{hero.photoName}</strong>
                      <span>{hero.photoRole}</span>
                    </CaptionText>
                  </Caption>
                </PhotoWrap>
              </figure>
            </Reveal>
          </Visual>
        </Grid>
      </Container>
    </Wrapper>
  );
}
