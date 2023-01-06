const arrow = document.querySelector(".scroll")
const search = document.querySelector(".searchBar .search")
const addForm = document.querySelector ('.add')
const styles = document.querySelector()

addForm.addEventListener("submit",()=>{
  e.preventDefault();
  const poke = saddForm.add.value.trim()
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

