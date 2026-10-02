import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './context/LanguageContext';
import { getLangFromPath } from './content/routes';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <LanguageProvider initialLang={getLangFromPath(window.location.pathname)}>
      <App />
    </LanguageProvider>
  </StrictMode>
);

if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
