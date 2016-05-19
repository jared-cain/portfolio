window.jQuery = $ = require('jquery');
require('bootstrap/dist/js/bootstrap');
require('velocity-animate/velocity.min');
require('background-blur/dist/background-blur');

module.export = (function(){
    console.log('Avatar section loaded');

    var $avatarEl = $('.avatar');
    var $avatarHolderEl = $('.avatar-holder');
    var avatars = [];

    $avatarEl.each(function(){
        var $avatar = $(this);
        var avatarImage = $avatar.find('img').first().attr('src');
        avatars.push(avatarImage);
        $avatar.click(function(e){
            e.preventDefault();
            $avatarHolderEl.backgroundBlur(avatarImage);
        });
    });
    $avatarHolderEl.backgroundBlur({
        imageURL : avatars[0], // URL to the image that will be used for blurring
        blurAmount : 50, // Amount of blur (higher amount degrades browser performance)
        imageClass : 'avatar-blur' // CSS class that will be applied to the image and to the SVG element,
    });

    console.log('Avatar section finished');
})()
