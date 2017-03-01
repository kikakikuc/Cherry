// 	FIXED MENU
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 825) {
        $('.navbar').addClass('navbar-fixed-top');
    } else {
        $('.navbar').removeClass('navbar-fixed-top');
    }
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

// ISOTOPE

$(".grid").isotope({
	itemSelector: '.grid-item',
	layoutMode: 'fitRows'
});
$('.iso-nav ul li').click(function(){
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


// MENU

$("nav ul li").click(function() {
	var selectedTab = $(this).attr('tab');
	$(this).addClass('active').siblings().removeClass('active');
});


//COUNTER

$('.counter').each(function() {
	var $this = $(this),
	  countTo = $this.attr('data-count');

	$({ countNum: $this.text()}).animate({
		countNum: countTo
		},
  		{
	    duration: 10000,
	    easing:'linear',
	    step: function() {
	      $this.text(Math.floor(this.countNum));
	    },
	    complete: function() {
	      $this.text(this.countNum);
	      //alert('finished');
	    }

  });
});

 $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });

// $(".search-input,.close-search").hide();
// $(".open-search").click(function(){
//     $(".search-engine").show();
// });
// $(".close-search").click(function(){ 
// 	    $(".search-engine").hide();
// });

