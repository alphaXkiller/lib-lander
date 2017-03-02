function isMobile() {
	try{ document.createEvent("TouchEvent"); return true; }
	catch(e){ return false; }
}

$(document).bind('mousemove', function(e){
    var w = $('#logobox').width();
    var h = $('#logobox').height();
    var centerX = w/3;
    var centerY = h/3;
    
    var deg = 75;
    
    $('.beautiful-fill').css({
       'transform': 'rotateX('+Math.floor(e.pageY-centerY)/deg+'deg) rotateY('+-Math.floor(e.pageX-centerX)/deg+'deg)',
       'transform-style' : 'preserve-3d',
       'transform-origin' : '50% 50%'
    });
    $('.life_is').css({
       'transform': 'rotateX('+Math.floor(e.pageY-centerY)/deg+'deg) rotateY('+-Math.floor(e.pageX-centerX)/deg+'deg)',
       'transform-style' : 'preserve-3d',
       'transform-origin' : '50% 50%'
    });
    $('.arch').css({
       'transform': 'rotateX('+Math.floor(e.pageY-centerY)/deg+'deg) rotateY('+-Math.floor(e.pageX-centerX)/deg+'deg)',
       'transform-style' : 'preserve-3d',
       'transform-origin' : '50% 50%'
    });
    $('.top-word-arch').css({
       'transform': 'rotateX('+Math.floor(e.pageY-centerY)/deg+'deg) rotateY('+-Math.floor(e.pageX-centerX)/deg+'deg)',
       'transform-style' : 'preserve-3d',
       'transform-origin' : '50% 50%'
    });
    $('.bottom-word-arch').css({
       'transform': 'rotateX('+Math.floor(e.pageY-centerY)/deg+'deg) rotateY('+-Math.floor(e.pageX-centerX)/deg+'deg)',
       'transform-style' : 'preserve-3d',
       'transform-origin' : '50% 50%'
    });
});
var scene = document.getElementById('paralogo');
var parallax = new Parallax(scene, {
	calibrateX: true,
	calibrateY: true,
});

$(function(){
	$('.social_icon').on('mouseenter', function(){
		$(this).children('.icon_out').fadeOut(300);
		$(this).children('.icon_over').fadeIn(300);
	}).on('mouseleave', function(){
		$(this).children('.icon_out').fadeIn(300);
		$(this).children('.icon_over').fadeOut(300);
	});
	
	
	if(isMobile()){
		$('#arcs').data('depth', 		'-0.05');
		$('#halo_top').data('depth', 	'-0.25');
		$('#halo_bottom').data('depth', '-0.25');
		$('#life_is').data('depth', 	'0.1');
		$('#beautiful').data('depth', 	'0.3');
	}
});



