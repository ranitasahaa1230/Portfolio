// $("#button").click(function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#elementtoScrollToID").offset().top
//     }, 2000);
// });

function jumpToFooter(div) {
    if(div == 'cont') {
        $('html, body').animate({
            scrollTop: $('.contact-section').offset().top
        }, 'slow');
    }
}