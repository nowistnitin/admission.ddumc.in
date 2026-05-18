$(document).ready(function () {
    if($('[data-toggle="popover"]').length){
        $('[data-toggle="popover"]').popover();
    }
  
    $("#new_password").keyup(function(){
        validatePassword('new_password', jsVars.policyConfig);
    });
    $("#new_password").focus(function(){
        validatePassword('new_password', jsVars.policyConfig);
    });
    });
  

function validatePassword(field, policyConfig) {
    var validPassword = false;
    var password = $("#" + field).val();
    // extract config safely
    var policyType = policyConfig?.policy_type || 'default';
    var details = policyConfig?.policy_details || {};
    // default rules
    var minLen = 8;
    var maxLen = 32;
    var requireMixedCase = false;
    var requireSpecialChar = false;
    var requireNumber = false;
    // override based on policy type
    switch (policyType) {
        case 'custom':
            minLen = details.min_length || 8;
            requireMixedCase = !!details.require_mixed_case;
            requireSpecialChar = !!details.require_special_characters;
            requireNumber = !!details.require_number;
            break;
        case 'high':
            minLen = 12;
            requireMixedCase = true;
            requireSpecialChar = true;
            requireNumber = true;
            break;
        case 'medium':
            minLen = 12;
            requireMixedCase = true;
            requireSpecialChar = false;
            requireNumber = false;
            break;
        default:
            minLen = 8;
            requireMixedCase = false;
            requireSpecialChar = false;
            requireNumber = false;
            break;
    }
    const passwordInput = document.getElementById(field);
    var validateAdvanced = passwordInput.hasAttribute('data-content');
    if (!validateAdvanced) return true;
    // Reset active state
    $('.ul_new_password li').removeClass("active");
    var hasUpper = /[A-Z]/.test(password);
    var hasLower = /[a-z]/.test(password);
    var hasNumeric = /\d/.test(password);
    var hasSpecial = /[!@#$%^&*()_+\-=\[\]{}`~;':"\\|,.<>\/?]/.test(password);
    // Length validation
    if (password.length >= minLen && password.length <= maxLen) {
        $('.ul_new_password .password_len').addClass("active");
    }
    // Conditional validations
    if (requireMixedCase && hasUpper && hasLower) {
        $('.ul_new_password .capital').addClass("active");
    }
    if (requireNumber && hasNumeric) {
        $('.ul_new_password .numeric').addClass("active");
    }
    if (requireSpecialChar && hasSpecial) {
        $('.ul_new_password .special').addClass("active");
    }
    // Final validation check
    var validLength = password.length >= minLen && password.length <= maxLen;
    var validMixed = !requireMixedCase || (hasUpper && hasLower);
    var validNumeric = !requireNumber || hasNumeric;
    var validSpecial = !requireSpecialChar || hasSpecial;
    validPassword = validLength && validMixed && validNumeric && validSpecial;
    return validPassword;
}

 
 
function setApplicationPassword(){
    var error="";
    $('#span_new_password, #span_confirm_password').hide();
     
    if($('form#createPasswordForm #new_password').val()==""){
        error="Password is required.";
        $('#span_new_password').html(error);
        $('#span_new_password').fadeIn();
    }
    if($('form#createPasswordForm #confirm_password').val()==""){
        error="Confirm password is required.";
        $('#span_confirm_password').html(error);
        $('#span_confirm_password').fadeIn();
    }
     
    if($('form#createPasswordForm #new_password').val().indexOf(' ') >= 0){
        error="Spaces are not allowed";
        $('#span_new_password').html(error);
        $('#span_new_password').fadeIn();
    }
     
    if(error==""){
        if(validatePassword('new_password', jsVars.policyConfig)==false){
           error="Entered Password doesn't meet the criteria mentioned.";
           $('#span_new_password').html(error);
           $('#span_new_password').fadeIn();
        }
        if($('form#createPasswordForm #new_password').val()!=$('form#createPasswordForm #confirm_password').val()){
           error="Passwords do not match. Please try again.\n";
           $('#span_confirm_password').html(error);
           $('#span_confirm_password').fadeIn();
        }
    }
    if(error){
        return false;
    }
    var requestData =  $('#createPasswordForm').serializeArray();
    var requestData = requestData.reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});
    
    var headers = {'X-CSRF-TOKEN': jsVars.csrfToken};
    var beforeSendCallback = function () {
        $("#setPasswordBtn").attr('disabled', 'disabled');
    };
    var completeCallBack = function () { 
        $("#setPasswordBtn").removeAttr('disabled');
    };
    var successCallback = function(response){
        if (response['redirect']){
                location = response['redirect'];
        }
        else if (response['error'] == 'csrf')
        {
            alertPopup('Please refresh the page and try again.','error');
        }
        else if(response['status'] == 0){
            var msg = 'Some thing went wrong, please try again.';
            if(typeof response['Password']!='undefined') {
                var parentDiv = $("form#createPasswordForm #new_password").parents('div.form-group');
                var msg = response['Password'];
            }else if(typeof response['Confirm']!='undefined') {
                var parentDiv = $("form#createPasswordForm #confirm_password").parents('div.form-group');
                var msg = response['Confirm'];
            }else{
                msg = response['message'];
                var parentDiv = $("form#createPasswordForm #confirm_password").parents('div.form-group');
            }
            $(parentDiv).addClass('has-error');
            alertPopup(msg,'error');
        }
        else if(typeof response!== undefined && response['status'] == 200){
            alertPopup(response['message'],'success');
            setTimeout(() => {
                location = jsVars.FULL_URL;
            }, 2000);
        }
        else{
            alertPopup(response['message'],'error');
        }
    };

    var errorCallBack = function (xhr, ajaxOptions, thrownError) {            
        console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        };
    send_ajax_request(jsVars.SetPassword, 'post', requestData, successCallback,completeCallBack,beforeSendCallback,errorCallBack,headers);
    
    return false;
    
 }
 
function showHidePassword(){
    const passwordField = $('#new_password');
    const togglePasswordButton = $('#togglePassword');

    if (passwordField.attr('type') === 'password') {
        passwordField.attr('type', 'text');
        togglePasswordButton.removeClass('fa-eye-slash').addClass('fa-eye');
    } else {
        passwordField.attr('type', 'password');
        togglePasswordButton.removeClass('fa-eye').addClass('fa-eye-slash');
    }
 }
 
 
function showHideConfirmPassword(){
    const passwordField = $('#confirm_password');
    const togglePasswordButton = $('#confirmTogglePassword');

    if (passwordField.attr('type') === 'password') {
        passwordField.attr('type', 'text');
        togglePasswordButton.removeClass('fa-eye-slash').addClass('fa-eye');
    } else {
        passwordField.attr('type', 'password');
        togglePasswordButton.removeClass('fa-eye').addClass('fa-eye-slash');
    }
 }
 
