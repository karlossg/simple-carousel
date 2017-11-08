const carouselList = $("#carousel ul");

const moveFirstSlide = function() {
  let firstItem = carouselList.find("li:last");
  let lastItem = carouselList.find("li:first");
  lastItem.before(firstItem)
  carouselList.css({marginLeft:-400});
};

const carousel = function(direction="right") {
  carouselList.animate({'marginLeft': 0}, 500, moveFirstSlide);
  console.log(carousel);
}
// const moveToLeft = () => carouselList.animate({'marginRight':400}, 500, moveFirstSlide);

$(".arrow-right").click(function(event) {
  event.preventDefault();
  carousel();
})

$(".arrow-left").click(function(event) {
  event.preventDefault();
  carousel("left");
})


setInterval(carousel, 3000);



