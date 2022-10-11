const rotilapis = document.querySelector('#rotilapis');
const navMenu = document.querySelector('#nav-menu');
let intro = document.querySelector('.intro');
let letter = document.querySelector('.welcome-header');
let letterSpan = document.querySelectorAll('.letter');

rotilapis.addEventListener('click', function () {
    rotilapis.classList.toggle('rotilapis-active');
    navMenu.classList.toggle('hidden')
});

// window.onscroll = function () {
//     const header = document.querySelector('header');
//     const fixedNav = header.offsetTop;
//     if (window.pageYOffset > fixedNav) {
//         header.classList.add('navbar-fixed')
//     } else {
//         header.classList.remove('navbar-fixed')
//     }
// }



window.addEventListener('click', function (e) {
    if (e.target != rotilapis && e.target != navMenu) {
        rotilapis.classList.remove('rotilapis-active');
        navMenu.classList.add('hidden');
    }
});


// intro
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        letterSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 50)
        });

        setTimeout(() => {
            letterSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 500)
            })
        }, 2000)

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 3000)
    })
})

let say = ["Halo", "Hey", "ola`", "Konnichiwa", "Bonjour", "anyoung", "Welcome"],
    tl = gsap.timeline(),
    text = document.querySelector(".text"),
    delay = 0.30;

say.forEach((blurb, i) => {
    tl.add(() => text.innerText = blurb, i * delay);
});

// end intro



const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {
        smooth: true
    },
    tablet: {
        smooth: true
    },
});

const navBar = document.querySelector("header");

scroll.on("scroll", (position) => {

    if (position.scroll.y > 20) {
        navBar.classList.add("navbar-fixed");
    } else {
        navBar.classList.remove("navbar-fixed");

    }
})