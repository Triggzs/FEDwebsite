// JavaScript Document
console.log("hi");



// stap 1: zoek de menu-button op en sla die op in een variabele
let openButton = document.querySelector("#menuButton");
let deNav = document.querySelector("section#hamNav");
let afbHamburger = document.querySelector("#imgHam");

// // SLIDESHOW SCRIPT-->
// let slideIndex = 1;
// showSlides(slideIndex);

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.addEventListener("click", openMenuList);
openButton.addEventListener("click", hamAfbeelding);

function openMenuList() {  
  deNav.classList.toggle("toonMenu");
}

function hamAfbeelding(){
afbHamburger.classList.toggle("menuOpen")
}

details.addEventListener("toggle", (event) => {
    if (details.open) {
      /* the element was toggled open */
    } else {
      /* the element was toggled closed */
    }
  }
  );


  

// //   SLIDESHOW
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }