import { useState } from 'react'
import type { FormEvent } from 'react'
import styles from './SearchBar.module.css'

interface SearchBarProps {
  onSearch: (term: string) => void
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [value, setValue] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Busca por nombre (ej: pikachu)"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">Buscar</button>
      <button type="button" onClick={() => { setValue(''); onSearch('') }}>
        Limpiar
      </button>
    </form>
  )
}
