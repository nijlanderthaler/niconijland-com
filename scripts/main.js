$(document).ready(function(){
  $(".burger-nav").on("click", function(){
    $("nav ul").toggleClass("open");
  });
});

$(document).ready(function(){
  $(".burger-container").on("click", function(){
    $(this).toggleClass("open");
  });
});
