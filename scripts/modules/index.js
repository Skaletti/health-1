import './core/swiper-script.min.js'

new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2.5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2.1,
        },
        768: {
            slidesPerView: 2.3,
        },
        1000: {
            slidesPerView: 2.4,
        }
    }
});