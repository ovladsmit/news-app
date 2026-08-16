import './styles/index.scss';
import { Suspense} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import clsx from 'clsx';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export function App() {
  const { theme } = useTheme();
  return (
    <div className={clsx('app', theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
