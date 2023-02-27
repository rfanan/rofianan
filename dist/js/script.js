const rotilapis = document.querySelector('#rotilapis');
const navMenu = document.querySelector('#nav-menu');
let intro = document.querySelector('.intro');
let letter = document.querySelector('.welcome-header');
let letterSpan = document.querySelectorAll('.letter');

rotilapis.addEventListener('click', function () {
    rotilapis.classList.toggle('rotilapis-active');
    navMenu.classList.toggle('hidden')
});


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

let say = ["Halo", "Hey", "ola`", "Konnichiwa", "Bonjour", "anyoung", "Welcome :)"],
    tl = gsap.timeline(),
    text = document.querySelector(".text"),
    delay = 0.25;

say.forEach((blurb, i) => {
    tl.add(() => text.innerText = blurb, i * delay);
});

// end intro


//locomotive scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {
        smooth: false,
        breakpoint: 0,
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


// year
const year = new Date();
document.getElementById('year').innerHTML = year.getUTCFullYear();

// time desktop
let times = new Date();
document.getElementById('times').innerHTML = times.toTimeString();

// time mobile
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let date = new Date();
let today = days[date.getDay()]

document.getElementById("time").innerHTML = today;




let magnets = document.querySelectorAll('.magnetic')
let strength = 90

magnets.forEach((magnet) => {
    magnet.addEventListener('mousemove', moveMagnet);
    magnet.addEventListener('mouseout', function (event) {
        TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
    });
});

function moveMagnet(event) {
    let magnetButton = event.currentTarget
    let bounding = magnetButton.getBoundingClientRect()

    //console.log(magnetButton, bounding)

    TweenMax.to(magnetButton, 1, {
        x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
        y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
        ease: Power4.easeOut
    })

    // magnetButton.style.transform = 'translate(' + ((((event.clientX - bounding.left) / (magnetButton.offsetWidth))) - 0.5) * strength + 'px,' + ((((event.clientY - bounding.top) / (magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
}

