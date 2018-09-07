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

    $(function () {

        $('.work-link').click(function (e) {

            e.preventDefault();
            var link = $(e.relatedTarget);
            var content = link.data('content');

            $('#exampleModalCenter .modal-body img').attr('src', $(this).find('img').attr('src'));

            $("#exampleModalCenter").modal('show');
            $('this').find('#exampleModalCenterTitle').text(content);

        });

        $('#exampleModalCenter .modal-body img').on('click', function () {
            $("#exampleModalCenter").modal('hide');
            $('this').find('#exampleModalCenterTitle').text(content);
        });

        $('#prev,#next').click(function () {
            var src = $('#exampleModalCenter .modal-body img').attr('src');
            var img = $('.work-link').find('img[data-img="' + src + '"]');
            if (this.id == 'next') {
                var nextsrc = img.parent().parent().next().find('img').attr('data-img');
                if (!nextsrc) {
                    var img = $('.work-link').filter(':first').find('img');
                    nextsrc = img.attr('data-img');
                    // console.log('new:' + nextsrc);
                }
                $('#exampleModalCenter .modal-body img').attr('src', nextsrc);
            } else {
                var prevsrc = img.parent().parent().prev().find('img').attr('data-img');
                if (!prevsrc) {
                    var img = $('.work-link').filter(':last').find('img');
                    prevsrc = img.attr('data-img');
                    // console.log('new:' + prevsrc);
                }
                $('#exampleModalCenter .modal-body img').attr('src', prevsrc);
            }
        });

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