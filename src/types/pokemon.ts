export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: PokemonListItem[]
}

export interface PokemonListItem {
  name: string
  url: string
}

export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  sprites: {
    other?: {
      'official-artwork'?: {
        front_default?: string
      }
    }
    front_default?: string
  }
  types: Array<{
    slot: number
    type: {
      name: string
    }
  }>
  stats: Array<{
    base_stat: number
    stat: {
      name: string
    }
  }>
}
