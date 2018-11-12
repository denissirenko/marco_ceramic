(function($){
    $(".icon_user").on("click",function(){
        $(".login_card").toggleClass("active");
    });

    $(".icon_shop").on("click",function(){
        $(".shopping-card").toggleClass("active");
    });

    $(".icon_menu").on("click",function(){
        $(".menu__navigation_card").toggleClass("active");
    });

    $(".menu_search").on("click",function(){
        $(".menu_search_card").toggleClass("active");
    });

    $(".icon_phone").on("click",function(){
        $(".phone_contact_card").toggleClass("active");
    });


    $('.tab_content').hide();
    $('.tab_content:first').show();
    $('.tabs li:first').addClass('active');

    $('.tabs li').click(function(event) {
      $('.tabs li').removeClass('active');
      $(this).addClass('active');
      $('.tab_content').hide();

      let selectTab = $(this).find('a').attr("href");
      $(selectTab).fadeIn();
    });


    $('.slide-product').slick({
        slidesToShow: 4,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    


    


    

    const scrollBtn = $('[data-scroll]');  
    function onClick(e) {
      e.preventDefault(); 
      const target = $(this).attr('data-scroll');  
      const dist = $(target).offset().top; 
      $('html, body').animate({ scrollTop: dist }, 1000, 'swing'); 
    }
    scrollBtn.on('click', onClick); 

})(jQuery);