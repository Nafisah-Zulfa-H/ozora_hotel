const swiperTop = new Swiper('.swiper-top', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2500,
  },
});

const swiperSegment02 = new Swiper('.swiper-segment02', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperSegment04 = new Swiper('.swiper-segment04',{
  loop: true,
  slidesPerView: "auto",
  centeredSlides : true,
  spaceBetween: 10,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableonInteraction: false,
  },
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    hide: true,
  },
});

const swiperSegment05 = new Swiper('.swiper-segment05', {
  // Optional parameters
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
  },
});
