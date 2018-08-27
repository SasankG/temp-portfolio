var main = {
    
init: function(){

//Fading Avatar On Scroll
$(window).scroll(function(){
    if($('.navbar').offset().top > 10){
        $('#myPic').fadeOut();
    }else{
        $('#myPic').fadeIn();
    }
})

$(document).ready(function(){
    $('.blockTwo').fadeIn('slow');
    $("#firstBlurb").fadeIn('slow');
    $('#miniBlurb').fadeIn('slow');
    $('#miniBlurb2').fadeIn('slow');
})   
    
//Scroll Fade In Blocks 
$(window).scroll( function(){
        $('.blockThree').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this)
                .animate({'opacity':'1'},600)
            }            
        }); 
        
    $('.blockFour').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this)
                .animate({'opacity':'1'},600)
            }            
        });     
    });


//Slide down menu
/*
$(document).ready(function(){
    $(".container-fullwidth").slideDown();
})
*/

//Dropdown Menus  
$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).slideDown();
    }, function() {
    $(this).find('.dropdown-menu').stop(true, true).slideUp();
});
    
}
};

document.addEventListener('DOMContentLoaded', main.init);