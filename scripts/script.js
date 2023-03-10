// JavaScript Document
console.log("hi");



// stap 1: zoek de menu-button op en sla die op in een variabele
let openButton = document.querySelector("#menuButton");
let deNav = document.querySelector("section#hamNav");
let afbHamburger = document.querySelector("#imgHam");
// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.addEventListener("click", openMenuList);
openButton.addEventListener("click", hamAfbeelding);

function openMenuList() {  
  deNav.classList.toggle("toonMenu");
}

function hamAfbeelding(){
afbHamburger.classList.toggle("menuOpen")
}