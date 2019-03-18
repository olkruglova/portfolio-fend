

$(document).ready(function() {

/* Every time the window is scrolled ... */
    $(window).scroll( function(){

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
                $(this).animate({'opacity':'1'},1000);
            }
            
        }); 
    });

    let img = document.getElementsByClassName('img-project');

    for(let x=0; x<img.length; x++) {
        img[x].addEventListener('mouseover', function() {
            let btn = $(this).find('.btn-more');
                btn.css('bottom', '0');
        });
        img[x].addEventListener('mouseout', function() {
            let btn = $(this).find('.btn-more');
                btn.css('bottom', '-300px');
        })
    }



    /*
    * Open burger-menu
    */
    var menu = document.querySelector('#hamburger-menu');
    var main = document.querySelector('.container');
    var drawer = document.querySelector('#menu-bar');
    
    menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
    });
    main.addEventListener('click', function() {
    drawer.classList.remove('open');
    });

});




