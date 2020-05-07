window.onscroll = function showHeader() {
    let header = document.querySelector('.header-scroll')

    if(window.pageYOffset > 15){
        header.classList.add('header-fixed');
    } else 
        header.classList.remove('header-fixed')};