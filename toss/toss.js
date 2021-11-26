$(document).ready(function(){
    // 스크롤 이동시 class 생성
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('header').addClass('header_border');
        }else{
            $('header').removeClass('header_border');
        }
    });

    // 스크롤 이동시 애니메이션 (아래->위)
    $(".section3").scroll(function(){
        $('.section3_con1 ').animate({'opacity':'1'},500);
    })

    // $(window).scroll(function(){
    //     var scroll=$(window).scrollTop();
    //     if(scoll>=50){
    //         $(".header_inner").addClass("header_border");
    //     }else{
    //         $(".header_inner").removeClass("header_border");
    //     };
    // });
    $(window).scroll (function(){
        $('.section3_con1 ').animate({'opacity':'1'},500);
            }
        ); 


    // function isElementUnderBottom(elem, triggerDiff) {
    //     const { top } = elem.getBoundingClientRect();
    //     const { innerHeight } = window;
    //     return top > innerHeight + (triggerDiff || 0);
    //     }

    //     function handleScroll() {
    //     const elems = document.querySelectorAll('.section3_con1');
    //     elems.forEach(elem => {
    //         if (isElementUnderBottom(elem, -20)) {
    //         elem.style.opacity = "0";
    //         elem.style.transform = 'translateY(200px)';
    //         } else {
    //         elem.style.opacity = "1";
    //         elem.style.transform = 'translateY(0px)';
    //         }
    //     })
    //     }

    //     window.addEventListener('scroll', handleScroll);
})