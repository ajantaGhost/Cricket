// ===================LOCOMOTIVE SCROLL====================

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("body", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});

// ================HEADER ANIMATION=================

gsap.from("header", {
    y: -300,
    duration: 1,
})

// ==================HERO SECTION ANIMATION===================

gsap.to(".hero-section .container .text-content", {
    opacity: 1,
    duration: 3,
    delay: .5
})

// ================TOURNAMENT SECTION ANIMATION====================

// Select all elements with the class 'text-appear'
let texts = document.querySelectorAll('.text-appear');

// Function to initialize animation on each text element
texts.forEach(text => {
    text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter' style='display: inline-block'>$&</span>");

    let timeline = anime.timeline({
        loop: false,
        autoplay: false,
    });

    timeline.add({
        targets: text.querySelectorAll('.letter'),
        opacity: [0, 1],
        translateY: [60, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * (i + 1),
        endDelay: 500
    });

    // Intersection Observer to trigger animation when text is visible
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timeline.play();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(text);
});

const items = document.querySelectorAll(".tournaments .container .item");
function fadeInItems() {
    items.forEach((item, index) => {
        anime({
            targets: item,
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: "easeOutExpo",
            delay: index * 200,
        });
    });
}

// Intersection Observer to trigger animation when items are visible
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fadeInItems();
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.2
});

// Observe the tournament section
const tournamentSection = document.querySelector(".tournaments .container");
observer.observe(tournamentSection);

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();