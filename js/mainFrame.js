const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY;
    if (currentScroll > lastScrollTop && currentScroll > 20) {
        // Scrolling down
        navbar.style.top = "-60px";
    } else {
        // Scrolling up
        navbar.style.top = "0";
    }
    lastScrollTop = currentScroll;
});