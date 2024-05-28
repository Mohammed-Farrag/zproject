/*glopal $, alert, console*/

$(function(){

    'use strict';

    // menu for header for mobile screen
    $('.photheader .menubtn').click(function(){
        $(".photheader ul, .photheader .container > .row > div:last-of-type").slideToggle(500);
    });
    
    // multi-parts for course inner page
    $(".conference .daysselect li").click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $(".conference .maincont .complex").hide();
        $("." + $(this).data('class')).fadeIn(500);
    });

    // the links of navbar 
    
    $('.link1').click(function() {
        $('html, body').animate({
            scrollTop: $('#home').offset().top
        },200);
    });
    
    $('.link2').click(function() {
        $('html, body').animate({
            scrollTop: $('#docmessage').offset().top
        },200);
    });
    
    $('.link3').click(function() {
        $('html, body').animate({
            scrollTop: $('#committee').offset().top
        },500);
    });
    
    $('.link4').click(function() {
        $('html, body').animate({
            scrollTop: $('#speakers').offset().top
        },700);
    });

    
    $('.link5').click(function() {
        $('html, body').animate({
            scrollTop: $('#conference').offset().top
        },100);
    });
    
    $('.link6').click(function() {
        $('html, body').animate({
            scrollTop: $('#registration').offset().top
        },2000);
    });
    
    $('.link7').click(function() {
        $('html, body').animate({
            scrollTop: $('#sponsors').offset().top
        },2200);
    });

    // the button to top
    var scrollButton = $("#button-top");
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 700){
            scrollButton.show();
        }
        else{
            scrollButton.hide();
        }
    });
    scrollButton.click(function(){  
        $("html, body").animate({ scrollTop: 0}, 1000);
    });

    
    
});