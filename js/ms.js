/**
 * Created by marcello on 23/09/16.
 */
$(function() {
    var img1 = $('h1 img'), img2 = $('h2 img'), $window = $(window), factor1 = .6, factor2 = .4;

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
});