import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import type { Lang } from './styles/style';

export { content } from './content/content';
export { contact } from './content/contact';
export { langPaths } from './content/routes';

export function render(lang: Lang) {
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToString(
      sheet.collectStyles(
        <LanguageProvider initialLang={lang}>
          <App />
        </LanguageProvider>,
      ),
    );
    return { html, styles: sheet.getStyleTags() };
  } finally {
    sheet.seal();
  }
}
