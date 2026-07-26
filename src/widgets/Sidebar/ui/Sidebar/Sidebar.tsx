import { useState } from 'react';
import styles from './Sidebar.module.scss'
import clsx from 'clsx';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
interface SidebarProps {
  /*Доп классы*/
  className?: string;
  
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToogle = () => {
    setCollapsed((prev) => !prev)
  }
  return (
    <div className={clsx(className, styles.sidebar, {[styles.collapsed]: collapsed})}>
      <button onClick={onToogle}>toogle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};