$( document ).ready(function() {

  var randomSVG = Math.floor(Math.random() * 3);

  if($("body").hasClass("template--ernest")){
    $("[class^='image-shape']:eq( "+randomSVG+" )").show();
  }

  // Paragraph buttons
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
});
