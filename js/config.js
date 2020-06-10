$(window).load(function () {
    $(".loader").fadeOut("slow");
    $("body").removeClass("scrolea");
    setTimeout(function () {
      $(".loader").remove();
    }, 0);
  });

  $(function () {
    $("body").addClass("scrolea");
  });

  $(document).ready(function () {
    $(".trigger").on("click", function () {
      console.log("hey")
      $(".modal-wrapper").toggleClass("open");
      $(".page-wrapper").toggleClass("blur-it");
      return false;
    });

    $(".menuAbs").on("click", function () {
      $(".menuAbs").css("pointer-events" ,"none")
      $(".menuAbs").css("opacity" ,".4")
      $(".modal-menu").toggleClass("open");
      $(".page-wrapper").toggleClass("blur-it");
      $("body").css("overflow" , "hidden")
      return false;
    });
    $(".closeAbs").on("click", function () {
      $(".menuAbs").css("pointer-events" ,"painted")
      $(".menuAbs").css("opacity" ,"1")
      $(".modal-menu").removeClass("open");
      $(".modal-menu").toggleClass("close");
      $("body").css("overflow-y" , "scroll")
      return false;
    });
    $(".modal-menu").on("click" , function(){
      $(".menuAbs").css("pointer-events" ,"painted")
      $(".menuAbs").css("opacity" ,"1")
      $(".modal-menu").removeClass("open");
      $(".modal-menu").toggleClass("close");
      $("body").css("overflow-y" , "scroll")
    })
    $(".btnPreparing").on("click", function(){
      $("html").css("overflow-y" , "hidden")
      $(".modal-food2").css("visibility" , "visible");
       $(".modal-food2").css("opacity" , "1");
       $(".containerGif").css("bottom" , "0");
       $(".containerGif").css("right" , "0");
       $(".containerGif").css("transform" , "rotate(0)");
    })
    $(".popup__closeGif").on("click", function(){
      $("html").css("overflow-y" , "scroll")
      $(".modal-food2").css("visibility" , "hidden");
       $(".modal-food2").css("opacity" , "0");
       $(".containerGif").css("bottom" , "-100vh");
       $(".containerGif").css("right" , "-100vw");
       $(".containerGif").css("transform" , "rotate(32deg)");
    })
  });