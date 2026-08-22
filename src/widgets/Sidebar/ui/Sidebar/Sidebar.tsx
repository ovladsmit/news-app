import { useState } from 'react';
import clsx from 'clsx';
import { ThemeSwitcher, LangSwitcher } from 'shared/ui/ThemeSwitcher';
import styles from './Sidebar.module.scss';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'

interface SidebarProps {
  /* Доп классы */
  className?: string;

}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation()
  const onToogle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div data-testid='sidebar' className={clsx(className, styles.sidebar, { [styles.collapsed]: collapsed })}>
      <Button size={ButtonSize.L} square theme={ThemeButton.BACKGROUND_INVERTED} className={styles.collapsedBtn} data-testid="sidebar-toggle" type="button" onClick={onToogle}>
        {collapsed ? ">" : '<'}
      </Button>
      <div className={styles.items}>

        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={styles.item}

        >
          <MainIcon className={styles.icon} />
          <span className={clsx(styles.link)}>
            {t('Основная страница')}
          </span>
        </AppLink>


        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={styles.item}

        >
          <AboutIcon className={styles.icon} />
          <span className={clsx(styles.link)}>
            {t('О сайте')}
          </span>
        </AppLink>



      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={styles.lang} />
      </div>
    </div>
  );
}
