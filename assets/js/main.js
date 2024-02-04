/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
  	modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
	mb.addEventListener('click', () =>{
		modal(i)
	})
})

modalClose.forEach((mc) =>{
	mc.addEventListener('click', () =>{
		modalViews.forEach((mv) =>{
			mv.classList.remove('active-modal')
		})
	})
})



/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l=> l.addEventListener('click', activeWork))





/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


if (selectedTheme) {
  
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
   
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})


/*=============== CONTACT FORM ===============*/
function sendEmail() {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const project = document.getElementById('projectInput').value;

    const subject = 'New Project Inquiry';
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AProject: ${project}`;

    const mailtoLink = `mailto:ilonayeromina@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
}

/*=============== CALCULATOR ===============*/
function calculateTotal() {
    const graphicDesignHours = document.getElementById("graphicDesign").value;
    const managementHours = document.getElementById("management").value;
    const programmingHours = document.getElementById("programming").value;

    const graphicDesignPrice = graphicDesignHours * 30; 
    const managementPrice = managementHours * 40; 
    const programmingPrice = programmingHours * 50; 

    const totalPrice = graphicDesignPrice + managementPrice + programmingPrice;

    document.getElementById("graphicDesignPrice").textContent = `Price: $${graphicDesignPrice}`;
    document.getElementById("managementPrice").textContent = `Price: $${managementPrice}`;
    document.getElementById("programmingPrice").textContent = `Price: $${programmingPrice}`;
    document.getElementById("totalPrice").textContent = `Total: $${totalPrice}`;
}

