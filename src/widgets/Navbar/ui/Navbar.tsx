import clsx from 'clsx';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import styles from './Navbar.module.scss';

interface NavbarProps {
  /** Доп классы */
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={clsx(styles.navbar, className)}>
      <div className={clsx(styles.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={clsx(styles.mainLink)}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
      </div>
    </div>
  );
}
