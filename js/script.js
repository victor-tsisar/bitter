$(document).ready(function () {
    "use strict";

    const width = $(document).width();
    const tab = $(".reviews__tabs-name");
    const readMore = $(".reviews__link");
    let visibleReviews = $(".reviews__tile.active").height();
    let moreReviews = visibleReviews;  //  start point
    const btn = $(".btn[type='button']");
    const btnForm = $(".btn[type='submit']");
    const name = $("#name");
    const phone = $('#phone');
    const mail = $('#mail');
    const statusBtn = $(".alert-window__btn");
    const alertWindow = $(".alert-window");
    jQuery('<div/>', {
        "class": 'overlay',
    }).appendTo('body');
    const overlay = $('.overlay');

    if (width <= 768) {
        $('.header__form').appendTo($('.header__promo'));
    }
    
    if (width <= 1440) {
        $('.history__contact').appendTo($('.history__promo'));
    }

    function openAlert() {
        alertWindow.addClass("active");
        overlay.addClass("active");
        $('body').addClass("no-scroll");
    }

    function closeAlert() {
        alertWindow.removeClass("active");
        overlay.removeClass("active");
        $('body').removeClass("no-scroll");
    }

    btn.on('click', function (event) {
        event.preventDefault();
        setTimeout(openAlert, 100);
    });

    btnForm.on('click', function (event) {
        if (name.val() && phone.val() || mail.val()) {
            event.preventDefault();
            setTimeout(openAlert, 100);
        } else {
            event.preventDefault();
            alert('Введите верные значения!')
        }
    });

    statusBtn.on('click', closeAlert);

    overlay.on('click', closeAlert);

    readMore.on('click', function () {
        moreReviews += visibleReviews;        
        $(".reviews__tile").css('max-height', moreReviews);

        let heightReviews = parseInt($(".reviews__tile.active").css('height'));

        if (moreReviews > heightReviews) {
            readMore.css('display', 'none');
            $(".reviews__tile.active").css('background', '#f6f9f3');
            moreReviews = visibleReviews;
        }
    });

    tab.on('click', function () {
        tab.removeClass("current");
        $(this).toggleClass("current");
        $(".reviews__tile").toggleClass("active");
        $(".reviews__tile").css('max-height', '470px');
        $(".reviews__tile.active").css('background',
            'linear-gradient(to top, #c5c5c5, #f6f9f3 15%, #f6f9f3 100%)');
        readMore.css('display', 'block');
    });

    $('.slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    let wow = new WOW(
        {
            animateClass: 'animate__animated',
            offset: 10,
            mobile: true,
        }
    );
    wow.init();
});