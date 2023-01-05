const container = document.querySelector('.container') 
const search = document.querySelector('form')




const updateDex = (data) => {

  
  
   
   const  pokeDet = data

   //const plus = data.id + 1
   
 
  container.innerHTML= `
    <img class="wrapper" src="img/group-1@1x.png" alt="">
  <div class="index">
       <p>
        #${pokeDet.id}
       </p>
    </div>
    <div class="artwork">
       <img src="${pokeDet.sprites.other["official-artwork"].front_default}" alt="">
    </div>
    <div class="sprit">
       <img class="front" src="${pokeDet.sprites.front_default}" alt="">
    </div>
    <div class="ability">
      <p>${pokeDet.abilities[0].ability.name}</p>
    </div>
    <div class="stats">
      <ul>
        <li><strong>HP:</strong>${pokeDet.stats[0].base_stat}</li>
        <li><strong>ATK:</strong>${pokeDet.stats[1].base_stat}</li>
        <li><strong>DEF:</strong>${pokeDet.stats[2].base_stat}</li>
        <li><strong>SP.ATK:</strong>${pokeDet.stats[3].base_stat}</li>
        <li><strong>SP.DEF:</strong>${pokeDet.stats[4].base_stat}</li>
        <li><strong>SPD:</strong>${pokeDet.stats[5].base_stat}</li>
      </ul>
    </div>
    <div class="name">
      <p>${pokeDet.name}</p>
    </div>
    <div class="entry">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto provident est, officia eaque culpa facere, fugit illum fugiat nam, repellendus voluptates velit esse quibusdam tenetur ducimus commodi suscipit amet.</p>
    </div>
    <div class="weight">
      <ul>
        <li>Ht: ${pokeDet.height}'</li>
        <li>Wt: ${pokeDet.weight} lbs</li>
      </ul>
    </div>
    <div class="types">
      <p>${pokeDet.types[0].type.name}</p>
    </div>`
    

};



  const updatePokemon = async (name) => {

    const pokeDet = await getPokemon(name)
  
    return pokeDet
  };
  
  search.addEventListener('submit', e =>{

    e.preventDefault();
  
    const name = search.poke.value.toLowerCase().trim()

  
    search.reset();
  
    updatePokemon(name)
    .then(data => updateDex(data))
    .catch(err => console.log(err))
  });

  