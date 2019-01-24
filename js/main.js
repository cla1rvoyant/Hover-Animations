$(document).ready(function() {
    $(".sidenav").sidenav({
        preventScrolling: preventScrolling = !1
    }),
    $(".scrollspy").scrollSpy(),
    $(".tooltipped").tooltip(),
    $(".stretch").each(function() {
        $(this).strech_text()
    })
});
$(document).ready(function($) {
    $("body").addClass("loaded")
});

// console.log(scrollBottom);
$(window).scroll(function () {
    var scrollBottom = $(document).height() - $(window).height();
    if ($(window).scrollTop() == scrollBottom) {
        $('.footer').addClass("scrolled");
    } else {
        $('.footer').removeClass("scrolled");
    }
});



//stretch text, append .stretch
$.fn.strech_text = function () {
    var elmt = $(this),
    cont_width = elmt.width(),
    txt = elmt.html(),
    one_line = $('<span class="stretch_it">' + txt + '</span>'),
    nb_char = elmt.text().length,
    spacing = cont_width / nb_char,
    txt_width;
    
    elmt.html(one_line);
    txt_width = one_line.width();
    
    if (txt_width < cont_width) {
        var char_width = txt_width / nb_char,
        ltr_spacing = spacing - char_width + (spacing - char_width) / nb_char;
        
        one_line.css({
            'letter-spacing': ltr_spacing
        });
    } else {
        one_line.contents().unwrap();
        elmt.addClass('justify');
    }
};

//smoothScroll 
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});

/* $(window).on('scroll', function() {
    console.log( $(this).scrollTop() );
    console.log($(document).height());
    console.log($(window).height());
}); */
