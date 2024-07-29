$(document).ready(function() {
    function isLoggedIn() {
        return localStorage.getItem('loggedIn') === true;
    }
    function redirectBasedOnLoginStatus() {
        if(isLoggedIn()) {
            window.location.href = 'mainFrame.html';
        }
        else {
            window.location.href = 'login.html'
        }
    }
    //在 index.html 中執行跳轉
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        redirectBasedOnLoginStatus();
    }
    //顯示密碼與否的眼睛
    $('#loginEye').click(function() {
        var passwordField = document.getElementById("passwd");
        var passwordEye = document.getElementById("loginEye");
        if(passwordField.getAttribute("type") == "password") {
            passwordField.setAttribute("type", "text");
            passwordEye.setAttribute("class", "fa-solid fa-eye");
        }
        else {
            passwordField.setAttribute("type", "password");
            passwordEye.setAttribute("class", "fa-solid fa-eye-slash");
        }   
    });
    //登入按鈕
    $('#loginBtn').click(function() {
        $('#spinner').fadeIn();
        setTimeout(function() {            
            $('#spinner').fadeOut();
            window.location.href = 'mainFrame.html';
        }, 1000)
    });
    $('#navBtn').click(function() {
        $('#navBars').slideToggle();
    })
});

