import styled, { css } from 'styled-components';
import { textStyle } from '../../styles/typography';

type Variant = 'primary' | 'secondary' | 'whatsapp' | 'light';
type Size = 'md' | 'sm';

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textOnPrimary};
    border-color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
      border-color: ${({ theme }) => theme.colors.primaryHover};
    }
    &:active {
      background: ${({ theme }) => theme.colors.primaryActive};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.borderStrong};

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
  whatsapp: css`
    background: ${({ theme }) => theme.colors.whatsapp};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.whatsapp};

    &:hover {
      background: ${({ theme }) => theme.colors.whatsappHover};
      border-color: ${({ theme }) => theme.colors.whatsappHover};
    }
  `,
  light: css`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.ink};
    border-color: ${({ theme }) => theme.colors.white};

    &:hover {
      background: ${({ theme }) => theme.colors.primarySoft};
      border-color: ${({ theme }) => theme.colors.primarySoft};
    }
  `,
};

export const Button = styled.a<{ $variant?: Variant; $size?: Size; $block?: boolean }>`
  ${textStyle('button')}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: ${({ $size = 'md' }) => ($size === 'sm' ? '40px' : '50px')};
  padding: ${({ $size = 'md' }) => ($size === 'sm' ? '8px 16px' : '12px 24px')};
  border: 1.5px solid transparent;
  border-radius: ${({ theme }) => theme.radii.md};
  white-space: nowrap;
  cursor: pointer;
  transition:
    background-color ${({ theme }) => theme.motion.base} ease,
    border-color ${({ theme }) => theme.motion.base} ease,
    color ${({ theme }) => theme.motion.base} ease,
    transform ${({ theme }) => theme.motion.base} ease;

  ${({ $size = 'md' }) =>
    $size === 'sm' &&
    css`
      font-size: 14.5px;
    `}

  ${({ $variant = 'primary' }) => variants[$variant]}

  ${({ $block }) =>
    $block &&
    css`
      width: 100%;
    `}

  svg {
    flex-shrink: 0;
  }

  &:hover svg.arrow {
    transform: translateX(2px);
  }

  svg.arrow {
    transition: transform ${({ theme }) => theme.motion.base} ease;
  }

  ${({ theme }) => theme.media.mobile} {
    white-space: normal;
    text-align: center;
  }
`;
