const translations = {
  en: {
    nav1: "About me",
    nav2: "Projects",
    nav3: "Contact",
    buttonhome: "Download Resume",
    aboutmetitle: "About me",
    aboutmegreeting: "Hey there!",
    aboutmeinfo: "I'm a full-stack developer based in Lima, whose passion for technology, fueled by an insatiable desire to learn, motivates me to master the necessary tools for success in the professional world of IT.",
    projectstitle: "Projects",
    projectbtn1: "Preview Site",
    projectbtn2: "View Repository",
    contactitle: "Contact",
    contactsub1: "Project in mind? Let's Talk",
    contactsub2: "Feel free to contact me for any project requests. I'm ready to discuss about your potential ideas.",
    contactsub3: "Checkout my social media:",
  },

  es: {
    nav1: "Acerca de mi",
    nav2: "Proyectos",
    nav3: "Contacto",
    buttonhome: "Descargar CV",
    aboutmetitle: "Sobre mi",
    aboutmegreeting: "¡Hola!",
    aboutmeinfo: "Soy un desarrollador full-stack cuya pasión por la tecnología, impulsada por un inmenso deseo de aprender, busca ofrecer las mejores experiencias visuales e interactivas a todo tipo de usuarios a través de sitios web impactantes.",
    projectstitle: "Proyectos",
    projectbtn1: "Vista Previa",
    projectbtn2: "Ver Repositorio",
    contactitle: "Contacto",
    contactsub1: "¿Tienes un proyecto",
    contactsub2: "No dudes en contactarme para el proyecto que tienes planeado. Conversemos sobre tus potenciales ideas.",
    contactsub3: "Revisa mi perfil profesional:",
  }
}


function changeLanguage(language) {
  const elements= document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if(translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];
    }
  })
}

const languageToggle = document.getElementById('language-toggle');

languageToggle.addEventListener('change', function() {
  const toggleIndicator = document.querySelector('.toggle-indicator');
  if (this.checked) {
    toggleIndicator.style.transform = 'translateX(100%)';
    // Cambiar al idioma activado (azul)
    changeLanguage('es');
  } else {
    toggleIndicator.style.transform = 'translateX(0)';
    // Cambiar al idioma desactivado (amarillo)
    changeLanguage('en');
  }
});

const splide = new Splide( '.splide', {
  perPage: 3,
  breakpoints: {
    600: {
      perPage: 1,
    },
  },
  focus  : 0,
  omitEnd: true,
  gap: "1.5rem"
} );

splide.mount();

gsap.from("#developer", {opacity:0, x:"-100%", duration:1.5})
gsap.from("#stevemorales", {opacity:0, x:"-100%", duration:1.5})
gsap.from("#dwresume", {opacity:0, x:"-100%", duration:1.5})
gsap.from("#avatarfoto", {opacity:0, x:"100%", duration:1.5})

gsap.from("#aboutcard",  {scrollTrigger:{
  trigger:"#aboutcard",
  start:"top bottom",
  scrub:1}
  , opacity:0, x:"-10%", duration:0.5})

gsap.from("#emojicara",  {scrollTrigger:{
  trigger:"#emojicara",
  start:"top bottom",
  scrub:1}
  , opacity:0, x:"100%", duration:1})

gsap.from("#skills", {opacity:0, y:"100%", duration:2.5})

gsap.from("#contactcard", {opacity:0, x:"-100%", duration:1.5})
gsap.from("#emojilaptop", {opacity:0, x:"100%", duration:1.5})

gsap.from("#aboutmetitle",  {scrollTrigger:{
  trigger:"#aboutmetitle",
  start:"top bottom",
  scrub:1}
  , opacity:0, y:"-100%", duration:1})

gsap.from("#projectitle",  {scrollTrigger:{
  trigger:"#projectitle",
  start:"top bottom",
  scrub:1}
  , opacity:0, y:"-100%", duration:1})

gsap.from("#contactitle",  {scrollTrigger:{
  trigger:"#contactitle",
  start:"top bottom",
  scrub:1}
  , opacity:0, y:"-100%", duration:1})  

document.addEventListener("DOMContentLoaded", function() {
  glowInText();
});

function glowInText() {
  let glowInTexts = document.querySelectorAll(".glowIn");
  glowInTexts.forEach(glowInText => {
    let letters = glowInText.textContent.split("");
    glowInText.textContent = "";
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animation = "glow-in 0.8s both";
      span.style.animationDelay = `${i * 0.07}s`;
      glowInText.append(span);
    });
  });
}

function activarGlowInSiVisible() {
  let seccion = document.getElementById("contact"); 
  let seccionRect = seccion.getBoundingClientRect();

  if (seccionRect.top <= window.innerHeight && seccionRect.bottom >= 0) {
    glowInText(); 
    window.removeEventListener("scroll", activarGlowInSiVisible);
  }
}

window.addEventListener("scroll", activarGlowInSiVisible);


document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('a[href^="#"]');

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
      event.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var yOffset = window.pageYOffset;
        var targetOffset = targetElement.getBoundingClientRect().top + yOffset;
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth' 
        });
      }
    });
  }
});


const botonVolverArriba = document.getElementById("botonVolverArriba");

window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    botonVolverArriba.style.display = "block";
  } else {
    botonVolverArriba.style.display = "none";
  }
});

botonVolverArriba.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



const languageSwitchButton = document.querySelector('.switchlanguage');

const firstSection = document.querySelector('.menu-bar');

const secondSectionStart = firstSection.clientHeight;

function handleScroll() {
  const scrollTop = window.scrollY;

  if (scrollTop > secondSectionStart) {
    languageSwitchButton.style.opacity = 0;
  } else {
    languageSwitchButton.style.opacity = 1;
  }
}
window.addEventListener('scroll', handleScroll);





