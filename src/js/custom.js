// ISOTOPE

$(".grid").isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});
$('.special-menu .iso-nav ul li').click(function(){
    $('.iso-nav ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector =$(this).attr('data-filter');
    $(".grid").isotope({
        filter: selector,
        animationOption: {
             duration: 750,
             easing: 'linear',
             queue: false,
        }
    });
    return false;
});
