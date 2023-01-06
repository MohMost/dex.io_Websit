const arrow = document.querySelector(".scroll")
const search = document.querySelector(".searchBar .search")
const addForm = document.querySelector ('.add')
const styles = document.querySelector(".theme")
const icon = document.querySelector(".mode")
const drop = document.querySelectorAll("div .down")
const logo = document.querySelector(".logo img")
const effect = document.querySelectorAll(".pokeList")

addForm.addEventListener("submit",e =>{
  e.preventDefault();
  const poke = addForm.add.value.trim()
  addForm.reset()
})

const filterCards = (term)=>{
  Array.from(container.children)
   .filter((poke)=>!poke.textContent.toLowerCase().includes(term))
   .forEach((poke)=> poke.classList.add('filtered'))
   
   Array.from(container.children)
   .filter((poke)=>poke.textContent.includes(term))
   .forEach((poke)=> poke.classList.remove('filtered'))
}

search.addEventListener('keyup', () =>{
  const term =search.value.trim().toLowerCase();
  filterCards(term)
})

window.addEventListener("scroll",()=>{
   if (window.pageYOffset > 100){
    arrow.classList.add('active')
   }else{
    arrow.classList.remove('active')
   }
} )

icon.addEventListener('click',()=>{
  if(styles.getAttribute('href')==='styles.css'){
    styles.setAttribute('href','styles2.css' )
    icon.setAttribute('src','img/dark.svg')
    drop[0].setAttribute('src','img/triangled.svg')
    drop[1].setAttribute('src','img/triangled.svg')
    drop[2].setAttribute('src','img/triangled.svg')
    logo.setAttribute('src','img/lightball.png')
  }else{
    styles.setAttribute('href','styles.css' )
    icon.setAttribute('src','img/light.svg')
    drop[0].setAttribute('src','img/triangle.svg')
    drop[1].setAttribute('src','img/triangle.svg')
    drop[2].setAttribute('src','img/triangle.svg')
    logo.setAttribute('src','img/darkball.png')
  }
  
})

/*effect.addEventListener('click', ()=>{
  if(!effect.classList.contains('effect')){
    effect.classList.add('effect')
  }else{
    effect.classList.remove('effect')

  }
})*/
const divs = effect[0]
divs.forEach(div , () =>{
  console.log(div)
})