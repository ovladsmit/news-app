import { useTheme, Theme } from 'app/providers/ThemeProvider';
import clsx from 'clsx';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button/Button';
import styles from './ThemeSwitcher.module.scss';

interface ThemwSwitcherProps {
  /** Доп классы */
  className?: string
}

export function ThemeSwitcher({ className }: ThemwSwitcherProps) {
  const { theme, toogleTheme } = useTheme();
  return (
    <Button className={clsx(className, styles.ThemeSwitcher)} onClick={toogleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
}
