import Swiper from 'swiper';

const cardSlider = new Swiper('.slider', {
  wrapperClass: 'slider__wrapper',
  slideClass: 'slider__slide',
  direction: 'horizontal',
  slidesPerView: 'auto',
});

export default cardSlider;
