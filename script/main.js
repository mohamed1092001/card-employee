$(".information").click(function () {
  $(this).addClass("active");
  $(".card").addClass("info-employee").addClass("shadow");
})

$(".information").blur(function () {
  $(this).removeClass("active");
  $(".card").removeClass("info-employee").removeClass("shadow");
})

$(".links").click(function () {
  $(this).addClass("active");
  $(".card").addClass("links-active").addClass("shadow");
})

$(".links").blur(function () {
  $(this).removeClass("active");
  $(".card").removeClass("links-active").removeClass("shadow");
})

$(".rate").click(function(){
  $(".rate-box").css({ "transform":"translateX(0%)"})
  $().css()
})
$(".rate").blur(function(){
  $(".rate-box").css({ "transform":"translateX(-150%)"})
})