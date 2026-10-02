import styled from 'styled-components';
import { Languages } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { contact } from '../../content/contact';
import { fontFamilies } from '../../styles/style';
import { Container } from '../ui/Layout';
import { LanguageSwitch } from './LanguageSwitch';

const Bar = styled.div`
  background: ${({ theme }) => theme.colors.sky};
  border-bottom: 1px solid ${({ theme }) => theme.colors.skyBorder};
`;

const Inner = styled(Container)`
  height: ${({ theme }) => theme.layout.topBarHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  ${({ theme }) => theme.media.narrow} {
    gap: 8px;
    padding: 0 14px;
  }
`;

const Phone = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;

  svg {
    color: ${({ theme }) => theme.colors.whatsapp};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const LangArea = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${fontFamilies.en};
  font-size: 13.5px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary};
  white-space: nowrap;

  ${({ theme }) => theme.media.mobile} {
    span {
      display: none;
    }
  }

  ${({ theme }) => theme.media.narrow} {
    display: none;
  }
`;

export function TopBar() {
  return (
    <Bar>
      <Inner>
        <Phone href={contact.whatsappLink} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={15} />
          {contact.whatsappDisplay}
        </Phone>
        <LangArea>
          <Label id="language-label">
            <Languages size={16} strokeWidth={1.9} aria-hidden="true" />
            <span>Language · மொழி</span>
          </Label>
          <LanguageSwitch labelledBy="language-label" />
        </LangArea>
      </Inner>
    </Bar>
  );
}
