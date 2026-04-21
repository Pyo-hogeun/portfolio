document.addEventListener('DOMContentLoaded', function () {

    gsap.registerPlugin(ScrollTrigger);

    // Hero Parallax
    gsap.to('.hero-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Bottom Parallax
    gsap.to('.parallax-bg', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
            trigger: '.parallax-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Card 등장 애니메이션
    gsap.from('.card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.grid',
            start: 'top 80%'
        }
    });

    //이력 등장
    gsap.from('.work-item', {
        y: 30,
        delay: 0.5,
        opacity: 0,
        duration: 0.2,
        stagger: 0.2,
    })
})