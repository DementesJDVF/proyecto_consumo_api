import styles from './TypeFilter.module.css'

interface TypeFilterProps {
  types: string[]
  activeType: string
  onChange: (type: string) => void
}

export const TypeFilter = ({ types, activeType, onChange }: TypeFilterProps) => {
  return (
    <section className={styles.wrapper} aria-label="Filtro por tipo de Pokémon">
      <button
        type="button"
        className={activeType === 'all' ? styles.active : ''}
        onClick={() => onChange('all')}
      >
        Todos
      </button>
      {types.map((type) => (
        <button
          type="button"
          key={type}
          className={activeType === type ? styles.active : ''}
          onClick={() => onChange(type)}
        >
          {type}
        </button>
      ))}
    </section>
  )
}
