// using lenis library to make a smooth scroll 
const lenis = new Lenis({
    duration: 2, smoothWheel: true // scroll duration, and enable the scrolling with mouse
});

//loop the animation
function sm(time) {
    lenis.raf(time);
    requestAnimationFrame(sm);
}

requestAnimationFrame(sm);


// smooth scroll to a section when the navbar links are clicked
function scrollToSection(id) {
    const section = document.getElementById(id); // get target section

    // calculate the scroll position to make it in the center
    const y = section.offsetTop - (window.innerHeight / 2) + (section.offsetHeight / 2);
    lenis.scrollTo(y, {duration: 2}); // animate
}
