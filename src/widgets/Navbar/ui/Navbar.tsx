import clsx from "clsx"
import { Link } from "react-router-dom"
import styles from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
interface NavbarProps {
  /**Доп классы */
  className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  return(
    <div className={clsx(styles.navbar)}>
      <div className={clsx(styles.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={clsx(styles.mainLink)}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  )
}
