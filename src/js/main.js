$(function() {
  $('#carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.carousel-wrapper__prev'),
    nextArrow: $('.carousel-wrapper__next')
  });

  new window.TabsManager(document.querySelector('.tabs'));
});