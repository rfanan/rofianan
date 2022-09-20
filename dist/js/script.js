const rotilapis = document.querySelector('#rotilapis');
const navMenu = document.querySelector('#nav-menu')

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