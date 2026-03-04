const URL_BASE = 'https://rickandmortyapi.com/api'

export const getCharacters = async (): Promise<any[]> => {
    try {
        const response = await fetch(`${URL_BASE}/character`)
    
        // if (response.error) throw new Error(response.error)
        
        return await response.json()
        
    } catch (error) {
        console.error("hubo un error")
        throw error;
    }
    
}