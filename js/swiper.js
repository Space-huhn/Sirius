const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    slidesPerView: 1.2,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    autoplay: true,
    // If we need pagination
    pagination: {
        el: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        576: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 1.35,
        },
        992: {
            slidesPerView: 1.65,
        }
    }
});
