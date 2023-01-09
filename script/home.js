const arrow = document.querySelector(".scroll");
const boxes = document.querySelectorAll(".container");
const search = document.querySelector(".searchBar .search");
const addForm = document.querySelector(".add");
const styles = document.querySelector(".theme");
const icon = document.querySelector(".mode");
const drop = document.querySelectorAll("div .down");
const logo = document.querySelector(".logo img");
const card = document.querySelectorAll(".pokeList.card");
const tables = document.querySelectorAll(".searchBar .filters .container .sub");
const toggle = document.querySelector(".searchBar");

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
    .forEach((poke) => poke.classList.remove("filtered"));
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
  console.log()



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


