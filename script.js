const l = console.log;

const carouselList = $("#carousel ul");
const dotList = $("#dotsList li");


function moveFirstSlide(side) {
  let firstItem = carouselList.find("li:first");
  let lastItem = carouselList.find("li:last");
  if (side === "right") {
  lastItem.after(firstItem);
  carouselList.css({marginLeft: 0});
  activeDot();
  } else {
    firstItem.before(lastItem)
    carouselList.css({marginLeft:-400});
    activeDot();
  }
};

function carousel(margin, side) {
  carouselList.animate({'marginLeft': margin}, 500, moveFirstSlide(side));
}

function activeDot() {
  let activeItem = carouselList.find("li:first");
  let activeDotId = activeItem.attr("id");
  $("#dotsList li").removeClass("active");
  $("#dot" + activeDotId).addClass("active");
}

function showSlide(id) {

}


$(".arrow-right").click(function(event) {
  event.preventDefault();
  carousel(-400, "right");
})

$(".arrow-left").click(function(event) {
  event.preventDefault();
  carousel(0, "left");
})

setInterval(() => carousel(-400, "right"), 3000);


