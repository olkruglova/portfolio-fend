

$(document).ready(function() {

/* Every time the window is scrolled ... */
    $(window).scroll( function(){
        $('header').css('opacity', 1 - $(window).scrollTop() / 170);

        $('.hiddens').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 

        $('#projects').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window < bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
            
        }); 
    });

});