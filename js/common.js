//main navigation

jQuery(document).ready(function($){


// Navbar
$( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
 $('.navbar-nav li .clickD').click(function(e) {
    e.preventDefault();
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.removeClass('toggled');
    } else {
        $this.parent().parent().find('.sub-menu').removeClass('show');
        $this.parent().parent().find('.toggled').removeClass('toggled');
        $this.next().toggleClass('show');
        $this.toggleClass('toggled');
    }
});

$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.width() < 1025) {
        $('html').click(function(){
            $('.navbar-nav li .clickD').removeClass('toggled');
            $('.toggled').removeClass('toggled');
            $('.sub-menu').removeClass('show');
        });
        $(document).click(function(){
            $('.navbar-nav li .clickD').removeClass('toggled');
            $('.toggled').removeClass('toggled');
            $('.sub-menu').removeClass('show');
        });
        $('.navbar-nav').click(function(e){
        e.stopPropagation();
        });
     }
});
// Navbar end

if( $('.counter').length ){
    $('.counter').countUp();
}


$('.our_testimonial_secc_for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  asNavFor: '.our_testimonial_secc_nav'
});
$('.our_testimonial_secc_nav').slick({
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.our_testimonial_secc_for',
  dots: true,
  adaptiveHeight: true,
  focusOnSelect: true
});

$(".main_head .navbar-toggler").click(function(){
    $("body").toggleClass("show_hd_bdy");
});

$(".mobile-menu-close.mobileMenuClose").click(function(){
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("show_hd_bdy");
});

$("a.play").fancybox()

});


