$(document).ready(function () {
    "use strict";

    const tab = $(".reviews__tabs-name");
    const readMore = $(".reviews__link");
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
        openAlert();
    });

    btnForm.on('click', function (event) {
        if(name.val() && phone.val() || mail.val()) {
            event.preventDefault();
            openAlert();
        } else {
            event.preventDefault();
            alert('Введите верные значения!')
        }
    });

    statusBtn.on('click', closeAlert);
    
    overlay.on('click', closeAlert);
    
    readMore.on('click', function () {
        $(".reviews__tile").css('max-height', 'unset');
        readMore.css('opacity', '0.4');
    });

    tab.on('click', function () {
        tab.removeClass("current");
        $(this).toggleClass("current");
        $(".reviews__tile").toggleClass("active");
        $(".reviews__tile").css('max-height', '470px');
        readMore.css('opacity', '1');
    });
    
    $('.slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

});