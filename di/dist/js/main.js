/*global jQuery, $ */

//preloader

$(window).on("load", function () {
    $(".preloader").delay(350).fadeOut("slow");
});

$(window).load(function () {
    styleHelper();
    if ($(".horizontal-menu").is(":visible")) {
        $(".menu-side").css("visibility", "hidden");
    }
});

$(document).ready(function () {
    scroll();
    homeVideoBG();
    if ($("div").is("#fullpage")){
        fullpageCreate();}
    menu();
    notify();
    if ($("div").is("#clock")) {
        counter();
    }
    carousel();
    contact();
    subscribe();
    if (window.innerWidth < 767) {
        $('body').addClass("mobile");
    }
    else {
        $('html').css("overflow", "hidden");
        $('body').css("overflow", "hidden");
        $('body').removeClass("mobile");
    }
    hover ();
});

$(window).resize(function () {
    scroll();
    if ($("div").is("#fullpage")) {
        if (window.innerWidth > 767) {
            if (!$("#fullpage").hasClass("fullpage-wrapper") || $("#fullpage").hasClass("fp-destroyed")) {
                $('body').css('opacity', '0');
                location.reload(false);
            }
        }
        else if (!$('body').hasClass("mobile")) {
            location.reload(false);
            $('body').css('opacity', '0');
        }
    }
});


//Animate Start
function animateStart() {
    if (window.innerWidth > 767) {
        $('[data-animation]').each(function () {
            var $this = $(this),
                animation = 'fadeIn',
                outAnimation = 'fadeOut',
                delay = 1;


            if ($this.data('animation')) {
                animation = $this.data('animation');
            }

            if ($this.data('animationDelay')) {
                delay = $this.data('animationDelay');
            }
            if ($this.data('outAnimation')) {
                outAnimation = $this.data('outAnimation');
            }

            if ($this.closest('.section').hasClass('active')) {
                $(".toanimate").css("visibility", "visible");
                $(this).removeClass(outAnimation);
                $this.css('animation-delay', delay + 'ms').addClass('animated').addClass(animation);

            }
        });
    }
}

//Animate Finish
function animateFinish() {
    if (window.innerWidth > 767) {
        var duration = 1;

        $('[data-out-animation]').each(function () {
            var $this = $(this),
                animation = 'fadeIn',
                outAnimation = 'fadeOut',
                delay = 1,
                outDelay = 1;

            if ($this.data('animation')) {
                animation = $this.data('animation');
            }

            if ($this.data('outAnimation')) {
                outAnimation = $this.data('outAnimation');
            }

            if ($this.data('animationDelay')) {
                delay = $this.data('animationDelay');
            }

            if ($this.data('outAnimationDelay')) {
                outDelay = $this.data('outAnimationDelay');
            }

            $this.css('animation-delay', delay + 'ms');

            if ($this.closest('.carousel')) {
                var carousel = $this.closest('.carousel'),
                    carouselAnimate = 'zoomIn';

                if (carousel.data('carouselAnimation')) {
                    carouselAnimate = carousel.data('carouselAnimation');
                }

                $this.removeClass(carouselAnimate);
            }

            if ($this.closest('.section').hasClass('active')) {
                if (outDelay >= duration) {
                    duration = outDelay;
                }

                $this.removeClass(animation).addClass(outAnimation);

                if ($this.data('outAnimationDelay')) {
                    $this.css('animation-delay', outDelay + 'ms');
                } else {
                    $this.css('animation-delay', '1ms');
                }
            } else {
                $this.removeClass(animation).removeClass(outAnimation).removeAttr('style', 'animation-delay');
            }
        });
    }
}

//initialize fullpage plugin

function fullpageCreate() {
    var allIndex = $('#fullpage .section').size();
    var anchors = $('#fullpage').data('anchors');
    if (anchors === undefined) {
        anchors = [];
        for (var i=0; i <= allIndex; i++) {
            anchors.push(i);
        }
    }
    if (window.innerWidth > 767) {
        $('#fullpage').fullpage({
            anchors: anchors,
            menu: "#menu",
            scrollingSpeed: 900,
            scrollBar: true,
            afterLoad: function (anchorLink, index) {
                if (index !== 1) {
                    $(".notify-btn").css("opacity", "0");
                    $(".notify-input").css("opacity", "0");
                    $(".notify-input-btn").css("opacity", "0");
                    $(".subscribe-help-block").css("opacity", "0");
                }
                else {
                    $(".notify-btn").css("opacity", "1");
                    $(".notify-input").css("opacity", "1");
                    $(".notify-input-btn").css("opacity", "1");
                    $(".subscribe-help-block").css("opacity", "1");
                }

                animateStart();
            },
            onLeave: function (index, nextIndex, direction) {
                $(".notify-btn").css("opacity", "0");
                animateFinish();
            }
        });
    }
}

function scroll() {
    if (window.innerWidth > 767) {
        $(".plus").parent().css('display', 'block');
    }
    else {
        $(".menu-content a").click(function (event) {
            event.preventDefault();
            var target = $(this).attr('href');
            var withoutHash = target.substr(1, target.indexOf('#').length);

            if (withoutHash.length) {
                $('html, body').stop().animate({
                    scrollTop: $("div[data-anchor=" + withoutHash + "]").offset().top - 40
                }, 1000);
            }
        });
        $(".plus").parent().css('display', 'none');
        $(".toanimate").css('visibility', 'visible');
    }
}

//initialize menu

function menu() {
    $(".toggle-icon").click(function () {
        $(".menu-content").toggleClass("pushed");
        $(".promo-menu").toggleClass("pushed");
        $(".toggle-icon").toggleClass("pushed-menu");
    });
    $('.menu-content nav a').click(function () {

        if ($('.menu-content').hasClass('pushed') || $(".promo-menu").hasClass("pushed")) {
            $('.menu-content').removeClass('pushed');
            $(".promo-menu").removeClass("pushed");
            $(".toggle-icon").toggleClass("pushed-menu");
        } else {
            $(".toggle-icon").toggleClass("pushed-menu");
            $('.menu-content').addClass('pushed');
            $(".promo-menu").addClass("pushed");
        }
    });

}

//subscribe settings

function subscribe() {
    $('#subscribe').submit(function () {
        $.ajax({
            method: "POST",
            url: "php/subscribe.php",
            data: {
                'email': $('#subscribe input[name="email"]').val()
            },
            success: function (data) {
                $('.subscribe-help-block').html(data);
                $('#subscribe input[name="email"]').val('');
            }
        });

        return false;
    });
}

//initialize contact form

function contact() {
    $('input').blur(function () {
        if ($(this).val() !== '') {
            $(this).addClass('filled');
        }
        else {
            $(this).removeClass('filled');
        }
    });

    $('textarea').blur(function () {
        if ($(this).val() !== '') {
            $(this).addClass('filled');
        }
        else {
            $(this).removeClass('filled');
        }
    });
    $('#contact-form').submit(function () {
        var $this = $(this);
        if ($this.hasClass('send')) {
            return false;
        }

        $this.addClass('send');

        $.ajax({
            method: "POST",
            url: "php/contact.php",
            data: {
                'name': $('#contact-form input[name="name"]').val(),
                'email': $('#contact-form input[name="email"]').val(),
                'msg': $('#contact-form textarea[name="msg"]').val()
            },
            success: function (data) {
                data = JSON.parse(data);

                $('.contact-help-block').html(data.msg);

                if (data.status === 'success') {
                    $('#contact-form input[name="name"]').val('');
                    $('#contact-form input[name="email"]').val('');
                    $('#contact-form textarea[name="msg"]').val('');
                }

                $this.removeClass('send');
            }
        });

        return false;
    });
}

// initialize counter

function counter() {
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializecounter(id, endtime) {
        var counter = document.getElementById(id);
        var daysSpan = counter.querySelector('.days');
        var hoursSpan = counter.querySelector('.hours');
        var minutesSpan = counter.querySelector('.minutes');
        var secondsSpan = counter.querySelector('.seconds');

        function updatecounter() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updatecounter();
        var timeinterval = setInterval(updatecounter, 1000);

    }
    var deadline = $('#clock').data('countdown');
    initializecounter('clock', deadline);
}

// initialize carousels

function carousel() {
    $('.person-carousel').slick({
        adaptiveHeight: true,
        arrows: true,
        fade: true,
        draggable: false,
        touchMove: false,
        prevArrow: '<button type="button" class="person-prev carousel-arrow"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="person-next carousel-arrow"><i class="fa fa-angle-right"></i></button>',

    });

    $('.portfolio-carousel').slick({
        slidesPerRow: 2,
        rows: 2,
        draggable: false,
        touchMove: false,
        prevArrow: '<button type="button" class="portfolio-prev carousel-arrow"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="portfolio-next carousel-arrow"><i class="fa fa-angle-right"></i></button>',
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesPerRow: 1,
                    rows: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesPerRow: 2,
                    rows: 1
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesPerRow: 1,
                    rows: 1
                }
            }
        ]
    });
    $('.portfolio-carousel').magnificPopup({
        image: {
            markup: '<div class="mfp-figure">' +
            '<div class="mfp-close"></div>' +
            '<div class="mfp-img"></div>' +
            '<div class="mfp-bottom-bar">' +
            '<div class="mfp-title"></div>' +
            '</div>' +
            '</div>'
        },
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
        }

    });

    $('.services-carousel').slick({

        slidesPerRow: 2,
        rows: 3,
        draggable: false,
        touchMove: false,
        prevArrow: '<button type="button" class="services-prev carousel-arrow"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="services-next carousel-arrow"><i class="fa fa-angle-right"></i></button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesPerRow: 2,
                rows: 2,
                slidesToShow: 1
            }
        }]

    });
}


function notify() {
    $(window).click(function () {
        $("#subscribe").css("visibility", "hidden");
        $("#subscribe").css("opacity", "0");
        $(".subscribe-help-block").css("visibility", "hidden");
        $(".subscribe-help-block").css("opacity", "0");
        $(".notify-btn").css("visibility", "visible");
        $(".notify-btn").css("opacity", "1");
        $(".notify-input").css("width", "20rem");
    });
    $(".notify-btn").click(function (event) {
        event.stopPropagation();
        $(".notify-btn").css("visibility", "hidden");
        $(".notify-btn").css("opacity", "0");
        $("#subscribe").css("visibility", "visible");
        $("#subscribe").css("opacity", "1");
        $(".subscribe-help-block").css("visibility", "visible");
        $(".subscribe-help-block").css("opacity", "1");
        $(".notify-input").css("width", "23rem");
        setTimeout('$(".notify-input").focus();',40)

    });
    $(".notify-input").click(function (event) {
        event.stopPropagation();
    });
    $(".notify-input-btn").click(function (event) {
        event.stopPropagation();
    });
}

// video BG

function homeVideoBG() {
    $('.video-bg').css('height', $(window).height());

    $.backgroundVideo($('.video-bg'), {
        "align": "centerXY",
        "width": 1280,
        "height": 720,
        "path": "video/",
        "filename": $('.video-bg').data('video'),
        "types": ["mp4", "ogg", "webm"],
        "preload": true,
        "autoplay": true,
        "loop": true
    });

    setTimeout(function () {
        $('#video_background').prop('muted', true);
    }, 1);
}

function styleHelper() {

    $('[data-color]').each(function () {
        $(this).css("color", $(this).data("color"));
    });

    $('[data-border-color]').each(function () {
        $(this).css("border-color", $(this).data("border-color"));
    });

    $('[data-background]').each(function () {
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
    });

    $('[data-background-color]').each(function () {
        $(this).css("background-color", $(this).data("background-color"));
    });

    $('[data-overlay-color]').each(function () {
        $(this).css('z-index', 0);
        if ($(this).find('.overlay').length === 0) {
            $(this).append('<div class="overlay" style="background-color: ' + $(this).data("overlay-color") + '; opacity: ' + $(this).data("overlay-opacity") + '"></div>');
        }
    });
}

function hover () {
    $(".demo a").hover(
        function () {
            $(".demo").css("opacity", ".3");
            $(this).parent().css("opacity", "1");
        },
        function () {
            $(".demo").css("opacity", "1");
        });
}

