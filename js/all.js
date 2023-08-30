$(document).ready(function () {
    $(".menu-product-click").hover(function () {
            // over
            $(".menu-product").stop().slideDown();
            $(".menu-product-click>a").addClass("menu-jq-class");
        }, function () {
            // out
            $(".menu-product").stop().slideUp();
            $(".menu-product-click>a").removeClass("menu-jq-class");
        }
    );
    $(".top-btn").click(function (e) { 
        e.preventDefault();
        $("html,body").animate({
            scrollTop:0},1000);
    });
});