function scrollTo(el){
    window.scroll({
        left: 0,
        top: el.offsetTop - 120,
        behavior: "smooth"
    })
};

let a1 = document.querySelector('#header-list-item-features')
let features = document.querySelector('.features')

let a2 = document.querySelector('#header-list-item-works')
let works = document.querySelector('.works')

let a3 = document.querySelector('#header-list-item-team')
let team = document.querySelector('.team')

let a4 = document.querySelector('#header-list-item-testimonials')
let clients = document.querySelector('.clients')

let a5 = document.querySelector('#header-list-item-download')
let download = document.querySelector('.download')

a1.addEventListener('click', () => {scrollTo(features)});
a2.addEventListener('click', () => {scrollTo(works)});
a3.addEventListener('click', () => {scrollTo(team)});
a4.addEventListener('click', () => {scrollTo(clients)});
a5.addEventListener('click', () => {scrollTo(download)});