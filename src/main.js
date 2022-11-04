const iconMenu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav_links");

iconMenu.addEventListener('click', ()=>{
  navLinks.classList.toggle("navLinks-show")
})


const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,
  breakpoints: {
  700: {
    slidesPerView: 2,
   
  }},
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});