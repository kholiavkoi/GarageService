
let navbar = document.querySelector('.navbar'),
    initialPosition = navbar.offsetTop,
    accordion = document.getElementsByClassName('table__title'),
    tableBlock = document.getElementsByClassName('table__body--block'),
    i;


window.onload = function () {
    addEventListener('scroll', function (event) {
        if (window.scrollY > initialPosition) {
            navbar.classList.add('fixed');
        } else if (navbar.classList.contains('fixed')) {
            navbar.classList.remove('fixed');
        }
    });

    for (i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('show')
        })
    }

    // const anchors = document.querySelectorAll('a[href^="#"]')
    //
    // for(let anchor of anchors) {
    //     anchor.addEventListener("click", function(e) {
    //         e.preventDefault()
    //         let goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    //         document.querySelector(goto).scrollIntoView({
    //             behavior: "smooth",
    //             block: "start"
    //         })
    //     })
    // }

    const anchors = document.querySelectorAll('a[href*="#"]')

    anchors.forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })

        })
    })


}