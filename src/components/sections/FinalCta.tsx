import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';
import { contact } from '../../content/contact';
import { Container } from '../ui/Layout';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { textStyle } from '../../styles/typography';

const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 88px 0;

  ${({ theme }) => theme.media.mobile} {
    padding: 64px 0;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }
`;

const Copy = styled.div`
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  ${textStyle('h2')}
  color: ${({ theme }) => theme.colors.white};
`;

const Text = styled.p`
  ${textStyle('lead')}
  color: rgba(255, 255, 255, 0.82);
`;

const Cta = styled(Button)`
  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }

  svg {
    color: ${({ theme }) => theme.colors.whatsapp};
  }
`;

export function FinalCta() {
  const { t } = useLanguage();
  const { finalCta } = t;

  return (
    <Wrapper aria-labelledby="final-cta-title">
      <Container>
        <Reveal>
          <Inner>
            <Copy>
              <Title id="final-cta-title">{finalCta.title}</Title>
              <Text>{finalCta.text}</Text>
            </Copy>
            <Cta href={contact.whatsappLink} target="_blank" rel="noopener noreferrer" $variant="light">
              <FaWhatsapp size={20} />
              {finalCta.cta}
            </Cta>
          </Inner>
        </Reveal>
      </Container>
    </Wrapper>
  );
}
