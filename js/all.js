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
    const swiper = new Swiper('.swiper', {
        // Optional parameters
          direction: 'horizontal',
          loop: true,
        //   自動輪播
          autoplay: {
              delay: 1500,
              disableOnInteraction: false,
          },
        // 速度
          speed:1000,
          effect: 'coverflow',
        // If we need pagination
          pagination: {
          el: '.swiper-pagination',
          },
      
        // Navigation arrows
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          },
      });
});