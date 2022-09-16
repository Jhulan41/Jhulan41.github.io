
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



/* =====================remove menu on mobile======================= */

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*================================ Skills on-off=======================*/

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header');

      function toggleSkills(){
        let itemClass = this.parentNode.className;

        for(let i = 0; i<skillsContent.length; i++){
            skillsContent[i].className = 'skills_content skills_close';
        }

        if(itemClass === 'skills_content skills_close'){
            this.parentNode.className = 'skills_content skills_open'
        }
      }

      skillsHeader.forEach((el)=>{
        el.addEventListener('click', toggleSkills)
      })
