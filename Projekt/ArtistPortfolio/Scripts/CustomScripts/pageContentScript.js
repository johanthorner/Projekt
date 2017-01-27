$(document).ready(function () {
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    start();
});

$('#brand').on('click', function () {
    start();
});

$('#portfolio').on('click', function () {
    portfolio();
});

$('#contact').on('click', function () {
    contact();
});
$('#cv').on('click', function () {
    cv();
});

function start() {

    $("#pageContent").html("<div><h1>Start</h1></div>");
}

function portfolio() {

    $("#pageContent").html("<div><h1>Portfolio</h1></div>");
}

function contact() {

    $("#pageContent").html("<div><h1>Contact</h1></div>");
}

function cv() {

    $("#pageContent").html("<div><h1>CV</h1></div>");
}

