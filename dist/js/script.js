const rotilapis = document.querySelector('#rotilapis');
const navMenu = document.querySelector('#nav-menu');
let intro = document.querySelector('.intro');
let letter = document.querySelector('.welcome-header');
let letterSpan = document.querySelectorAll('.letter');



rotilapis.addEventListener('click', function () {
    rotilapis.classList.toggle('rotilapis-active');
    navMenu.classList.toggle('hidden')
});

window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

window.addEventListener('click', function (e) {
    if (e.target != rotilapis && e.target != navMenu) {
        rotilapis.classList.remove('rotilapis-active');
        navMenu.classList.add('hidden');
    }
});


// intro
window.addEventListener('DOMContentLoaded', () => {

    window.onscroll = function () {
        const header = document.querySelector('header');
        header.classList.remove('navbar-fixed');
    };

    setTimeout(() => {
        letterSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 200)
        });

        setTimeout(() => {
            letterSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 1500)

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2000)
    })
})
