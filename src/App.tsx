import { Link, Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { Suspense, useContext, useState } from "react"
import { ThemeContext } from "./theme/ThemeContext"
import { useTheme } from "./theme/useTheme"
import clsx from "clsx"
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}


export const App = () => {
  const {theme, toogleTheme} = useTheme()

  return (
    <div className={clsx('app', theme)}>
      <button onClick={toogleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync/>}/>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}