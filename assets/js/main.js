(function(window){

  var scrollPosition,
      randomSVG = Math.floor(Math.random() * 3);

  function init(){

    if($("body").hasClass("template--ernest")){
      randomShape();
      paragraphSelector();
    }

    $(window).scroll(function () {
      scrollPosition = $(window).scrollTop();
      shapeParallax();
    })
  }

  function randomShape(){
    $("[class^='image-shape']:eq( "+randomSVG+" )").show();
  }

  function paragraphSelector(){
    var totalParagraphs = $(".paragraphs p").length;

    // Check buttons
    $(".paragraph-selector li").each(function(){
      if($(this).index() < totalParagraphs){

      } else {
        $(this).hide();
      }
    });

    // On click
    $(".paragraph-selector li").on("click",function(){
      $(".paragraph-selector li").removeClass("active");
      $(this).toggleClass("active");

      var nrParagraphs = $(this).html();

      $(".paragraphs p").each(function(){

        if($(this).index() <= nrParagraphs){
          $(this).fadeIn();
        } else {
          $(this).fadeOut();
        }
      });
    })
  }

  function shapeParallax(){
    if(!$("body").hasClass("template--ernest")){
      $(".image-shape--circle").css('transform', 'translateY(' + parseInt(scrollPosition / 10) + 'px)');
      $(".image-shape--rectangle").css('transform', 'translateY(' + parseInt(-scrollPosition / 4) + 'px)');
      $(".image-shape--triangle").css('transform', 'translateY(' + parseInt(-scrollPosition / 15) + 'px)');
    }
  }

  window.Application = {
    init: init
  }

}(window))  // Self execute

Application.init();
