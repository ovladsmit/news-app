import clsx from 'clsx';
import styles from './Navbar.module.scss';

interface NavbarProps {
  /** Доп классы */
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={clsx(styles.navbar, className)}>
      <div className={clsx(styles.links)}>
        /
      </div>
    </div>
  );
}
