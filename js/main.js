$(window).scroll(function(){
	var wStop = $(this).scrollTop();
	$(".forward-bird").css({
		'transform' :'translate(0px,-'+wStop/35+'%)'
		});
	$(".logo").css({
		'transform' :'translate(0px,'+wStop/2+'%)'
		})
	$(".back-bird").css({
		'transform' :'translate(0px,'+wStop/4+'%)'
		});
	
	if(wStop > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
        $('.clothes-pics .figure').fadeIn(2000) 
			}else{
				$('.clothes-pics .figure').fadeOut(2000) 
				}

   
//promo scope
if(wStop > $('.large-window').offset().top-($(window).height())){
	$('.large-window').css({'background-position':'center '+ (wStop - $('.large-window').offset().top) +'px'});
	var opacity = (wStop - $('.large-window').offset().top + 400) / (wStop / 5);

    $('.promo').css({'opacity': opacity});
	}

// Floating Elements

  if(wStop > $('.content').offset().top - $(window).height()){

    var offset = (Math.min(0, wStop - $('.content').offset().top +$(window).height() - 350)).toFixed();

    $('.card-one').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.card-three').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
	})