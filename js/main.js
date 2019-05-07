$(document).ready(function(){
	$(".nav-container").sticky({
        topSpacing:0,
        zIndex:9999
    });

    $(".banner").owlCarousel({
        items:1,
        nav:true,
        loop:true
    });

    $(".testi-cover").owlCarousel({
        responsive:{
          0:{
            items:1
          },
          768:{
            items:2
          }
        },
        margin:30,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        autoplayTimeout:3000
        
    });

    $('.service-video').parallaxie({
        speed: 0.5
    });

    $('.ach-cover').parallaxie({
        speed: 0.5
    });

    $('.play-vid').magnificPopup({
        type:'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
          
            patterns: {
              youtube: {
                index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
          
                id: 'v=', // String that splits URL in a two parts, second part should be %id%
                // Or null - full URL will be returned
                // Or a function that should return %id%, for example:
                // id: function(url) { return 'parsed id'; }
          
                src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
              }
          
              // you may add here more sources
          
            },
          
            srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
          }
    });

    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    var config= document.querySelector('.port-cover');
    var mixer = mixitup(config,{
      selectors :{
        control :'[data-mixitup-control]'
      }
    });


    
});