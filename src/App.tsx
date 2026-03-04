import { useEffect, useState } from 'react'
import { Home } from './pages/Home'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  return <Home darkMode={darkMode} onToggleDarkMode={() => setDarkMode((current) => !current)} />
}

export default App
