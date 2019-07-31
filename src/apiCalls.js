export const fetchAnimals = async () => {
  try {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify(animals)
    }
    const response = await fetch('http://localhost:3001/api/v1/rescue-animals', options)
    if (!response.ok) {
      throw new Error ('Error fetching animals')
    }
    const animals = response.json()
    return animals
  } catch(error) {
    throw new Error(error.message)
  }
}

