import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(${({ theme }) => theme.layout.headerHeight} + ${({ theme }) => theme.layout.topBarHeight});
    -webkit-text-size-adjust: 100%;
  }

  ${({ theme }) => theme.media.reducedMotion} {
    html { scroll-behavior: auto; }
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.type.body.size};
    font-weight: ${({ theme }) => theme.type.body.weight};
    line-height: ${({ theme }) => theme.type.body.lineHeight};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    ${({ theme }) => theme.media.mobile} {
      font-size: ${({ theme }) => theme.type.body.sizeMobile};
    }
  }

  h1, h2, h3, h4, p, ul, ol, figure, blockquote, dl, dd {
    margin: 0;
  }

  ul, ol {
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, textarea, select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
    border-radius: 2px;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primarySoft};
    color: ${({ theme }) => theme.colors.primaryActive};
  }
`;
