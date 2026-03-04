import type { Pokemon } from '../types/pokemon'
import styles from './PokemonCard.module.css'

interface PokemonCardProps {
  pokemon: Pokemon
  onSelect: (pokemon: Pokemon) => void
}

const statLabels: Record<string, string> = {
  hp: 'Puntos de Vida',
  attack: 'Puntos de Ataque',
  defense: 'Puntos de Defensa',
}

export const PokemonCard = ({ pokemon, onSelect }: PokemonCardProps) => {
  const image =
    pokemon.sprites.other?.['official-artwork']?.front_default ?? pokemon.sprites.front_default ?? ''

  return (
    <article className={styles.card} onClick={() => onSelect(pokemon)}>
      <img src={image} alt={pokemon.name} className={styles.image} loading="lazy" />
      <h2>
        #{pokemon.id} {pokemon.name}
      </h2>
      <div className={styles.badges}>
        {pokemon.types.map(({ type }) => (
          <span key={type.name}>{type.name}</span>
        ))}
      </div>
      <ul>
        {pokemon.stats.slice(0, 3).map(({ stat, base_stat }) => (
          <li key={stat.name}>
            <div>
              {statLabels[stat.name] ?? stat.name}: <strong>{base_stat}</strong>
            </div>
            <progress max={140} value={base_stat} />
          </li>
        ))}
      </ul>
      <button type="button" className={styles.detailButton}>
        Ver detalle
      </button>
    </article>
  )
}
