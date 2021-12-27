$(document).ready(function(){
    $('header').hover(function(){
        $('.logo1').hide();
        $('.logo2').css({'display':'block'});
    },function(){
        $('.logo1').show();
        $('.logo2').hide();
    });

    $('.s_slick_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed:5000,
        arrows:false,
        infinite:true
      });

    //   var chkclick= false;
    //   var Slider = 0;

    //   if (Slide == 0 && chkclick == false)  {
    //         $('.s_slick_slider').slick('slickPause');
    //         $('#theVideo').get(0).play();

    //         document.getElementById('theVideo').addEventListener('ended', myHandler, false);
    //         function myHandler(e) {
    //             $('.s_slick_slider').slick('slickPlay');
    //         }
    //     } if (Slide != 0 && chkclick == false) {
    //         $('.s_slick_slider').slick('slickPlay');
    //     }

      $(".slick-dots").append('<button class="stop_btn"></button>');
      $(".slick-dots").append('<button class="start_btn" style="display:none"></button>');

      $('.stop_btn').click(function(){
          $('.s_slick_slider').slick('slickPause');
          $('.stop_btn').css({display: 'none'});
          $('.start_btn').css({display:'inline-block'});
      });

      $('.start_btn').click(function(){
          $('.s_slick_slider').slick('slickPlay');
          $('.stop_btn').css({display:'inline-block'});
          $('.start_btn').css({display:'none'});
      });

      $(".diy_slider_wrap").touchSlider({
		view : 4,

		btn_prev : $(".conArea").find(".btn_prev1"),
		btn_next : $(".conArea").find(".btn_next1")
	});
    
    // $('.scroll_a').click(function(){
    //     var $offset = $('.section2').offset().top;
    //     $('html,body').animate({    
    //         scrollTop: $offset
    //         },500)
    //     })
});