import clsx from 'clsx';
import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps {
  /** Доп классы */
  className?: string;
  /** Название ссылки */
  children: ReactNode;
  /** */
  theme?: AppLinkTheme
}

export function AppLink({
  className, children, to, theme = AppLinkTheme.PRIMARY,
}: AppLinkProps) {
  return (
    <Link to={to} className={clsx(className, styles.appLink, styles[theme])}>
      {children}
    </Link>
  );
}
