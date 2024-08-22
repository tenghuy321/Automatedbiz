// toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link')
const closeIcon = document.getElementById('nav-close')

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
    })
});

closeIcon.addEventListener('click', () => {
    navMenu.classList.add('hidden');
})

hamburger.addEventListener('click', () => {
    navMenu.classList.remove('hidden');
})


// popular
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('card-container');
    const indicatorsContainer = document.querySelector('.indicator-container');
    const cards = container.children;
    const totalCards = cards.length;
    const cardWidth = cards[0].offsetWidth + 16;

    for (let i = 0; i < totalCards; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        indicatorsContainer.appendChild(indicator);
    }

    const updateIndicators = () => {
        const scrollLeft = container.scrollLeft;
        const index = Math.round(scrollLeft / cardWidth);
        indicatorsContainer.querySelectorAll('.indicator').forEach((ind, i) => {
            ind.classList.toggle('active', i === index);
        });
    };

    container.addEventListener('scroll', updateIndicators);
    updateIndicators();

    document.getElementById('prev-btn').addEventListener('click', () => {
        container.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        container.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });
});


// video
var video = document.getElementById("myVideo");
// var btn = document.getElementById("myBtn");
var icon = document.querySelectorAll('i');
function myFunction() {

    if (video.paused) {
        video.play();
        // btn.innerHtml = 'pause';
        icon.classList.remove("fa-pause");
    } else {
        video.pause();
        // btn.innerHtml = 'play';
        icon.classList.add("fa-play");
    }
}


// seleted filter
const filterButtons = document.querySelectorAll('.filter_buttons button');
const filterableCards = document.querySelectorAll('.filterable_cards .card')
const textCards = document.querySelectorAll('.filterable_cards .text');

const filterCards = e => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    filterableCards.forEach(card => {
        card.classList.add('hidden');

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all'){
            card.classList.remove('hidden');
        }
    });

}

filterButtons.forEach(button => button.addEventListener('click', filterCards));
// filterButtons.forEach(button => button.addEventListener('click', filterCards));


// swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    // }
});

