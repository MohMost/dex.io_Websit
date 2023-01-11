const container = document.querySelector(".pokeList");
const containers = document.querySelectorAll(".pokeList .card");
const base = `https://pokeapi.co/api/v2/pokemon/`
const fetchPokemon = async () => {
  for (let i = 1; i <= 905; i++) {
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
  element.classList.add(`card`);
  let genArr = Array.from(pokemon2.generation.name)
  genArr[0]=genArr[0].toUpperCase()
  let genArr2 = genArr.join('')
  element.classList.add(`${pokemon.types[0].type.name}`);
  element.classList.add(`${genArr2}`);
  element.classList.add(`${pokemon2.egg_groups[0].name}__egg` );;
  element.setAttribute("id", `${pokemon.id}`);
  if (pokemon.types.length === 2){
    console.log(`type 1: ${pokemon.types[0].type.name}`,`type 2: ${pokemon.types[1].type.name}`)
  }else{
    console.log(`type 1: ${pokemon.types[0].type.name}`)
  }
  

  
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
      <p>${pokemon.name}</p>
      <img src="img/eng/${pokemon.types[0].type.name}.png" alt="">
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
  
  /*console.log(element.getAttribute("id"));
  switch(parseFloat(element.getAttribute("id"))){
    case parseFloat(element.getAttribute("id")) <= 151:
      element.classList.add("Gen-1")
      break
    case 152 <= parseFloat(element.getAttribute("id")) <= 251:
      element.classList.add("Gen-2")
      break
    case 252 <= parseFloat(element.getAttribute("id")) <= 386:
      element.classList.add("Gen-3")
      break
    case 387 <= parseFloat(element.getAttribute("id")) <= 493:
      element.classList.add("Gen-4")
      break
    case 494 <= parseFloat(element.getAttribute("id")) <= 649:
      element.classList.add("Gen-5")
      break
    case 650 <= parseFloat(element.getAttribute("id")) <= 721:
      element.classList.add("Gen-6")
      break
    case 722 <= parseFloat(element.getAttribute("id")) <= 809:
      element.classList.add("Gen-7")
      break
    default:
      element.classList.add("Gen-8")
      
  }*/
  
}
