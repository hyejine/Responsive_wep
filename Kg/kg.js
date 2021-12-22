$(document).ready(function(){
    $('header').hover(function(){
        $('.logo1').hide();
        $('.logo2').css({'display':'block'});
    },function(){
        $('.logo1').show();
        $('.logo2').hide();
    });

    // $('.post-slider').slick();
    $('.s_slick_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        // rtl: true
        //오토 플레이 실행 
      });
      
      $('button').click(function(){
         $('html,body').animate({scrollTop:0},200);
      });

      
      
});