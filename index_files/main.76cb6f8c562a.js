(function ($) {
    "use strict";

    $(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        //Fixed nav on scroll
        var height = $('#navbar-1').height();
        height = 100;
        $(document).on('scroll',function(e){
            var scrollTop = $(document).scrollTop();
            if(scrollTop > 50) {
                $('#navbar-1').addClass('fixed-top');
                $('#navbar-1').removeClass('navbar-1');
            }
            else {
                $('#navbar-1').addClass('navbar-1');
                $('#navbar-1').removeClass('fixed-top');
            }
        });

        
        
        //Testimonial
        $('.section-testimonial-cont').owlCarousel({
                loop: true,
                margin: 30,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: false
                  },
                  600: {
                    items: 1,
                    nav: false
                  },
                  1000: {
                    items: 1,
                    nav: false,
                 
                  }
                }
        });

    });


    $(window).on('load',function(){
        
        //Portfolio container            
        var $container = $('.portfolioContainer .row');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
 
        $('.portfolioFilter a').on('click', function(){
            $('.portfolioFilter a').removeClass('current');
            $(this).addClass('current');
     
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
             });
             return false;
        }); 
        
        //WOW Js
        new WOW().init();
        
    });


}(jQuery));    
