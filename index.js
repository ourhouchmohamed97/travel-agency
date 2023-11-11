// script for to destination 
const Option = document.querySelectorAll(".option");
Option.forEach(choose => {
  choose.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    choose.classList.add("active");
  });
});
const menu = document.querySelectorAll("a");
menu.forEach(choice => {
  choice.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    choice.classList.add("active");
  });
});
var counter = 1;
setInterval(function(){
document.getElementById("radio" + counter).checked = true;
counter++;
if(counter > 3){
counter = 1;
}
}, 2500);
// EnD of script for top destination

// script js for FAQ
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
const itemToggle = this.getAttribute('aria-expanded');

for (i = 0; i < items.length; i++) {
items[i].setAttribute('aria-expanded', 'false');
}

if (itemToggle == 'false') {
this.setAttribute('aria-expanded', 'true');
}
}
items.forEach(item => item.addEventListener('click', toggleAccordion));  
// EnD of script js for FAQ

// swiper reviews
var swiper = new Swiper(".swiper-container", {
effect: "coverflow",
grabCursor: true,
loop: true,
centeredSlides: true,
slidesPerView: "auto",
coverflowEffect: {
rotate: 0,
stretch: 0,
depth: 100,
modifier: 2,
slideShadows: false,
},
simulateTouch: true,
navigation: {
  nextEl: '.news-slider-next',
  prevEl: '.news-slider-prev'
},
pagination: {
el: ".swiper-pagination",
clickable: true,
},
}); 


    