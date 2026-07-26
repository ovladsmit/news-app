import { Link, Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { Suspense } from "react"
import { useTheme } from "app/providers/ThemeProvider"
import clsx from "clsx"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgets/Navbar"
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}


export const App = () => {
  const {theme} = useTheme()

  return (
    <div className={clsx('app', theme)}>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}