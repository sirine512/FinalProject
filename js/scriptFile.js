let btnMenu = document.querySelector(".menu");
let div = document.querySelector(".list");


btnMenu.addEventListener("click", () => {
  if (div.style.display === "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
});

var btnSearch = document.querySelector(".search-btn");
var searchBar = document.querySelector(".search");


btnSearch.addEventListener("click", () => {
  if (searchBar.style.display === "block") {
    searchBar.style.display = "none";
  } else {
    searchBar.style.display = "block";
  }
});

/******dopdown */
let btnDrop = document.querySelector(".dropbtn")
let dropCont = document.querySelector(".dropdown-content")
btnDrop.addEventListener("click", () => {
    if (dropCont.style.display === "block") {
      dropCont.style.display = "none";
    } else {
      dropCont.style.display = "block";
    }
  });





