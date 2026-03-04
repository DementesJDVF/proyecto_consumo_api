import { useMemo, useState } from 'react'
import { Pagination } from '../components/Pagination'
import { Loader } from '../components/Loader'
import { Navbar } from '../components/Navbar'
import { PokemonCard } from '../components/PokemonCard'
import { SearchBar } from '../components/SearchBar'
import { TypeFilter } from '../components/TypeFilter'
import { PokemonModal } from '../components/PokemonModal'
import { usePokemon } from '../hooks/usePokemon'
import type { Pokemon } from '../types/pokemon'
import styles from './Home.module.css'

interface HomeProps {
  darkMode: boolean
  onToggleDarkMode: () => void
}

export const Home = ({ darkMode, onToggleDarkMode }: HomeProps) => {
  const {
    pokemon,
    loading,
    error,
    offset,
    total,
    pageSize,
    searchTerm,
    goToNextPage,
    goToPreviousPage,
    handleSearch,
  } = usePokemon()

  const [activeType, setActiveType] = useState('all')
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

  const availableTypes = useMemo(() => {
    const typeSet = new Set<string>()
    pokemon.forEach((item) => item.types.forEach(({ type }) => typeSet.add(type.name)))
    return [...typeSet].sort((a, b) => a.localeCompare(b))
  }, [pokemon])

  const filteredPokemon = useMemo(() => {
    if (activeType === 'all') return pokemon
    return pokemon.filter((item) => item.types.some(({ type }) => type.name === activeType))
  }, [activeType, pokemon])

  return (
    <main className={styles.container}>
      <Navbar darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
      <p className={styles.subtitle}>
        Explora estadísticas reales de Pokémon con búsqueda, filtros visuales, detalle interactivo y paginación.
      </p>

      <SearchBar
        onSearch={(term) => {
          setActiveType('all')
          handleSearch(term)
        }}
      />

      {!loading && !error && !searchTerm && (
        <TypeFilter types={availableTypes} activeType={activeType} onChange={setActiveType} />
      )}

      {loading && <Loader />}

      {error && !loading && <p className={styles.error}>{error}</p>}

      {!loading && !error && (
        <>
          <section className={styles.grid}>
            {filteredPokemon.map((item) => (
              <PokemonCard key={item.id} pokemon={item} onSelect={setSelectedPokemon} />
            ))}
          </section>

          {filteredPokemon.length === 0 && <p className={styles.empty}>No hay Pokémon para ese filtro.</p>}

          {!searchTerm && (
            <Pagination
              offset={offset}
              total={total}
              pageSize={pageSize}
              onPrevious={goToPreviousPage}
              onNext={goToNextPage}
              disabled={loading}
            />
          )}
        </>
      )}

      {selectedPokemon && <PokemonModal pokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />}
    </main>
  )
}
