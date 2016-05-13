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

    function createEmail() {
        console.log("Email started");
        $.ajax({
            url: "/contact-form",
            type: "POST",
            data: {
                contact_name : $(".contact-name").val(),
                contact_email: $(".contact-email").val(),
                contact_message: $(".contact-message").val()
            },
            error: function(xhr, textStatus, errorThrown){
                console.log(xhr.status + ": " + xhr.responseText + " " + textStatus + " " + errorThrown);
            },
            success: function( json, textStatus,xhr) {

                console.log(json.result);

                alert(`Thank you ${json.name}! We will respond shortly`)!


            }
        });
    }

    $('.contact-form').on('submit', function(event){
        event.preventDefault();
        console.log("Contact form submitted");
        createEmail();
    })

})(jQuery); // End of use strict
