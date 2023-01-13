const arrow = document.querySelector(".scroll");
const boxes = document.querySelectorAll(".container");
const search = document.querySelector(".searchBar .search");
const styles = document.querySelector(".theme");
const icon = document.querySelector(".mode");
const drop = document.querySelectorAll("div .down");
const logo = document.querySelector(".logo img");
const card = document.querySelectorAll(".pokeList.card");
const tables = document.querySelectorAll(".searchBar .filters .container .sub");
const buttons = document.querySelectorAll(".searchBar .filters .container .drop")
const toggle = document.querySelector(".searchBar");
const selectorsA = document.querySelectorAll(".searchBar .filters .container .a")
const selectA = document.querySelector(".searchBar .filters .container .type p")
const selectorsB = document.querySelectorAll(".searchBar .filters .container .b")
const selectB = document.querySelector(".searchBar .filters .container .name p")
const selectorsC = document.querySelectorAll(".searchBar .filters .container .c")
const selectC = document.querySelector(".searchBar .filters .container .generation p")


addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addForm.reset();
});
const filterCards = (term) => {
  
  Array.from(container.children)
    .filter((poke) => !poke.textContent.toLowerCase().includes(term))
    .forEach((poke) => poke.classList.add("filtered"));
    
  Array.from(container.children)
    .filter((poke) => poke.textContent.toLowerCase().includes(term))
    .forEach((poke) =>{
      poke.classList.remove("filtered")
    } );  
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterCards(term);
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 250) {
    arrow.classList.add("active");
  } else {
    arrow.classList.remove("active");
  }
});

icon.addEventListener("click", () => {
  if (styles.getAttribute("href") === "styles.css") {
    styles.setAttribute("href", "styles2.css");
    icon.setAttribute("src", "img/dark.svg");
    drop[0].setAttribute("src", "img/triangled.svg");
    drop[1].setAttribute("src", "img/triangled.svg");
    drop[2].setAttribute("src", "img/triangled.svg");
    logo.setAttribute("src", "img/lightball.png");
  } else {
    styles.setAttribute("href", "styles.css");
    icon.setAttribute("src", "img/light.svg");
    drop[0].setAttribute("src", "img/triangle.svg");
    drop[1].setAttribute("src", "img/triangle.svg");
    drop[2].setAttribute("src", "img/triangle.svg");
    logo.setAttribute("src", "img/darkball.png");
  }
});


  boxes.forEach((box) => {

  const drops = box.querySelectorAll(".searchBar .filters .container .drop");
  const filters = box.querySelectorAll(".searchBar .filters .container .drop p");
  const arrows = box.querySelectorAll(".searchBar .filters .container .drop img");
  const selects = box.querySelectorAll(".searchBar .filters .container .sub li");
  const selectsA = box.querySelector(".searchBar .filters .container .a li")
  
   
  
  

  drops.forEach((drop) => {
    drop.addEventListener("click", () => {
      drop.nextElementSibling.classList.toggle("show");
    });
    filters.forEach((filter) => {
      selects.forEach((select) => {
        select.addEventListener("click", () => {
          if (!select.classList.contains("show")) {
            drop.nextElementSibling.classList.add("show");
          }
        });
        select.addEventListener("click", () => {
          filter.innerText = select.innerText;
          
        });
      });
    });
    arrows.forEach((arrow) => {
      if (!drop.nextElementSibling.classList.contains("show")) {
        arrow.classList.toggle("rotate")
      } else {
        arrow.classList.remove("rotate")
      }
    })
  });


});

function filterFunc (selectors, select){
  selectors.forEach((selector) => {
    selector.addEventListener("click", () => {
      switch (selectors){
        case selectorsA :
          selectB.innerText="Generation"
          selectC.innerText="Egg group"
          break
        case selectorsB :
          selectA.innerText="Type"
          selectC.innerText="Egg group"
          break
        case selectorsC :
          selectA.innerText="Type"
          selectB.innerText="Generation"
      }
      Array.from(container.children)
      .filter((poke) => !poke.classList.contains(select.innerText))
      .forEach((poke) => poke.style.display = "none");
      
      Array.from(container.children)
      .filter((poke) => poke.classList.contains(select.innerText))
      .forEach((poke) =>poke.style.display = "");
    })
  })
}
filterFunc(selectorsA ,selectA)
filterFunc(selectorsB ,selectB)
filterFunc(selectorsC ,selectC)
buttons.forEach((button) => {
  
  button.addEventListener('click', () =>{
    console.log(" clicked")
    Array.from(container.children).forEach(poke =>{
  
  if(poke.classList.contains("grass")){
      poke.classList.add("Plante")
    }else if(poke.classList.contains("fire")){
      poke.classList.add("Feu")
    }else if(poke.classList.contains("water")){
      poke.classList.add("Eau")
    }else if(poke.classList.contains("bug")){
      poke.classList.add("Insecte")
    }else if(poke.classList.contains("normal")){
      poke.classList.add("Normal")
    }else if(poke.classList.contains("poison")){
      poke.classList.add("Poison")
    }else if(poke.classList.contains("electric")){
      poke.classList.add("électrik")
    }else if(poke.classList.contains("ground")){
      poke.classList.add("Sol")
    }else if(poke.classList.contains("fairy")){
      poke.classList.add("Fée")
    }else if(poke.classList.contains("fighting")){
      poke.classList.add("Combat")
    }else if(poke.classList.contains("ghost")){
      poke.classList.add("Spectre")
    }else if(poke.classList.contains("dark")){
      poke.classList.add("Ténèbre")
    }else if(poke.classList.contains("steel")){
      poke.classList.add("Acier")
    }else if(poke.classList.contains("psychic")){
      poke.classList.add("Psy")
    }else if(poke.classList.contains("flying")){
      poke.classList.add("Vol")
    }else if(poke.classList.contains("rock")){
      poke.classList.add("Roche")
    }else if(poke.classList.contains("ice")){
      poke.classList.add("Glace")
    }else if(poke.classList.contains("dragon")){
      poke.classList.add("Dragon")
    }

})
  })
})


