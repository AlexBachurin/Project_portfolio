const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', function(e) {
    menu.classList.add('active');
});

hamburgerClose.addEventListener('click', function() {
    menu.classList.remove('active');
})

overlay.addEventListener('click', function() {
    menu.classList.remove('active');
});

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 300) {
//         hamburger.style.visibility = "hidden";
//     } else {
//         hamburger.style.visibility = "visible";
//     }
// })