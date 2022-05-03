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
    First time visitors will be in dark mode.
*/

enableDarkMode();
if (style === '') {
    disableDarkMode();
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