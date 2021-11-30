$(document).ready(function(){
    $(".gnb_nav_ul").hide();
    $(".gnb_nav1").hover(function(){
        $(this).children("ul").slideToggle("fast");
    },
    );
});