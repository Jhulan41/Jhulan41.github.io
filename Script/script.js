
// menu show and hide   

const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav_close");


/*    menu show logic  */

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}  

/* menu hidden logic  */

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}



/* remove menu on mobile */

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
