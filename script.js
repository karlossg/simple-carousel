const l = console.log;

const carouselList = $("#carousel ul");
const dotList = $("#dotsList li");


// function moveFirstSlide(side) {
//   let firstItem = carouselList.find("li:first");
//   let lastItem = carouselList.find("li:last");
//   if (side === "right") {
//   lastItem.after(firstItem);
//   carouselList.css({marginLeft: 0});
//   activeDot();
//   } else {
//     lastItem.css({marginLeft:0});
//     firstItem.before(lastItem)

//     activeDot();
//   }
// };

// function carousel(margin, side) {
//   carouselList.animate({'marginLeft': margin}, 500, () => moveFirstSlide(side));
// }

function removeActiveDot() {
  $('#dotsList .active').removeClass("active");;
}


function addActiveDot() {
  let $activeItem = $('#photo-list li:first');
  let $activeDotId = $activeItem.attr("id");
  $("#dot" + $activeDotId).addClass("active");
}


function moveLeft() {
  removeActiveDot();
  setTimeout(addActiveDot, 1000);
  const $last = $('#photo-list li:last');
  $last.remove().css({
    'margin-left': '-400px'
  });
  $('#photo-list li:first').before($last);
  $last.animate({
    'margin-left': '0px'
  }, 800);
  
};


function moveRight() {
  removeActiveDot();
  setTimeout(addActiveDot, 1000);
  const $first = $('#photo-list li:first');
  $first.animate({
    'margin-left': '-410px'
  }, 800, function() {
    $first.remove().css({
      'margin-left': '0px'
    });
    $('#photo-list li:last').after($first);
  });
  
};

// function showSlide(id) {
//   $(".dot").click(function(e) {
//     let clickedElemenId = e.target.id
//     let itemToShow = $("#" + clickedElemenId[3])
//     let firstItem = carouselList.find("li:first");
//     firstItem.before(itemToShow);
//     activeDot();
//   })
// }

// function moveArrow(margin, side) {
//   event.preventDefault();
//   carousel(margin, side);
// }
$('#right').on('click', moveRight);

$('#left').on('click', moveLeft);

setInterval(moveRight, 4000);