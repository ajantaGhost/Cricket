// change hero section background image after fixed interevals
const heroContent = [
    {
        "text": "Find Tournaments and Join to play",
        "icon": "/asset/images/icons/cricket.svg",
        "image": "/asset/images/batter-hitting-ball.jpg"
    },
    {
        "text": "Host a Tournament and Invite your friends",
        "icon": "/asset/images/icons/tournament.svg",
        "image": "/asset/images/tournament.jpg"
    },
    {
        "text": "Discover new friends and oppurtunities",
        "icon": "/asset/images/icons/shirt.svg",
        "image": "/asset/images/cricket-ground.jpg"
    },
]

let currentIndex = 0;
function displayText() {
    const heroSection = document.querySelector(".hero-section");
    const carouselIcon = document.querySelector(".hero-section .carosel img");
    const carouselText = document.querySelector(".hero-section .carosel p");

    heroSection.style.backgroundImage = 'url(' + heroContent[currentIndex].image + ')';
    carouselIcon.src = heroContent[currentIndex].icon;
    carouselText.textContent = heroContent[currentIndex].text;

    currentIndex = (currentIndex + 1) % heroContent.length;
}
setInterval(displayText, 4000);


// open links with button is clicked
const learnMoreBtn = document.querySelector(".hero-section .container .learn-more");
learnMoreBtn.onclick = () => {
    window.location.href = "/asset/html/about.html";
}

const registerBtn = document.querySelector(".register .animated-button");
registerBtn.onclick = () => {
    window.location.href = "/asset/html/login.html";
}