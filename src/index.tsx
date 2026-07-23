import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './theme/ThemeProvider'
const container = document.getElementById('root') //получаем DOM-элемент
const root = createRoot(container!)//React создаёт внутреннюю структуру данных
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
)// Рендерим