// Kunal Sharma IIT JAMMU Portfolio Source Code
// Made For Personal Use And All Copyrights are Reserved

// Tilt Effect Javascript
VanillaTilt.init(document.querySelectorAll(".box"),
    {
        max: 10,
        speed: 200
    });

VanillaTilt.init(document.querySelectorAll(".card__article"),
    {
        max: 10,
        speed: 200
    });

VanillaTilt.init(document.querySelectorAll(".cardcontainer"),
    {
        max: 20,
        speed: 200
    });

//ScrollReveal Effect JavaScript
ScrollReveal().reveal('.text', {
    duration: 2000,
    origin: 'top',
    distance: '100px',
    reset: false,
    delay: 200,
    opacity: 0
});

ScrollReveal().reveal('.container', {
    duration: 2000,
    origin: 'left',
    distance: '100px',
    reset: false,
    delay: 200,
    opacity: 0
});

ScrollReveal().reveal('.container1', {
    duration: 2000,
    origin: 'top',
    distance: '100px',
    reset: false,
    delay: 200,
    opacity: 0
});

ScrollReveal().reveal('iframe', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
    reset: false,
    delay: 200,
    opacity: 0
});

ScrollReveal().reveal('.box', {
    duration: 2000,
    delay: 200,
    reset: false,
    origin: 'bottom',
    distance: '100px',
    easily: 'ease'
});

// About Page Javascript
const textElement = document.getElementById('text');

const words = textElement.innerHTML.split(' ').map(word => {
    return `<span class="hover-word">${word}</span>`;
}).join('  ');

textElement.innerHTML = words;