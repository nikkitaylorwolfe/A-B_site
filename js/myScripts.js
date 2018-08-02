$(document).ready(function () {

    // ------------------------------------------------------
    // blog page hover state 
    // ------------------------------------------------------
    $(".post .post-title a").hover(function () {
        $(".post:hover .post-number").toggleClass("blue-hover");
    });

    // ------------------------------------------------------
    // home page blog hover state
    // ------------------------------------------------------
    $(".latest-post-link").hover(function () {
        $(".latest-post-date").toggleClass("blue-hover");
    });

    // ------------------------------------------------------
    // page sidebar position
    // ------------------------------------------------------
    $(window).on('load resize', function () {

        var $pageImageHeight = $(".page .main-image-v").height();
        $(".page aside").css({
            "top": $pageImageHeight
        });

    });

    // ------------------------------------------------------
    // display image title tag as a caption below image
    // ------------------------------------------------------
    var title = $('img').attr('title');
    if (title != null) {
        $('img').after("<span class='image-caption'>" + title + "</span>");
    }

    // ------------------------------------------------------
    // home transition time-out
    // ------------------------------------------------------
    $(".home-animation-wrapper").delay(1500).fadeOut("slow");

    // ------------------------------------------------------
    // post transition time-out
    // ------------------------------------------------------
    $(".post-transition").delay(500).fadeOut("slow");


});
