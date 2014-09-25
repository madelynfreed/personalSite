$(function(){
    $('.transform').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('.transform').data('size') == 'big')
        {
            $('.transform').data('size','small');
            $('.transform').stop().animate({
                height:'40px'
            },600);
        }
    }
    else
    {
        if($('.transform').data('size') == 'small')
        {
            $('.transform').data('size','big');
            $('.transform').stop().animate({
                height:'100px'
            },600);
        }  
    }
});