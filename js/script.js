



window.onload = function () {
    let navbar = document.querySelector('.navbar')
    let initialPosition = navbar.offsetTop;
    addEventListener('scroll', function (event) {
        if (window.scrollY > initialPosition) {
            navbar.classList.add('fixed');
        } else if (navbar.classList.contains('fixed')) {
            navbar.classList.remove('fixed');
        }
    });
}