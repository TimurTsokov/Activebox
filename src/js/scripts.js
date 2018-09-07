$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > '650') {
            $('.container-navbar').css({"background-color": "rgba(58, 62, 100, 0.5)"});
            $('nav').css({"padding": "0"});
        } else if ($(window).scrollTop() < '650') {
            $('.container-navbar').css({"background-color": "transparent"});
            $('nav').css({"padding": "1.5rem 0"});
        }
    });

    $('.navbar-nav a').on('click', function () {
        $('.navbar-nav li').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('a[href="#"]').on('click', function (e) {
        e.preventDefault()
    });
    $('.carousel').carousel({
        keyboard: true
    });

});