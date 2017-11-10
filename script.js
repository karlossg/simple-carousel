let timer = setInterval(function() {
  $('#right').trigger('click');
}, 3500);


function slide(target) {
  $("#dots-list li").removeClass("active").eq(target).addClass("active");
  $("#carousel ul li").animate({
    'right': +400 * target + 'px'
  }, 450);
}

function pauseInt() {
  clearInterval(timer);
  timer = setInterval(function() {
    $('#right').trigger('click');
  }, 3500);
}

$("#dots-list li").click(function() {
  const target = $(this).index();
  slide(target);
  pauseInt()
});


$("#right").click(function() {
  let target = $("#dots-list li.active").index();
    if (target === $("#dots-list li").length - 1) {
    target = -1;
  }
  target = target + 1
  slide(target);
  pauseInt()
});

$("#left").click(function() {
  let target = $("#dots-list li.active").index();
  if (target === 0) {
    target = $("#dots-list li").length;
  }
  target = target - 1;
  slide(target);
  pauseInt()
});

