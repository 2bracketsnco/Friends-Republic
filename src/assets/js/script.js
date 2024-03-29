$(window).on("load", function () {

    $(".loader .inner").fadeOut(500, function () {
        $(".loader").fadeOut(750);
    });

    var $container = $('.items');
    $container.isotope({
        filter: '*',
        animationOptions: {
            // duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

})

$(document).ready(function () {

    $('#slides').superslides({
        animation: 'fade',
        //play: 2500,
        pagination: false
    });

    // var typed = new Typed(".typed", {
    //     strings: ["Film Maker", "Editor", "Creator", "Cinematographer", "Director"],
    //     typeSpeed: 50,
    //     loop: true,
    //     startDelay: 400,
    //     showCursor: false

    // });

    // var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function () {

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            })

            countUpFinished = true;


        }


    });

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function () {
        $('#filters .current').removeClass('current');
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        var $container = $('.items');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    $("#navigation li a").click(function (e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 80 }, "slow");

    });

    const port = $("#portfolio");
    const portTop = (port.offset().top - port.outerHeight(true), 600);

    $(window).on("scroll", stickyLogo);

    function stickyLogo() {

        var logo = $("#navigation");

        if ($(window).scrollTop() >= portTop) {
            logo.addClass("nav-dark")
        }
        else {
            logo.removeClass("nav-dark")
        }
    }

    $(document).ready(function(){
        $(".ct-btn-scroll").on('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top - 73
            }, 800, function(){
              //window.location.hash = hash;
            });
          } 
        });
      });

});