VanillaTilt.init(document.querySelectorAll(".box"),
    {
        max: 5,
        speed: 200
    });

VanillaTilt.init(document.querySelectorAll(".about-container"),
    {
        max: 5,
        speed: 200
    });

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