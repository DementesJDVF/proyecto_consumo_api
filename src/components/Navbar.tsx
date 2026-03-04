import styles from './Navbar.module.css'

interface NavbarProps {
  darkMode: boolean
  onToggleDarkMode: () => void
}

export const Navbar = ({ darkMode, onToggleDarkMode }: NavbarProps) => {
  return (
    <header className={styles.navbar}>
      <div>
        <p className={styles.tag}>creada por "dementesJDVF"</p>
        <h1>POKEMONES</h1>
      </div>
      <button type="button" className={styles.toggle} onClick={onToggleDarkMode}>
        {darkMode ? '☀️ Modo claro' : '🌙 Modo oscuro'}
      </button>
    </header>
  )
}
