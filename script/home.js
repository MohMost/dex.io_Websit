const container = document.querySelector(".pokeList")
const search = document.querySelector(".search")

const updateDex = (data) => {

  const  pokeDet = data

  //const plus = data.id + 1
  

 const card = `
 <div class="card">
 <div class="cardHead">
   <img width="${pokeDet.sprites.other["official-artwork"].front_default}" alt="">
   <div class="index"><p>#050</p></div>
 </div>
 <div class="cardDetail">
   <div>
     <p>Arcanine</p>
     <img src="img/fire.png" alt="">
   </div>
   <div class="stats">
     <ul class="stats1">
       <li>HP =${pokeDet.stats[0].base_stat}</li>
       <li>ATK =${pokeDet.stats[1].base_stat}</li>
       <li>DEF =${pokeDet.stats[2].base_stat}</li>
     </ul>
 
     <ul class="stats2">
       <li>SP.ATK = ${pokeDet.stats[3].base_stat}</li>
       <li>SP.DEF = ${pokeDet.stats[4].base_stat}</li>
       <li>SPD = ${pokeDet.stats[5].base_stat}</li>
     </ul>
   </div>
   
 </div>
</div>`

};



 /*const updatePokemon = async (name) => {

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
 });*/
