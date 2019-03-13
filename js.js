

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

$('.img-project1')
    .mouseover(
        function() {
            $('.caption1').css('bottom', '20%');
        }
    )
    .mouseout(
        function() {
            $('.caption1').css('bottom', '-500px');
        }
    )
$('.img-project2')
.mouseover(
    function() {
        $('.caption2').css('bottom', '20%');
    }
)
.mouseout(
    function() {
        $('.caption2').css('bottom', '-500px');
    }
)
$('.img-project3')
.mouseover(
    function() {
        $('.caption3').css('bottom', '20%');
    }
)
.mouseout(
    function() {
        $('.caption3').css('bottom', '-500px');
    }
)
$('.img-project4')
.mouseover(
    function() {
        $('.caption4').css('bottom', '20%');
    }
)
.mouseout(
    function() {
        $('.caption4').css('bottom', '-500px');
    }
)
$('.img-project5')
.mouseover(
    function() {
        $('.caption5').css('bottom', '20%');
    }
)
.mouseout(
    function() {
        $('.caption5').css('bottom', '-500px');
    }
)
$('.img-project6')
.mouseover(
    function() {
        $('.caption6').css('bottom', '20%');
    }
)
.mouseout(
    function() {
        $('.caption6').css('bottom', '-500px');
    }
)



/*
  * Open the drawer when the menu ison is clicked.
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