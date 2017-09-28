function validateForm() {

	var fname = $("#firstname");
	var lname = $("#lastname");
	var email = $(".emailinput");
	var form = $("#_form_5_");

	if (fname.val() == "") {
		fname.focus();
		$(".form-error").css("display", "block");
	} else if (lname.val() == "") {
		lname.focus();
		$(".form-error").css("display", "block");
	} else if (email.val() === "") {
		email.focus();
		$(".form-error").css("display", "block");
	} else {
		form.submit();
	}

	return false;



}

(function ($) {

	var images;

	$.ajax({
		type: 'GET',
		url: 'https://staging.libnet.io/wp-json/lib/gallery?limit=400',
		async: false,
		dataType: 'json',
		success: function (results) {

			$.each(results.rows, function (i, data) {
				images = '<a href="' + data.path + '" data-fancybox="' + data.categories[0].slug + '" data-thumb="' + data.path + '"></a>';				
				$(".gallery-images").append(images);
			});

		},
		complete: function () {
			console.log('Completed');
		}

	});


	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function () {

		$("[data-fancybox]").fancybox({
			infobar: false,
			buttons: [
				'close'
			],
			afterShow: function () {
				$(".fancybox-inner").bind("contextmenu", function (e) {
					return false;
				});
				/* Add watermark to gallery elements only */
				$('<div class="watermarker"></div>').prependTo('.fancybox-image-wrap');
			}
		});

		var $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		var $height = $('#header').height();

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function () {
			window.setTimeout(function () {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function () {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Banner

		if ($banner.length > 0) {

			// IE: Height fix.
			if (skel.vars.browser == 'ie' &&
				skel.vars.IEVersion > 9) {

				skel.on('-small !small', function () {
					$banner.css('height', '100vh');
				});

				skel.on('+small', function () {
					$banner.css('height', '');
				});

			}

			// More button.
			$banner.find('.more')
				.addClass('scrolly');

		}


		// Get BG Image

		if ($(".bg-img").length) {

			$(".bg-img").each(function () {

				var post = $(this),
					bg = post.data('bg');

				post.css('background-image', 'url(img/' + bg + ')');
				post.css('background-position', 'bottom');

			});


		}

		// Posts

		$("body").each(function () {
			var p = $(this),
				i = p.find('.inner'),
				m = p.find('.more');

			m.addClass('scrolly');

			p.scrollex({
				top: '40vh',
				bottom: '40vh',
				terminate: function () {
					m.removeClass('current');
					i.removeClass('current');
				},
				enter: function () {
					m.addClass('current');
					i.addClass('current');
				},
				leave: function () {
					m.removeClass('current');
					i.removeClass('current');
				}
			});

		});

		// Scrolly.
		if ($(".scrolly").length) {

			$('.scrolly').scrolly();
		}

	});

})(jQuery);