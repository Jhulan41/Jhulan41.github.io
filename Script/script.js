
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

    /*===========================Qualification Tab===========================*/

    const tabs = document.querySelectorAll('[data-target]');
    const tabContents=document.querySelectorAll('[data-content]');

    tabs.forEach((tab)=>{
        tab.addEventListener('click', ()=>{
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach(tabContent =>{
                tabContent.classList.remove('qualification_active');
            })
            target.classList.add('qualification_active');

            tabs.forEach(tab =>{
                tab.classList.remove('qualification_active');
            })
            tab.classList.add('qualification_active');
        })
    })


    /*=========================service model =======================*/

    const modelViews = document.querySelectorAll('.services_model'),
          modelBtns  = document.querySelectorAll('.services_button'),
          modelCloses = document.querySelectorAll('.services_model-close')


    let model = function(modelClick){
        modelViews[modelClick].classList.add('active-model')
    }

    modelBtns.forEach((modelBtn,i)=>{
        modelBtn.addEventListener('click', ()=>{
            model(i)
        })

    })

    modelCloses.forEach((modelClose)=>{
        modelClose.addEventListener('click', ()=>{
            modelViews.forEach((modelView)=>{
                modelView.classList.remove('active-model')
            })
        })

    })


    /*================== ===========portfolio swiper=========================*/

    let swiper = new Swiper('.portfolio_container', {
        cssMode:true,
        loop:true,

        navigation: {

            nextEl:'.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination:{
            el:'.swiper-pagination',
            clickable:true,
        },
    });

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

    const sections = document.querySelectorAll('section[id]')


    function scrollActive(){
    const scrollY = window.pageYOffset

    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

    window.addEventListener('scroll', scrollActive)

