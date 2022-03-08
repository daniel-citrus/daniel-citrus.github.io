let body = document.querySelector('body');

function enableDarkMode() {
    localStorage.setItem('style', 'dark');
    body.classList.add('dark-theme');
}

function disableDarkMode() {
    localStorage.setItem('style', '');
    body.classList.remove('dark-theme');
}

let style = localStorage.getItem('style');

/* 
    Initiate theme based on localStorage.
    First time visitors will be in light mode.
*/
if (style === 'dark') {
    enableDarkMode();
}

let sw = document.querySelector('.theme-switch');

/* Cause switch to alternate between light and dark */
sw.addEventListener('click', () => {
    style = localStorage.getItem('style');

    if (style === '') {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
});

let nav_button = document.getElementById('nav-toggle');

nav_button.addEventListener('click', () => {
    if (nav_button.classList.contains('active')) {
        nav_button.classList.remove('active');
    }
    else {
        nav_button.classList.add('active');
    }
});