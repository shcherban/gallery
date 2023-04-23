let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.querySelector('.sticky-header').style.top = '0';
    } else {
        document.querySelector('.sticky-header').style.top = '-50px'; // Adjust the height of your header here
    }

    prevScrollPos = currentScrollPos;
}