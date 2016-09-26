/**
 * Created by marcello on 23/09/16.
 */
$(function() {
    var img1 = $('h1 img'), img2 = $('h2 img'), $window = $(window), factor1 = .6, factor2 = .5;

    var positionImage = function () {
        var windowWidth = $window.width();
        var windowHeight = $window.height();
        var dim = (windowWidth > windowHeight) ? windowHeight * factor1 : windowWidth * factor1;
        img1.width(dim);
        img1.height(dim);

        img2.width(img1.width() * factor2);

        var $box = $('.text-center');

        var boxLeft = windowWidth / 2 - ($box.width() / 2),
            boxTop = (windowHeight / 2 - ($box.height() / 2)) * factor1;

        $box.css({
            position: 'absolute',
            left: boxLeft,
            top: boxTop
        });
    };

    positionImage();
    $window.on('resize', positionImage);

    $('#container').addClass('in');

    var instagramAccessToken = '32090775.9c4fb37.194f3b1384764b0ba528a79f4313b240';

    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    $.ajax({
        url: 'https://api.instagram.com/v1/users/self/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {access_token: instagramAccessToken},
        success: function(response){
            shuffle(response.data);
            var count = response.data.length, index = 0;
            $(".bg").css("background-image", 'url(' + response.data[index++ % count].images.standard_resolution.url + ')');
            setInterval(function () {
                console.log(response.data[index++ % count].images.standard_resolution.url);
                $(".bg").css("background-image", 'url(' + response.data[index++ % count].images.standard_resolution.url + ')');
            }, 10000);
        },
        error: function(response){

        }
    });
});