const swiper = new Swiper('.swiperTop', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2500,
  },
});

const swiperText = new Swiper('.swipertext02', {
  loop: true,
  autoplay: {
    delay: 2500,
  },
});

const swiperSegment04 = new Swiper('.swiper-segment04',{
  loop: true,
  slidesPerView: 3,
  centeredSlides: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
  }
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
