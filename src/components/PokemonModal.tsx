import type { Pokemon } from '../types/pokemon'
import styles from './PokemonModal.module.css'

interface PokemonModalProps {
  pokemon: Pokemon
  onClose: () => void
}

const statLabels: Record<string, string> = {
  hp: 'HP',
  attack: 'Ataque',
  defense: 'Defensa',
  'special-attack': 'At. Especial',
  'special-defense': 'Def. Especial',
  speed: 'Velocidad',
}

export const PokemonModal = ({ pokemon, onClose }: PokemonModalProps) => {
  const image =
    pokemon.sprites.other?.['official-artwork']?.front_default ?? pokemon.sprites.front_default ?? ''

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={`Detalle de ${pokemon.name}`}>
      <article className={styles.modal}>
        <button type="button" onClick={onClose} className={styles.closeButton}>
          ✕
        </button>
        <img src={image} alt={pokemon.name} className={styles.image} />
        <h2>
          #{pokemon.id} {pokemon.name}
        </h2>
        <div className={styles.types}>
          {pokemon.types.map(({ type }) => (
            <span key={type.name}>{type.name}</span>
          ))}
        </div>
        <div className={styles.metrics}>
          <p>Altura: {pokemon.height / 10} m</p>
          <p>Peso: {pokemon.weight / 10} kg</p>
        </div>

        <ul className={styles.statList}>
          {pokemon.stats.map(({ stat, base_stat }) => (
            <li key={stat.name}>
              <div>
                <span>{statLabels[stat.name] ?? stat.name}</span>
                <strong>{base_stat}</strong>
              </div>
              <progress max={180} value={base_stat} />
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}
