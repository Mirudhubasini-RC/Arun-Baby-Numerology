import styled from 'styled-components';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';
import { contact } from '../../content/contact';
import { Container } from '../ui/Layout';
import { Brand } from './Brand';

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.inkText};
  padding: 72px 0 32px;

  ${({ theme }) => theme.media.mobile} {
    padding: 56px 0 28px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: ${({ theme }) => theme.layout.gridGap};
  padding-bottom: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.inkSoft};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const BrandCol = styled.div`
  grid-column: 1 / span 5;
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 15px;
    line-height: ${({ theme }) => (theme.lang === 'ta' ? 1.8 : 1.65)};
    max-width: 380px;
  }

  ${({ theme }) => theme.media.tablet} {
    grid-column: 1 / -1;
  }
`;

const Col = styled.div<{ $start: number; $span: number }>`
  grid-column: ${({ $start, $span }) => `${$start} / span ${$span}`};

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
  }
`;

const ColTitle = styled.h3`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 18px;
  letter-spacing: ${({ theme }) => (theme.lang === 'en' ? '0.04em' : '0')};
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    transition: color ${({ theme }) => theme.motion.fast} ease;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 28px;
  font-size: 14px;
  color: rgba(201, 197, 218, 0.75);
`;

const sections = ['about', 'service', 'process', 'fee', 'faq', 'contact'] as const;

const year = new Date().getFullYear();

export function Footer() {
  const { t } = useLanguage();

  return (
    <Wrapper>
      <Container>
        <Grid>
          <BrandCol>
            <Brand inverse />
            <p>{t.footer.about}</p>
          </BrandCol>

          <Col $start={7} $span={2}>
            <ColTitle>{t.footer.linksTitle}</ColTitle>
            <Links>
              {sections.map((id) => (
                <li key={id}>
                  <a href={`#${id}`}>{t.nav[id]}</a>
                </li>
              ))}
            </Links>
          </Col>

          <Col $start={10} $span={3}>
            <ColTitle>{t.footer.contactTitle}</ColTitle>
            <Links>
              <li>
                <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={16} />
                  {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={contact.phoneLink}>
                  <Phone size={15} strokeWidth={1.75} />
                  {contact.whatsappDisplay}
                </a>
              </li>
            </Links>
          </Col>
        </Grid>

        <Bottom>
          <span>
            © {year} {t.brand.name}. {t.footer.rights}
          </span>
          <span>{t.brand.tagline}</span>
        </Bottom>
      </Container>
    </Wrapper>
  );
}
