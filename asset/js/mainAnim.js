// ===================LOCOMOTIVE SCROLL====================

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
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
        autoplay: false // Set autoplay to false for manual control
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
                timeline.play(); // Start the animation when the text is in view
                observer.unobserve(entry.target); // Stop observing after animation has started
            }
        });
    }, {
        threshold: 0.2 // Adjust this value for when you want the animation to trigger
    });

    // Start observing the current text element
    observer.observe(text);
});

// Fade in items from the bottom using Anime.js
const items = document.querySelectorAll(".tournaments .container .item");

// Function to trigger animation
function fadeInItems() {
    items.forEach((item, index) => {
        anime({
            targets: item,
            translateY: [100, 0], // Start from 100 pixels down
            opacity: [0, 1], // Start fully transparent
            duration: 1000, // Duration of the animation
            easing: "easeOutExpo",
            delay: index * 200, // Stagger the animation
        });
    });
}

// Intersection Observer to trigger animation when items are visible
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fadeInItems(); // Start the fade-in animation when the items are in view
            observer.unobserve(entry.target); // Stop observing after the animation has started
        }
    });
}, {
    threshold: 0.2 // Adjust as needed
});

// Observe the tournament section
const tournamentSection = document.querySelector(".tournaments .container");
observer.observe(tournamentSection);

// // --- RED PANEL ---
// gsap.from(".line-1", {
//   scrollTrigger: {
//     trigger: ".line-1",
//     scroller: "body",
//     scrub: true,
//     start: "top bottom",
//     end: "top top",
//     onUpdate: self => console.log(self.direction)
//   },
//   scaleX: 0,
//   transformOrigin: "left center", 
//   ease: "none"
// });

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
