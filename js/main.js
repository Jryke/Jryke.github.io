( function($){
    "use strict";

    $(document).ready(function(){

        // this code is for meanmenu
        $('.header_area .mainmenu nav').meanmenu();


        // this code is for counter up
        $('.timer').countTo();


        //this code is for material design
        $.material.init();


        //this code is for magnetic pop-up
        $('.popup-youtube').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade'
        });


        //this code is for venobox
        $('.venobox').venobox({
            titleattr: 'data-title',
        });


        //this code is for scroll to bottom
        $(".hero_area_scroll_down").on('click',function(){
            $('html, body').animate({ scrollTop:  $(".scroll_topto_bottom").offset().top + 20 }, 'slow');
        });


         // this code is for creative team area
        $(".single_slider_wrapper").owlCarousel({
            loop:true,
            nav:true,
            margin: 30,
            navText: ["<i class='zmdi zmdi-long-arrow-left'></i>", "<i class='zmdi zmdi-long-arrow-right'></i>"],
            responsive:{
            1200:{
                items: 2,
            },
            992:{
                items: 2,
            },
            768:{
                items: 2,
            },
            300:{
                items: 1,
            },
            480:{
                items: 2,
            },
        }
        });


        //this code is for preloader
        $("body").addClass("preloader_active");


        // this code is for hire-us button
        var loginBtn = $('header .clientAreaLi, .clientLogin .closeBtn'),
		clientForm = $('header .clientLogin form');

        loginBtn.on('click',function(){
            clientForm.toggleClass('clicked');
            window.getSelection().removeAllRanges();
        });

	});

    // this code is for window load function

    $(window).load(function(){

        //this code is for Isotop mesonary
        var $portfolio = $('.gallery_items');

        $portfolio.isotope({
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            filter: '*'
        });

        $('.filter-menu li').on('click',function(){
            $('.filter-menu li').removeClass('current_menu_item');
            $(this).addClass('current_menu_item');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector,
            });
        }); // Isotop mesonary end


        // this code is for preloader
        $('#preloader').fadeOut(); // will first fade out the loading animation
        $('.preloader_spinner').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $("body").removeClass("preloader_active");


        //this code is for mesonary
        if($.fn.masonry){
            $('.masonry-blog-posts').masonry({
                itemSelector: '.single_post',
                columnWidth: 1
            });
        }

    });


})(jQuery);
