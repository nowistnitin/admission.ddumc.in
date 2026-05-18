
/*---------------------------Common--------------------*/

/* Start js for change text color when focus on input field */
 $('input').each(function(){

    $(this).focus(function(){
      $(this).addClass('input-focus');
    });

    $(this).blur(function(){
      $(this).removeClass('input-focus');
    });

  });
 /* End js for change text color when focus on input field */


/** Link Change JS ***/
(function($) {
  
  "use strict";  
  jQuery('.desktop_withoutpopup').append(jQuery('<div class="anchor-alige text-center"> <a href="#tab2default" data-toggle="tab" aria-expanded="false">EXISTING USER? LOGIN</a>'));
    jQuery('#tab2default .agree-group.fpass').append(jQuery('<a class="registerYet" href="#tab1default" data-toggle="tab" aria-expanded="true">NEW REGISTRATION </a>')); 
    
 
}(jQuery));

jQuery(window).load(function () {
  $('#tab1default > div > a').text("Already Registered? Login");
});

/** End Link Change JS **/

/** Start JS for input Icons **/
$(".icon-class .reg_name_div").prepend('<i class="icon-name"></i>');
$(".icon-class .reg_email_div").prepend('<i class="icon-Email"></i>');
$(".icon-class .merge_field_div").prepend('<i class="icon-phone"></i>');
$(".icon-class .reg_password_div").prepend('<i class="icon-password"></i>');
$(".icon-class .OTP").prepend('<i class="icon-chat"></i>');
$(".icon-class .StateId").prepend('<i class="icon-State--city"></i>');
$(".icon-class .CityId").prepend('<i class="icon-State--city"></i>');
$(".icon-class .reg_university_id_div").prepend('<i class="icon-school"></i>');
$(".icon-class .CourseId").prepend('<i class="icon-course"></i>');
$(".icon-class .reg_specialization_id_div").prepend('<i class="icon-course"></i>');
$(".icon-class #loginForm .form-group:nth-child(2)").prepend('<i class="icon-Email"></i>');
$(".icon-class #loginForm .form-group:nth-child(3)").prepend('<i class="icon-password"></i>');
$(".icon-class #forgotForm .form-group.label-floating").prepend('<i class="icon-Email"></i>');
$(".icon-class #resendVlinkForm > div.form-group.label-floating").prepend('<i class="icon-Email"></i>');
/** End JS for input Icons **/

/** Start bottom to top JS **/
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
/** End bottom to top JS  **/


    /* Start JS for Scroll bottom*/    
               $(function() {
                  $('#scroll-bottom').on('click', function(e) {
                    e.preventDefault();
                    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
                  });
                });
      
    /* End JS for Scroll bottom*/ 

    /* Start JS for Smoth Scroll */ 
      //  $(window).load(function(){ 
          $(document).ready(function(){
              $("#scroll-bottom").on('click', function(event) {
              if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
     
              $('html, body').animate({
              scrollTop: $(hash).offset().top
              }, 800, function(){
             window.location.hash = hash;
           });
          }
        });
       });
      
  /* End JS for Smoth Scroll */





/*------------------------------------End  Common-----------------------*/

$(".merge_field_div button").click(function(){
    $(".show_dial_code_option").toggleClass("show");
  });
$("#ul_dial_codeMobile").click(function(){
    $(".show_dial_code_option").removeClass("show");
  });
jQuery('a[href="#tab2default"]').click(function(){
    jQuery('#tab2default').removeClass('active show').addClass('active show');
    jQuery('#tab2default').siblings().removeClass('active show')
    })

    jQuery('a[href="#tab1default"]').click(function(){
    jQuery('#tab1default').removeClass('active show').addClass('active show');
    jQuery('#tab1default').siblings().removeClass('active show')
    })

    jQuery('a[href="#tab3default"]').click(function(){
    jQuery('#tab3default').removeClass('active show').addClass('active show');
    jQuery('#tab3default').siblings().removeClass('active show')
    })
$('#Name').after("<p style='color:#fff;font-size:12px;margin:0px 1px'>Registered name shall be of candidate's name</p>");

setTimeout(() => {
    setTimeout(() => {
        $('#ul_dial_codeMobile li:contains(+91)').click();

    }, 100);
    $('#ul_dial_codeMobile li:contains(+91)').click();

}, 400);
$("#ul_dial_codeMobile_otp").click(function(){
    $(".show_dial_code_option").removeClass("show");
  });

$("#registerForm > div.form-custom > div.form-group.label-floating.reg_name_div > div > p").hide();