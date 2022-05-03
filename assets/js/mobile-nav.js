let nav_button = document.getElementById('nav-toggle');
let mobile_nav_bar = document.querySelector('.mobile-nav-bar');

nav_button.addEventListener('click', () => {
    nav_button.classList.toggle('active');
    mobile_nav_bar.classList.toggle('active');
});