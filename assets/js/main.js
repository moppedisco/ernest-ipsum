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


    $("body").on("click", "a", function (event) {
        $.pjax({
            "url": $(this).attr("href"),
            "fragment": "#pjax-container",
            "container": "#pjax-container",
            "complete": function (data) { // Want to do something else? Left here for reasons
            }
        });
        event.preventDefault();
    });

    $(document).on('pjax:start', function () {
        NProgress.start(); // Start the nprogress bar
    });
    $(document).on('pjax:end', function () {
        NProgress.done(); // End the nprogress bar
        // menuActive(); // Update the "active" class on links after ajax call
    });
    // $(document).ready(menuActive); // Update the "active" class on links on first load


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


  function menuActive() { // Function to toggle active menu links
      $('.active').removeClass('active'); // Remove "active" class on menu links after an ajax call
      var pgurl = window.location.href; // Get the page url
  // var pguri = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
  // "uri" gets only the link folder while "url" gets the entire link
  // Left here in case anyone out there uses $p->uri() on the menu
      $(".menu a").each(function () {
          if ($(this).attr("href") == pgurl || $(this).attr("href") == '') { // Compare url to links
              $(this).addClass("active"); // Set "active" class on menu links
              $(this).parents('li').children('a').addClass('active'); // Set "active" class on the parent of submenu links
          }
      });
  }

  window.Application = {
    init: init
  }

}(window))  // Self execute

Application.init();
