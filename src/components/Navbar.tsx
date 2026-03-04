import styles from './Navbar.module.css'

interface NavbarProps {
  darkMode: boolean
  onToggleDarkMode: () => void
}

export const Navbar = ({ darkMode, onToggleDarkMode }: NavbarProps) => {
  return (
    <header className={styles.navbar}>
      <div>
        <h1>POKEMON API POR THE BURRO</h1>
      </div>
      <button type="button" className={styles.toggle} onClick={onToggleDarkMode}>
        {darkMode ? '☀️ Modo claro' : '🌙 Modo oscuro'}
      </button>
    </header>
  )
}
