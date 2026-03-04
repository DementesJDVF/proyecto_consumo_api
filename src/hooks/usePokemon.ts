import { useCallback, useEffect, useState } from 'react'
import { getPokemonByName, getPokemonByUrl, getPokemonPage, PAGE_SIZE } from '../services/api'
import type { Pokemon } from '../types/pokemon'

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [offset, setOffset] = useState(0)
  const [total, setTotal] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  const loadPokemon = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      if (searchTerm.trim()) {
        const singlePokemon = await getPokemonByName(searchTerm.trim())
        setPokemon([singlePokemon])
        setTotal(1)
        return
      }

      const page = await getPokemonPage(offset, PAGE_SIZE)
      const detailedPokemon = await Promise.all(page.results.map((item) => getPokemonByUrl(item.url)))

      setPokemon(detailedPokemon)
      setTotal(page.count)
    } catch (requestError) {
      setPokemon([])
      setError(requestError instanceof Error ? requestError.message : 'Ocurrió un error inesperado.')
    } finally {
      setLoading(false)
    }
  }, [offset, searchTerm])

  useEffect(() => {
    void loadPokemon()
  }, [loadPokemon])

  const goToNextPage = () => {
    if (offset + PAGE_SIZE < total) {
      setOffset((current) => current + PAGE_SIZE)
    }
  }

  const goToPreviousPage = () => {
    if (offset > 0) {
      setOffset((current) => current - PAGE_SIZE)
    }
  }

  const handleSearch = (term: string) => {
    setOffset(0)
    setSearchTerm(term)
  }

  return {
    pokemon,
    loading,
    error,
    offset,
    total,
    pageSize: PAGE_SIZE,
    searchTerm,
    goToNextPage,
    goToPreviousPage,
    handleSearch,
  }
}
