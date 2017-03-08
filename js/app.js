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
	
	/* Mobile detection depth refactorization */
	/* Needs more dev */
	if( md.mobile() ){
		$('#arcs').data('depth', '-3');
		$('#halo_top').data('depth', '-1.5');
		$('#halo_bottom').data('depth', '-1.5');
		$('#life_is').data('depth', '2');
		$('#beautiful').data('depth', '3');
		parallax.updateLayers();
	}
	
	/* Turn on the lights */
	// LIB
	setTimeout(function(){
		$('.lib-activated').each(function(){		
			$theseClasses = $(this).data('onclasses');
			$(this).addClass('powerOn '+$theseClasses).removeClass('fill-off');
		});
	}, 3000);
	// ARCS
	setTimeout(function(){
		$('.arch-activated').each(function(){		
			$theseClasses = $(this).data('onclasses');
			$(this).addClass('powerOn '+$theseClasses).removeClass('fill-off');
		});
	}, 3500);
	// WORDS
	setTimeout(function(){
		$('.words-activated').each(function(){		
			$theseClasses = $(this).data('onclasses');
			$(this).addClass('powerOn '+$theseClasses).removeClass('fill-off');
		});
	}, 3750);
	// BG GLOW
	setTimeout(function(){
		$('.green-radial').animate({'opacity':'1'}, 650);
	}, 3750);
	// NY,NE
	setTimeout(function(){
		$('.nyne-activated').each(function(){		
			$theseClasses = $(this).data('onclasses');
			$(this).addClass('powerOn '+$theseClasses).removeClass('off');
		});
	}, 4550);
	// COPY
	setTimeout(function(){
		$('.bc-activated').each(function(){		
			$(this).addClass('powerOn').removeClass('off');
		});
	}, 4750);
	// CTA1
	setTimeout(function(){
		$('.cta1-activated').each(function(){		
			$(this).addClass('powerOn').removeClass('off');
		});
	}, 4800);
	// CTA2
	setTimeout(function(){
		$('.cta2-activated').each(function(){		
			$(this).addClass('powerOn').removeClass('cta_off');
		});
	}, 4900);
	// BG GLOW
	setTimeout(function(){
		$('.blue-radial').animate({'opacity':'1'}, 650);
	}, 5200);
	// SOCIAL ICONS
	setTimeout(function(){
		var n = 0;
		$('.social_icon').each(function(){
			$(this).children('.icon_over').delay(125*n).fadeIn(200).delay(200).fadeOut(400);
			$(this).children('.soc_off').delay(225*n).animate({'opacity':'1'}, 400);
			n++;
		})
	}, 6500);
});



