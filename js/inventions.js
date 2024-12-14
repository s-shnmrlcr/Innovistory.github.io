function scrollTop() {
    gsap.to(window, {
        duration: 2, 
        scrollTo: {
            y: "#slide-0"
        },
        ease: "power2.inOut"
    });
    gsap.to('.footer__link-top-line', {
        scaleY: 1,
        transformOrigin: "bottom center",
        duration: 0.6, 
        ease: "power4"
    });
}