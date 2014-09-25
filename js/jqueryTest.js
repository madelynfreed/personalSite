$(function() {
    $('.header').data('size','big');
    $('.face').data('size','full');
});

$(window).scroll(function() {
    if($(document).scrollTop() > 0) {
        if($('.header').data('size') == 'big') {
            $('.header').data('size','small');
            $('.header').stop().animate({height:'40px'},600);
        };
        if($('.face').data('size') == 'full') {
            $('.face').data('size','mini');
            $('.face').stop().animate({height:'35px', width:'35px'},600);
        }
    }
    else {
        if($('.header').data('size') == 'small'){
            $('.header').data('size','big');
            $('.header').stop().animate({height:'340px'},600);
        };
        if ($('.face').data('size') == 'mini') {
            $('.face').data('size','big');
            $('.face').stop().animate({height:'300px',width:'300px'},600)
        } 
    }
});

function functionOne() { alert('You clicked the top text'); }
function functionTwo() { alert('You clicked the bottom text'); }