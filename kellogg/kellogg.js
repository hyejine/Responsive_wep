$(document).ready(function(){

    // nav menu창 
    $(".gnb_nav_ul").hide();
    $(".gnb_nav1").hover(function(){
        $(this).children("ul").slideToggle("fast");
    },
    );

    $(".s4_c1_inner").hide();
    $(".s4_c").hover(function(){
        $(this).stop().hide();
        $(this).stop().next().show();
    },
    function(){
        $(this).stop().show();
        $(this).stop().next().hide();
    });


});