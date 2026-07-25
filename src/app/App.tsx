import { Link, Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { Suspense } from "react"
import { useTheme } from "app/providers/ThemeProvider"
import clsx from "clsx"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { AppRouter } from "app/providers/router"
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}


export const App = () => {
  const { theme, toogleTheme } = useTheme()

  return (
    <div className={clsx('app', theme)}>
      <button onClick={toogleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter/>
    </div>
  )
}