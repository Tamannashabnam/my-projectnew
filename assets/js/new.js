$('.add-remove').slick({
  slidesToShow: 3,
  slidesToScroll: 3
});
$('.js-add-slide').on('click', function () {
  slideIndex++;
  $('.add-remove').slick('slickAdd', '<div><h3>' + slideIndex + '</h3></div>');
});

$('.js-remove-slide').on('click', function () {
  $('.add-remove').slick('slickRemove', slideIndex - 1);
  if (slideIndex !== 0) {
    slideIndex--;
  }
});




/*$('.slider-for').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  asNavFor: '.slider-for',
  dots: true,
  focusOnSelect: true
});

$('a[data-slide]').click(function (e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});