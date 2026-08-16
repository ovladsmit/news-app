import { useState } from 'react';
import clsx from 'clsx';
import { ThemeSwitcher, LangSwitcher } from 'shared/ui/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  /* Доп классы */
  className?: string;

}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const onToogle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div data-testid='sidebar' className={clsx(className, styles.sidebar, { [styles.collapsed]: collapsed })}>
      <button data-testid="sidebar-toggle" type="button" onClick={onToogle}>toogle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
}
