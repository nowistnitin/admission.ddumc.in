
$(document).ready(function() {

	
$('.counter1').counterUp({
    delay: 60,
    time: 2050
});

$('.counter2').counterUp({
    delay: 60,
    time: 2050
});

	$('.explore').on('click', function(event) {
		var target = $('.events_heading');
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 70
			}, 1000);
		}
    });
    

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if(scroll >= 400) {
            $(".left-detail").addClass("animationstart");
        } else {
            $(".left-detail").removeClass("animationstart");
        }
    });

 






$('.owl-carousel.home').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	autoplay:true,
	animateOut: 'fadeOut',
	//stagePadding: 110,
    autoplayTimeout:2500,
	//autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.choose').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

$('.inn_progrme').owlCarousel({
    loop:true,
    margin:0,
	items:1,
    nav:false,
	autoplay:true
});

$('.course_outcomes_slider,.area-focus').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
	dots:false,
	autoplay:true,
	navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

$('.ach_studnt_slider, .ach_faculty_slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	items:1,
	dots:false,
	autoplay:true,
	navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>']
});


$('.owl-carousel.Success').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	autoplay:false,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




$('.owl-carousel.Testimonials').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


$('.owl-carousel.Gallery').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


$('.studenttext,.award-slide,.ranking-slide,.alumnitext,.parentstext,.recruitertext').owlCarousel({
    loop:true,
    margin:0,
	items:1,
    nav:false,
	autoplay:false,
    autoplayTimeout:5000
})

$('.studentvideo,.alumnivideo,.parentsvideo,.recruitervideo').owlCarousel({
    loop:true,
    margin:0,
	items:1,
    nav:false,
	autoplay:false,
    autoplayTimeout:5000
})

$('.student').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	dots:false,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.Rankings').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.rnd-slider,.programme_slider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
	dots:true,
	navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
});

$(".news-slider,.event-slider").owlCarousel({
  loop: true,
  autoplay: true,
  items: 1,
  nav: true,
  autoplayHoverPause: true,
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp'
});

$('.marquue_loop').liMarquee({
	direction: 'left',
	loop:true,
	scrolldelay: 0,
	scrollamount:100,
	circular: true,
	drag: true
});


/* var hdr = $('.header-container').height();
$(window).scroll(function () {
var pos = $(this).scrollTop();
if( pos >= hdr ) {		
$('.header-container').addClass('active-hdr');
}		
if( pos <= hdr ) {	
$('.header-container').removeClass('active-hdr');	
}
}); */


$('.Recruiters').owlCarousel({
    loop:true,
    margin:0,
	items:1,
    nav:false,
	autoplay:true,
    autoplayTimeout:5000
})

$('.Recruiters-innner').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
	autoplay:true,
    autoplayTimeout:5000,
	responsive:{
        0:{
            items:1,
			margin:0
        },
        768:{
            items:2
        }
    }
})

$('.mile_drem,.mile_drem2').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	autoplay:true,
    autoplayTimeout:5000,
	responsive:{
        0:{
            items:1,
			margin:0
        },
        768:{
            items:2
        }
    }
})

$(".Rankings-left").owlCarousel({
  loop: true,
  autoplay: true,
  items: 1,
  nav: false,
  autoplayHoverPause: true,
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp'
});

$('.owl-carousel.Leading').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	autoplay:true,
	animateOut: 'fadeOut',
    autoplayTimeout:5000,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.Research,.research-oriented').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
	autoplay:true,
	//animateOut: 'fadeOut',
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.r-and-d').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
	autoplay:true,
	dots:false,
	//animateOut: 'fadeOut',
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})


$('.owl-carousel.recuiter').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
	autoplay:true,
	//animateOut: 'fadeOut',
    autoplayTimeout:5000,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


$('.owl-carousel.element').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})



/* JS for demo only */
/* var colors = ['1abc9c', '2c3e50', '2980b9', '7f8c8d', 'f1c40f', 'd35400', '27ae60'];

colors.each(function (color) {
  $$('.color-picker')[0].insert(
    '<div class="square" style="background: #' + color + '"></div>'
  );
});

$$('.color-picker')[0].on('click', '.square', function(event, square) {
  background = square.getStyle('background');
  $$('.custom-dropdown select').each(function (dropdown) {
    dropdown.setStyle({'background' : background});
  });
}); */

});


/* new WOW().init(); */

$("#registerForm > div.form-custom > div.form-group.label-floating.reg_name_div > div > p").hide();



