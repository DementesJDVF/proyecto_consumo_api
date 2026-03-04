import styles from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.spinner} />
      <p>Cargando Pokémon...</p>
    </div>
  )
}
