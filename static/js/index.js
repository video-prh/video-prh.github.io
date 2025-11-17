document.addEventListener('DOMContentLoaded', () => {
  // Initialize Bulma carousels
  bulmaCarousel.attach('.carousel', {
    slidesToScroll: 1,
    slidesToShow: 1,
    navigation: true,
    navigationKeys: true,
    loop: true,
    autoplay: true,
  });
});