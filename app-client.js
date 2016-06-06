// var $ = require('jquery');
// window.$ = $

window.jQuery = $ = require('jquery');
require('bootstrap/dist/js/bootstrap');
require('./js/jquery.easing.min');
require('./js/avatarSection');
var SnackBar = require('node-snackbar/dist/snackbar');

// WOW cloned from 'amd' branch of wowjs
var WOW = require('wow/dist/wow.min');

$(document).ready(function(){
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.social-hide-a').on('click', function(event){
        // $('.roro').css({'transform': 'rotate(180deg)'});
        event.preventDefault();
        $('ul.social-icons').toggle({
            duration: 800,
            easing: 'easeInOutExpo',
            complete: function(){
                if($('.roro').css('transform') == 'none'){
                    $('.roro').css({'transform': 'rotate(180deg)'});
                } else {
                    $('.roro').css({'transform': ''});
                }
            }
        });
    });

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    new WOW().init();

    $('.contact-form').on('submit', function(event){
        event.preventDefault();
        $.ajax({
            url: "/contact_email",
            type: "POST",
            data: {
                contact_name: $('.contact-name').val(),
                contact_email: $('.contact-email').val(),
                contact_message: $('.contact-message').val()
            }
        }).done(function (data, textStatus, jqXHR){
            console.log("success! : " + textStatus + ' ' + data.message);

            // WRITE SUCCESSFUL EMAIL LOGIC
            document.getElementById("contact-form").reset();

            SnackBar.show({
                text: data.message,
                textColor: "#f05f40",
                pos: "bottom-right",
                actionText: "Thanks!",
                actionTextColor: "#fff",
                backgroundColor: "#333",
                duration: 1500
             });

            console.log("Success finished!");

        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(`Failed! At : ${textStatus}, ${errorThrown}, ${jqXHR}`);

            SnackBar.show({
                text: "Oops...we're sorry! Please try again in a few minutes",
                textColor: "#f05f40",
                pos: "bottom-right",
                actionText: "Thanks!",
                actionTextColor: "#fff",
                backgroundColor: "#333",
                duration: 1500
             });
        });
    });


});

// {
//     animation: true,
//     container: '.contact-submit',
//     content: data.message,
//     delay: { "show": 800, "hide": 200 },
//     html: false,
//     placement: 'right',
//     title: 'Thank you!'
// }
