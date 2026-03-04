import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { getCharacters } from "./services/api";
import './App.css'

function App() {

  // variable para almacenar todos los personajes de la serie
  const [characters, setCharacters] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(()=> {
    const loadCharacters = async () => {
      // llamado a la url que tare, metodo GET
      try {
        // llamar función para hacer un llamado a un endpoint de un API
        const data = await getCharacters()
        setCharacters(data.results)
        console.log(data.results);
        
      } catch (error) {
        setError(error)
      } finally {
        console.log('finally');
        
      }
    }

    loadCharacters()
  }, [])

  return (
    <>
      <div>
        <h1>Personajes de la serie</h1>
        {characters.map((character:any) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
