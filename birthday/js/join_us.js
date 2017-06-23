 $(function(){ 
  var sc;
  $(window).scroll(function(){
    sc= $("body").scrollTop();
   if (sc>200){
      $(".scrolltop").css("display","block");
     } else{
      $(".scrolltop").css("display","none");
     }

        $(".scrolltop").click(function(){
          $("body").stop().animate({scrollTop:0},500);
        });
    
  })
   $(".one").click(function(){
      $(this).next().slideToggle();
     $(".active").removeClass("active");
    $(this).addClass("active");
    
    })
   })
 