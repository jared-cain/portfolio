// var $ = require('jquery');
// window.$ = $

window.jQuery = $ = require('jquery');
require('bootstrap/dist/js/bootstrap');
require('jquery-easing');

// WOW cloned from 'amd' branch of wowjs
var WOW = require('./js/WOW/dist/wow.js');

$(document).ready(function(){
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
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

});
