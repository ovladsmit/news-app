import clsx from 'clsx';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  /** Доп классы */
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  return (
    <div className={clsx(styles.navbar, className)}>
      <div className={clsx(styles.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={clsx(styles.mainLink)}>{t('Основная страница')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('О сайте')}</AppLink>
      </div>
    </div>
  );
}
