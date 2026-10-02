import { css, type DefaultTheme } from 'styled-components';

type TypeKey = keyof DefaultTheme['type'];

/** Applies a token from the type scale, including its mobile size. */
export const textStyle = (key: TypeKey) => css`
  font-size: ${({ theme }) => theme.type[key].size};
  font-weight: ${({ theme }) => theme.type[key].weight};
  line-height: ${({ theme }) => theme.type[key].lineHeight};
  letter-spacing: ${({ theme }) => theme.type[key].letterSpacing};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.type[key].sizeMobile};
  }
`;
