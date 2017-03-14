var md = new MobileDetect(window.navigator.userAgent);

$(document).bind('mousemove', function(e){
	/* Set dimensions of transform */
	var w = $('#logobox').width();
	var h = $('#logobox').height();
		
	/* Warp factor from center point */  
	var centerX = w/3;
	var centerY = h/3;
	
	/* Arc of rotation */
	var deg = 75;
	
	
    $('.btful-warp').css({
       'transform'		 : 'rotateX('+Math.floor(e.pageY-centerY)/deg+'deg) rotateY('+-Math.floor(e.pageX-centerX)/deg+'deg)',
       'transform-style' : 'preserve-3d',
	   'transform-origin': '50% 50%'
    });
    $('.life_is-warp').css({
       'transform'		 : 'rotateX('+Math.floor(e.pageY-centerY)/deg+'deg) rotateY('+-Math.floor(e.pageX-centerX)/deg+'deg)',
       'transform-style' : 'preserve-3d',
	   'transform-origin': '50% 50%'
    });
    $('.arch-warp').css({
       'transform'	 	 : 'rotateX('+Math.floor(e.pageY-centerY)/deg+'deg) rotateY('+-Math.floor(e.pageX-centerX)/deg+'deg)',
       'transform-style' : 'preserve-3d',
	   'transform-origin': '50% 50%'
    });
    $('.word-warp').css({
       'transform'		 : 'rotateX('+Math.floor(e.pageY-centerY)/deg+'deg) rotateY('+-Math.floor(e.pageX-centerX)/deg+'deg)',
       'transform-style' : 'preserve-3d',
	   'transform-origin': '50% 50%'
    });
    
});

/* Parallax */
var scene = document.getElementById('paralogo');
var parallax = new Parallax(scene, {
	calibrateX: true,
	calibrateY: true
});


$(function(){
	/* Social icons */
	$('.social_icon').on('mouseenter', function(){
		$(this).children('.icon_out').fadeOut(300);
		$(this).children('.icon_over').fadeIn(300);
	}).on('mouseleave', function(){
		$(this).children('.icon_out').fadeIn(300);
		$(this).children('.icon_over').fadeOut(300);
	});
	
	/* Turn on the lights */
	// LIB
	setTimeout(function(){
		$('.lib-activated').each(function(){		
			$theseClasses = $(this).data('onclasses');
			$(this).addClass('powerOn '+$theseClasses).removeClass('fill-off');
		});
	}, 2000);
	// ARCS
	setTimeout(function(){
		$('.arch-activated').each(function(){		
			$theseClasses = $(this).data('onclasses');
			$(this).addClass('powerOn '+$theseClasses).removeClass('fill-off');
		});
	}, 2500);
	// WORDS
	setTimeout(function(){
		$('.words-activated').each(function(){		
			$theseClasses = $(this).data('onclasses');
			$(this).addClass('powerOn '+$theseClasses).removeClass('fill-off');
		});
	}, 2750);
	// BG GLOW
	setTimeout(function(){
		$('.green-radial').animate({'opacity':'1'}, 650);
	}, 2750);
	// NY,NE
	setTimeout(function(){
		$('.nyne-activated').each(function(){
			var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
			if (isSafari) {
				$(this).addClass('powerOn pink_on_safari').removeClass('off');
			} else {
				$theseClasses = $(this).data('onclasses');
				$(this).addClass('powerOn '+$theseClasses).removeClass('off');
			}
		});
	}, 3550);
	// COPY
	setTimeout(function(){
		$('.bc-activated').each(function(){		
			$(this).addClass('powerOn').removeClass('off');
		});
	}, 3750);
	// CTA1
	setTimeout(function(){
		$('.cta1-activated').each(function(){		
			$(this).addClass('powerOn').removeClass('off');
		});
	}, 3800);
	// CTA2
	setTimeout(function(){
		$('.cta2-activated').each(function(){		
			$(this).addClass('powerOn').removeClass('cta_off');
		});
	}, 3900);
	// BG GLOW
	setTimeout(function(){
		$('.blue-radial').animate({'opacity':'1'}, 650);
		$('.col_off').animate({'opacity':'1'}, 400);
	}, 4200);
	// SOCIAL ICONS
	setTimeout(function(){
		var n = 0;
		$('.social_icon').each(function(){
			$(this).children('.icon_over').delay(125*n).fadeIn(200).delay(200).fadeOut(400);
			$(this).children('.soc_off').delay(225*n).animate({'opacity':'1'}, 400);
			n++;
		})
		$('.libfoot-off').animate({'opacity':'1'}, 1500);
	}, 5500);	

});
