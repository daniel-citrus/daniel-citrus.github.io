let nav_button = document.getElementById('nav-toggle');

nav_button.addEventListener('click', () => {
    if (nav_button.classList.contains('active')) {
        nav_button.classList.remove('active');
    }
    else {
        nav_button.classList.add('active');
    }
});