let nav_button = document.getElementById('nav-toggle');
let mobile_nav_bar = document.querySelector('.mobile-nav-bar');

nav_button.addEventListener('click', () => {
    if (nav_button.classList.contains('active')) {
        nav_button.classList.remove('active');
        mobile_nav_bar.classList.remove('active');
    }
    else {
        nav_button.classList.add('active');
        mobile_nav_bar.classList.add('active');
    }
});