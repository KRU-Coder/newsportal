$(document).ready(function(){
    $('.open-menu').click(function(){
        $('.close-menu').show();
        $(this).hide();
        $('.side-nav').show(300);
    });
    $('.close-menu').click(function(){
        $('.open-menu').show();
        $(this).hide();
        $('.side-nav').hide(300);
    });
    $('.catogary-6-wrapper').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $(window).scroll(function(){
        if($(window).scrollTop()>200){
            $(".back-to-top").show();
        }
        else{
          $(".back-to-top").hide();
      }
    });
    $(".back-to-top").click(function(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })
    $(window).scroll(function(){
        if($(window).scrollTop()>500){
            $("header").addClass("h");
        }
        else(
            $("header").removeClass("h")
        )
    });
    // $(window).scroll(function(){
    //     $('.h').show($(this).scrollTop()>950);
    // })
    // $(window).scroll(function(){
    //     if($(window).scrollTop()>200){
    //         $(".menu2").show();
    //     }
    //     else{
    //         $(".menu2").hide();
    //     }
    // });
    // $(window).scroll(function(){
    //     if($(window).scrollTop()>200){
    //         $(".navigation").hide();
    //     }
    //     else{
    //         $(".navigation").show();
    //     }
    // });
    // $(".menu-open").click(function(){
    //     $(".menu-close").show()
    //     $(this).hide()
    // });
    // $(".menu-close").click(function(){
    //     $(".menu-open").show()
    //     $(this).hide()
    // });
$('.player-close').click(function(){
    $('.bottom-main-player').hide(1000)
});
$('.reporter-close').click(function(){
    $('.repoter').hide();
})


  
  



});