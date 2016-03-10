var iOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);
if(iOS){

    function iosVhHeightBug() {
        var height = $(window).height();
        $(".main-top-wrap").css('min-height', height);
    }

    iosVhHeightBug();
    $(window).bind('resize', iosVhHeightBug);

}  