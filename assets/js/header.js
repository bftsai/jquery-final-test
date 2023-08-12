$(document).ready(function () {
    $('.headerMenu a').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('ul').slideToggle(1000);
        $(this).parent().siblings().find('ul').slideUp(1000);
        $(this).parent().siblings().find('a').removeClass('active');
    });
});