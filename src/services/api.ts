import type { Pokemon, PokemonListResponse } from '../types/pokemon'

const API_BASE = 'https://pokeapi.co/api/v2'
const DEFAULT_LIMIT = 12

export const getPokemonPage = async (
  offset = 0,
  limit = DEFAULT_LIMIT,
): Promise<PokemonListResponse> => {
  const response = await fetch(`${API_BASE}/pokemon?offset=${offset}&limit=${limit}`)

  if (!response.ok) {
    throw new Error('No fue posible obtener la lista de Pokémon.')
  }

  return response.json()
}

export const getPokemonByUrl = async (url: string): Promise<Pokemon> => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('No fue posible obtener el detalle de un Pokémon.')
  }

  return response.json()
}

export const getPokemonByName = async (name: string): Promise<Pokemon> => {
  const response = await fetch(`${API_BASE}/pokemon/${name.toLowerCase()}`)

  if (!response.ok) {
    throw new Error('No encontramos ese Pokémon. Intenta con otro nombre.')
  }

  return response.json()
}

export const PAGE_SIZE = DEFAULT_LIMIT
