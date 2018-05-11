$(document).ready(function(){

    var waypoints = $('.js--section-babies').waypoint(function(direction) {
        if(direction == "down"){
            $("nav").addClass("sticky-nav")
        }
        else{
            $("nav").removeClass("sticky-nav")
        }
      }, {
        offset: '10%'
    })
    
    /* Navigation */
    $('.js--babies-link').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-babies').offset().top}, 1000)
    });
    
    
    $('.js--quotes-link').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-quotes').offset().top}, 1000)
    })
    
    
    $('.js--contact-link').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000)
    })
    
});