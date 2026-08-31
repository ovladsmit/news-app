// Context для темы используют,
//  потому что тема нужна во множестве разных,
//  не связанных друг с другом мест приложения
import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme'
}
export interface ThemeContextProps {
  theme: Theme;
  setTheme: (value: Theme | ((prev: Theme) => Theme)) => void;
}
export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const LOCAL_STORAGE_THEME_KEY = 'theme';
