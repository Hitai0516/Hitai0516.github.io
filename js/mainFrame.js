let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY;
    if (currentScroll > lastScrollTop && currentScroll > 30) {
        // Scrolling down
        $('.navbar').css('top', '-90px');
    } else {
        // Scrolling up
        $('.navbar').css('top', '0px');
    }
    lastScrollTop = currentScroll;
});