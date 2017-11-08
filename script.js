const carouselList = $("#carousel ul");

const moveFirstSlide = function() {
  let firstItem = carouselList.find("li:last");
  let lastItem = carouselList.find("li:first");
  lastItem.before(firstItem)
  carouselList.css({marginLeft:0});
};

const carousel = () => carouselList.animate({'marginLeft': 400}, 500, moveFirstSlide);

// const moveToLeft = () => carouselList.animate({'marginRight':400}, 500, moveFirstSlide);

$('.arrow-right').click(function(event) {
  event.preventDefault();
  carousel();
})

// $('.arrow-left').click(function(event) {
//   event.preventDefault();
//   moveToLeft();
// })


setInterval(carousel, 3000);



