const container = document.querySelector('.pokeList')
console.log(container)
const api ='https://pokeapi.co/api/v2/pokemon/'
const fetchPokemon = async () => {
  for (let i = 1; i <=905; i++){
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  const base =`https://pokeapi.co/api/v2/pokemon/${id}`
  const pokemonData = await fetch(base) 
  const pokemon = await pokemonData.json()
  creatCard(pokemon)

}

fetchPokemon()

function creatCard(pokemon) {
  const element = document.createElement("div")
  element.classList.add(`card`)
  element.classList.add(`${pokemon.types[0].type.name}`)
  const html =`
  
  <div class="cardHead">
    <img width="220px" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="">
    <div class="index"><p>#${pokemon.id}</p></div>
  </div>
  <div class="cardDetail">
    <div>
      <p>${pokemon.name}</p>
      <img src="img/eng/${pokemon.types[0].type.name}.png" alt="">
    </div>
    <div class="stats">
      <ul class="stats1">
        <li>HP: ${pokemon.stats[0].base_stat}</li>
        <li>ATK: ${pokemon.stats[1].base_stat}</li>
        <li>DEF: ${pokemon.stats[2].base_stat}</li>
      </ul>
  
      <ul class="stats2">
        <li>SP.ATK: ${pokemon.stats[3].base_stat}</li>
        <li>SP.DEF: ${pokemon.stats[4].base_stat}</li>
        <li>SPD: ${pokemon.stats[5].base_stat}</li>
      </ul>
    </div>
  </div>
  
  `
 element.innerHTML =html
 container.appendChild(element)
}
