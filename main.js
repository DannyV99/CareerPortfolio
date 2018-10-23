var specificPropertyParameters = anime({
    targets: '#specificPropertyParameters .el',
    scale: {
        value: 1.4,
        duration: 1900,
        delay: 800,
        easing: 'easeInOutQuart',
    },
    delay: 250 // All properties except 'scale' inherit 250ms delay
});

function onHover() {
    $("#menuImg").attr('src', 'images/daniel2.jpg');
}
function offHover() {
    $("#menuImg").attr('src', 'images/daniel1.jpg');
}

$('#button').click(function () {
    setTimeout(function () {
        window.location.href = 'thankyou.html';
        return false;
    }, 1000);
});