$( document ).ready(function() {
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
