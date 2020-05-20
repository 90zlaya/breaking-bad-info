// Card Slider - Swiper
// TODO: Fit this into TheSlider.vue component
export let cardSlider = () => {
  const cardSlider = new Swiper('.card-slider', {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      // When window is <= 992px
      992: {
        slidesPerView: 2
      },
      // When window is <= 768px
      768: {
        slidesPerView: 1
      }
    }
  });
}
