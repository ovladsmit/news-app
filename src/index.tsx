import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { App } from './app/App';
import { Suspense } from 'react';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';
const container = document.getElementById('root'); // получаем DOM-элемент
const root = createRoot(container!);// React создаёт внутреннюю структуру данных
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <Suspense fallback={""}>
          <App />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);// Рендерим
