/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header= document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popularContainer", {
    spaceBetween:32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/*=============== VALUE ACCORDION ===============*/
const accordianItems= document.querySelectorAll('.valueAccItem')
accordianItems.forEach((item) => {
  const accordianHeader = item.querySelector('.valueAccHeader')
  accordianHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordian-open')
    toggleItem(item)

    if(openItem && openItem!== item){
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item)=>{
  const accordianContent = item.querySelector('.valueAccContent')

  if(item.classList.contains('accordian-open')){
    accordianContent.removeAttribute('style')
    item.classList.remove('accordian-open')
  }else{
    accordianContent.style.height = accordianContent.scrollHeight + 'px'
    item.classList.add('accordian-open')
  }

  accordianContent.style.height=accordianContent.scrollHeight + 'px'
  item.classList.add('accordian-open')
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.navLink[href*=' + sectionId + ']');

        console.log(`scrollDown: ${scrollDown}, sectionTop: ${sectionTop}, sectionHeight: ${sectionHeight}, sectionId: ${sectionId}`);

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);



/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp) 


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.homeTitle,.popularContainer, .subscribeContainer, .footerContainer')
sr.reveal('.homeDesc, .footer__info', {delay: 500})
sr.reveal('.homeSearch', {delay: 600})
sr.reveal('.homeValue', {delay: 700})
sr.reveal('.homeImages', {delay: 800, origin: 'bottom'})
sr.reveal('.logosImg', {interval: 100})
sr.reveal('.valueImages, .contactContent', {origin: 'left'})
sr.reveal('.valueContent, .contactImages', {origin: 'right'})


