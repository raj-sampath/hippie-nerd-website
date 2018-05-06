$(document).ready(function(){
    
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