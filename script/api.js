const getPokemon = async (name) => {
  const base ='https://pokeapi.co/api/v2/pokemon/'
  const pokeName = `${name}`
  const pokemonData = await fetch(base + pokeName) 
  const data = await pokemonData.json()
  return data

}



