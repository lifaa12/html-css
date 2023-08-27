$(document).ready(function () {
    // $(".menu-product-click").click(function (e) { 
    //     e.preventDefault();
    //     $(".menu-product").slideToggle();
    // });
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
});