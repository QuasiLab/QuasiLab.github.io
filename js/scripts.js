var swiper = new Swiper('.slider',{
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
      invert: false,
    },
    pagination:{
      el: '.slider-pagination',
      clickable: true,
    }
});

var navLinks = document.getElementById("navLinks");
function showMenu(){
  navLinks.style.right="0px";
}
function hideMenu(){
  navLinks.style.right="-300px";
}
