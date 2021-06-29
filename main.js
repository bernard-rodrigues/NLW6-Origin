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