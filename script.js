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

// function showSlide(id) {
//   $(".dot").click(function(e) {
//     let clickedElemenId = e.target.id
//     let itemToShow = $("#" + clickedElemenId[3])
//     let firstItem = carouselList.find("li:first");
//     firstItem.before(itemToShow);
//     activeDot();
//   })
// }

function moveArrow(margin, side) {
  event.preventDefault();
  carousel(margin, side);
}

// setInterval(() => carousel(-400, "right"), 3000);


