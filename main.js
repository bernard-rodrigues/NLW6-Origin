//Funcionalidades do menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

//Alterna entre menu aberto e fechado
for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

//Fecha o menu ao clicar em alguma opção
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

//mudar sombra do header quando o usuário der scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

// Testimonials Slider
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
})

// Scroll Reveal - Mostra novos elementos durante a rolagem da página
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
})

scrollReveal.reveal(`
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links
    `, { interval: 100 })