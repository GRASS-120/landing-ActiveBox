function scrollTo(el){
    window.scroll({
        left: 0,
        top: el.offsetTop - 120,
        behavior: "smooth"
    })
};

let a1 = document.querySelector('#header-list-item-features')
let b1 = document.querySelector('#header-list-item-features-scroll')
let features = document.querySelector('.features')

let a2 = document.querySelector('#header-list-item-works')
let b2 = document.querySelector('#header-list-item-works-scroll')
let works = document.querySelector('.works')

let a3 = document.querySelector('#header-list-item-team')
let b3 = document.querySelector('#header-list-item-team-scroll')
let team = document.querySelector('.team')

let a4 = document.querySelector('#header-list-item-testimonials')
let b4 = document.querySelector('#header-list-item-testimonials-scroll')
let clients = document.querySelector('.clients')

let a5 = document.querySelector('#header-list-item-download')
let b5 = document.querySelector('#header-list-item-download-scroll')
let download = document.querySelector('.download')

a1.addEventListener('click', () => {scrollTo(features)});
a2.addEventListener('click', () => {scrollTo(works)});
a3.addEventListener('click', () => {scrollTo(team)});
a4.addEventListener('click', () => {scrollTo(clients)});
a5.addEventListener('click', () => {scrollTo(download)});

b1.addEventListener('click', () => {scrollTo(features)});
b2.addEventListener('click', () => {scrollTo(works)});
b3.addEventListener('click', () => {scrollTo(team)});
b4.addEventListener('click', () => {scrollTo(clients)});
b5.addEventListener('click', () => {scrollTo(download)});