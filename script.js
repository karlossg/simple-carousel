const carouselList = $("#carousel ul");

function moveFirstSlide(side) {
  let firstItem = carouselList.find("li:first");
  let lastItem = carouselList.find("li:last");
  if (side === "right") {
  lastItem.after(firstItem);
  carouselList.css({marginLeft: 0});
  } else {
    firstItem.before(lastItem)
    carouselList.css({marginLeft:-400});
  }
};

function carousel(margin, side) {
  carouselList.animate({'marginLeft': margin}, 500, moveFirstSlide(side));
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



