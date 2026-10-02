import { useState, type FormEvent } from 'react';
import styled, { css } from 'styled-components';
import { Phone, Clock, MapPin, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';
import { contact, whatsappWithMessage } from '../../content/contact';
import { Container, Eyebrow, Heading2, Heading3, IconBadge, Lead, Section, Small } from '../ui/Layout';
import { Reveal } from '../ui/Reveal';
import { textStyle } from '../../styles/typography';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: ${({ theme }) => theme.layout.gridGap};
  align-items: start;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Info = styled.div`
  grid-column: 1 / span 5;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${Eyebrow} {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
  }
`;

const Details = styled.ul`
  margin-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Detail = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const DetailText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span {
    font-size: 13.5px;
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  a,
  strong {
    ${textStyle('body')}
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.text};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const WhatsappBadge = styled(IconBadge)`
  background: #e8f6ee;
  color: ${({ theme }) => theme.colors.whatsapp};
`;

const FormCard = styled.form`
  grid-column: 7 / span 6;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};

  ${({ theme }) => theme.media.tablet} {
    grid-column: auto;
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 28px 22px;
  }
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: 14.5px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const inputStyles = css`
  width: 100%;
  padding: 12px 14px;
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color ${({ theme }) => theme.motion.fast} ease, box-shadow ${({ theme }) => theme.motion.fast} ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const Textarea = styled.textarea`
  ${inputStyles}
  min-height: 120px;
  resize: vertical;
`;

const Submit = styled.button`
  ${textStyle('button')}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  padding: 12px 24px;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: background-color ${({ theme }) => theme.motion.base} ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export function Contact() {
  const { t } = useLanguage();
  const { contact: c } = t;
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      c.form.greeting,
      name && `${c.form.name}: ${name}`,
      dob && `${c.form.dob}: ${dob}`,
      message && `${c.form.message}: ${message}`,
    ].filter(Boolean);
    window.open(whatsappWithMessage(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <Section id="contact">
      <Container>
        <Grid>
          <Info>
            <Reveal>
              <Eyebrow>{c.eyebrow}</Eyebrow>
              <Heading2 style={{ margin: '16px 0' }}>{c.title}</Heading2>
              <Lead>{c.intro}</Lead>
              <Details>
                <Detail>
                  <WhatsappBadge $size={40}>
                    <FaWhatsapp size={19} />
                  </WhatsappBadge>
                  <DetailText>
                    <span>{c.whatsappLabel}</span>
                    <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                      {contact.whatsappDisplay}
                    </a>
                  </DetailText>
                </Detail>
                <Detail>
                  <IconBadge $size={40}>
                    <Phone size={18} strokeWidth={1.75} />
                  </IconBadge>
                  <DetailText>
                    <span>{c.phoneLabel}</span>
                    <a href={contact.phoneLink}>{contact.whatsappDisplay}</a>
                  </DetailText>
                </Detail>
                <Detail>
                  <IconBadge $size={40}>
                    <Clock size={18} strokeWidth={1.75} />
                  </IconBadge>
                  <DetailText>
                    <span>{c.hoursLabel}</span>
                    <strong>{c.hours}</strong>
                  </DetailText>
                </Detail>
                <Detail>
                  <IconBadge $size={40}>
                    <MapPin size={18} strokeWidth={1.75} />
                  </IconBadge>
                  <DetailText>
                    <span>{c.locationLabel}</span>
                    <strong>{c.location}</strong>
                  </DetailText>
                </Detail>
              </Details>
            </Reveal>
          </Info>

          <FormCard onSubmit={onSubmit}>
            <Heading3>{c.form.title}</Heading3>
            <Field>
              <span>{c.form.name}</span>
              <Input
                type="text"
                name="name"
                autoComplete="name"
                placeholder={c.form.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Field>
            <Field>
              <span>{c.form.dob}</span>
              <Input type="date" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
            </Field>
            <Field>
              <span>{c.form.message}</span>
              <Textarea
                name="message"
                placeholder={c.form.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Field>
            <Submit type="submit">
              <Send size={17} strokeWidth={2} />
              {c.form.submit}
            </Submit>
            <Small style={{ textAlign: 'center' }}>{c.form.note}</Small>
          </FormCard>
        </Grid>
      </Container>
    </Section>
  );
}
