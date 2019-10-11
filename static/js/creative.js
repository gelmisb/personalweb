/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

	
})(jQuery); // End of use strict


$( document ).ready(function() {
	
	$('.overlay').fadeIn(3000).delay(1000);
	$('.social-links').css('background', 'transparent').delay(1000);;
	$('.header-content-inner h1').css('background', 'transparent').fadeIn("fast").delay(1000);;
	$('.header-content-inner h3').css('background', 'transparent').fadeIn("fast").delay(1000);;
	
	var _MS_PER_DAY = 1000 * 60 * 60 * 24 * 365;

	function dateDiffInDays(a, b) {
	  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
	  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
	}

	var a = new Date("1995-10-16"),
		b = new Date(),
		difference = dateDiffInDays(a, b);

	$('#years').text(difference);

	
	var avatar = $('.my-avatar');
	var header = $('header');
	
	avatar.mouseover( function() {
		$('.overlay').fadeIn(1000);
		$('.social-links').css('background', 'transparent');
		$('.header-content-inner h1').css('background', 'transparent').fadeIn();
		$('.header-content-inner h3').css('background', 'transparent').fadeIn();
	});
	
	
	avatar.mouseout( function() {
		$('.overlay').fadeOut(1000);
		$('.social-links').css('background', 'linear-gradient(90deg, rgba(34,34,34,0) 0%, rgba(34,34,34,0.75) 30%, rgba(24,24,24,1) 50%, rgba(34,34,34,0.75) 70%, rgba(34,34,34,0) 100%)');
		$('.header-content-inner h1').css('background', 'linear-gradient(90deg, rgba(34,34,34,0) 0%, rgba(34,34,34,0.75) 30%, rgba(24,24,24,1) 50%, rgba(34,34,34,0.75) 70%, rgba(34,34,34,0) 100%)').fadeIn();
		$('.header-content-inner h3').css('background', 'linear-gradient(90deg, rgba(34,34,34,0) 0%, rgba(34,34,34,0.75) 30%, rgba(24,24,24,1) 50%, rgba(34,34,34,0.75) 70%, rgba(34,34,34,0) 100%)').fadeIn();
	});
	
	
	
	var str = 'As you already guessed, my name is Gelmis. I was born in this beautiful country called Lithuania 23 years ago. Since one of my family members have moved to Ireland I used to come to visit them during my school holidays. One summer I stayed started going to school in Dublin. Since (at the time) my hobbies had two things in common (creating and problem solving) - as soon as I finished school I delved into college to study Computer Science. I graduated without failing a single subject for 4 years and I was given an oportunity to present my BSc. (Hons) research at International Conference on meaning and knowledge representation, which I had prepared for a year (okay, this is as far as my ego goes, I swear). Whilst studying, I began looking for a job within my field. And finally found one! First, official job in my field. An intership position as a Full - Stack Android developer for MABS. Where I was crafting a prototype financing application for 3 months. As the intership was coming to an end, I was quite bored, since I was unable to get another job straight away. Between a very rare chance of freelancing and the odd exploration trip it felt quite dull. So, I picked up photography, and mostly got inspired by my godfather.While I\'m not expert, I\'m trying  and as Mark Manson once said - "Don’t just sit there. Do something. The answers will follow". So I guess photography is kind of my side hobby for when I travel or feel creative. You can see some of my attempts in the links below! (I\'m in progress of developing a photo portfolio / blog kind of a website). That sums up my story. What about you?';

	var spans = '<span>' + str.split('').join('</span><span>') + '</span>';
	
	$(spans).hide().appendTo('.css-typing').each(function (i) {
		$(this).delay(80 * i).css({
			display: 'inline',
			opacity: 0
		}).animate({
			opacity: 1
		}, 80);
	});
	
	
});


$(window).load(function () {
    // Animate loader off screen
    $(".gooeyHolder").fadeOut("fast");
});


