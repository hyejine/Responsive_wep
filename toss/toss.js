$(document).ready(function(){
    // $(window).scroll (function(){
    //     $('.section3_con1 ').animate({'opacity':'1'},500);
    //         }
    //     ); 
    function isElementUnderBottom(elem, triggerDiff) {
        const { top } = elem.getBoundingClientRect();
        const { innerHeight } = window;
        return top > innerHeight + (triggerDiff || 0);
        }

        function handleScroll() {
        const elems = document.querySelectorAll('.section3_con1');
        elems.forEach(elem => {
            if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(200px)';
            } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
            }
        })
        }

        window.addEventListener('scroll', handleScroll);
})