/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */
"use strict";

function message(title, message, type, delay) {
    if (type == "success") {
        iziToast.success({
            title: title,
            message: message,
            position: 'topRight',
            timeout: delay
        });
    }
    else if (type == "warning") {
        iziToast.warning({
            title: title,
            message: message,
            position: 'topRight',
            timeout: delay
        });
    }
    else if (type == "info") {
        iziToast.info({
            title: title,
            message: message,
            position: 'topRight',
            timeout: delay
        });
    }
    else if (type == "error") {
        iziToast.error({
            title: title,
            message: message,
            position: 'topRight',
            timeout: delay
        });
    }
}
//Simple Sweets
function sweetMessage(title, text, type) {
    if (type == "error") {
        Swal.fire(title, text, 'error');
    }
    else if (type == "success") {
        Swal.fire(title, text, 'success');
    }
    else if (type == "warning") {
        Swal.fire(title, text, 'warning');
    }
    else if (type == "info") {
        Swal.fire(title, text, 'info');
    }
}
//Timer Sweets
function TimerSweet(title, text, icon, time) {
    if (icon == "success") {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: title,
            text: text,
            showConfirmButton: false,
            timer: time
        })
    }
    else if (icon == "error") {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: title,
            text: text,
            showConfirmButton: false,
            timer: time
        })
    }
    else if (icon == "info") {
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: title,
            text: text,
            showConfirmButton: false,
            timer: time
        })
    }
    else if (icon == "warning") {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: title,
            text: text,
            showConfirmButton: false,
            timer: time
        })
    }
}
//Block Special Character
function blockSpecialChar(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
}
//Valid Number
function valid_number(e) {
    var keyCode = e.which;
    if ((keyCode != 8 || keyCode == 32) && (keyCode < 48 || keyCode > 57)) {
        return false;
    }
}
//Validate Email
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
// Catch all events related to changes
$('.float').on('change keyup', function () {
    // Remove invalid characters
    var sanitized = $(this).val().replace(/[^-.0-9]/g, '');
    // Remove non-leading minus signs
    sanitized = sanitized.replace(/(.)-+/g, '$1');
    // Remove the first point if there is more than one
    sanitized = sanitized.replace(/\.(?=.*\.)/g, '');
    // Update value
    $(this).val(sanitized);
});
/*
  FORM VALIDATIONS
*/
function valid_number() {
    return event.charCode >= 48 && event.charCode <= 57;
}
function valid_math_number() {
    return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46;
}
function remove_zeros(elem) {
    var tmp = $(elem).val().replace(/^0+/, '0');
    if (tmp.charAt(0) == 0 && tmp.charAt(1) > 0) {
        tmp = 0;
    }
    $(elem).val(tmp);
}
function remove_dots(elem) {
    var tmp = $(elem).val().replace(/^0+/, '0');
    var val = $(elem).val();
    var fixer = 0;
    if (val.includes(".")) {
        if (tmp.charAt(0) == ".") {
            $(elem).val(fixer);
        }
        // IF DOUBLE MINUS APPEARS
        else if ((val.match(/\./g).length) > 1) {
            $(elem).val(fixer);
        }
    }
}

