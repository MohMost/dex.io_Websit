const container = document.querySelector(".pokeList");
const containers = document.querySelectorAll(".pokeList .card");
const language = document.querySelector(".header .navbar ul .language")
const base = `https://pokeapi.co/api/v2/pokemon/`
const h1 = document.querySelector(".h1 h1 p")
const addForm = document.querySelector(".add")
const input = document.querySelector(".add input")
const or = document.querySelector(".searchBar .or")
const by = document.querySelector(".searchBar .or .by")
const by2 = document.querySelector(".searchBar .filters .filter p")
const fetchPokemon = async () => {
  for (let i = 1; i <= 800; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const base = `https://pokeapi.co/api/v2/pokemon/${id}`
  const base2=`https://pokeapi.co/api/v2/pokemon-species/${id}`
  const pokemonData = await fetch(base);
  const pokemon = await pokemonData.json();
  const pokemonData2 = await fetch(base2);
  const pokemon2 = await pokemonData2.json();
  creatCard(pokemon, pokemon2);
  
};

fetchPokemon();

function creatCard(pokemon, pokemon2) {
  const main = document.querySelector("main");
  const element = document.createElement("div");
  
  const buttons = `
     <div class="buttons">
      <a class="viewDetails" href="#">
        <img src="img/glass-solid.svg" width="15px">
        <p>View Details</p>
        <img style="opacity:0;" src="img/glass-solid.svg" width="15px">
      </a>
      <a class="addToTeam" href="#">
        <img src="img/plus-solid.svg" width="15px">
        <p>Add to a team</p>
        <img style="opacity:0;" src="img/plus-solid.svg" width="15px">
      </a>
     </div>
  `;
  
  
  let type1 =''
  let type2 = ''

  if (pokemon.types.length === 2){
    type1 = pokemon.types[0].type.name
    type2 = pokemon.types[1].type.name
  }else{
    type1 = pokemon.types[0].type.name
    type2 = "empty"
  }
  
  ;
  
  element.classList.add(`card`);
  let genArr = Array.from(pokemon2.generation.name)
  genArr[0]=genArr[0].toUpperCase()
  let genArr2 = genArr.join('')
  element.classList.add(`${genArr2}`);
  element.classList.add(`${pokemon2.egg_groups[0].name}__egg` );;
  element.setAttribute("id", `${pokemon.id}`);
  element.classList.add(`${type1}`)

  
  main.addEventListener("click", (e) => {
    if (element.classList.contains("effect")) {
      element.classList.remove("effect");
      element.innerHTML = html;
    }
    e.stopPropagation();
  });
  element.addEventListener("click", (e) => {
    if (!element.classList.contains("effect")) {
      element.classList.add("effect");
      element.innerHTML = html + buttons;
    } else {
      element.classList.remove("effect");
      element.innerHTML = html;
    }
    e.stopPropagation();
  });
  
  const html = `
  <div class="cardHead" >
    <img width="220px" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="">
    <div class="index"><p>#${pokemon.id}</p></div>
  </div>
  <div class="cardDetail">
    <div>
      <p>${pokemon2.names[4].name}</p>
      <div class="types" >
       <img src="img/fr/${type1}.png" alt="">
       <img src="img/fr/${type2}.png" alt="">
      </div>
      
    </div>
    <div class="stats">
      <p></p>
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
      <p></p>
    </div>
  </div>
  
  `;

  element.innerHTML = html;
  container.append(element);
  
}

/*language.addEventListener('click',()=>{
  let text = language.innerText
 switch(text){
  
  case 'FR':
    language.innerText ='EN'
    h1.innerText='Un Projet Pokedex Par'
    or.innerText='où'
    by.innerText='Trier par :'
    by2.innerText='Trier par :'
    input.placeholder= 'Entrée un nom de pokemon ici.........'
    break
  case 'EN':
    language.innerText ='FR'
    or.innerText='or'
    by.innerText='Fliter by :'
    by2.innerText='Fliter by :'
    h1.innerText='A PokeDex Project By'
    input.placeholder= 'Enter pokémon name here.........'
    break
 }
})*/
