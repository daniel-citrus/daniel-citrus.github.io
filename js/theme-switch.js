let body = document.querySelector('body');
let sw = document.getElementById('theme-switch');
let style = localStorage.getItem('style');

function enableDarkMode() {
    localStorage.setItem('style', 'dark');
    body.classList.add('dark-theme');
}

function disableDarkMode() {
    localStorage.setItem('style', '');
    body.classList.remove('dark-theme');
}

/* 
    Initiate theme based on localStorage.
    First time visitors will be in light mode.
*/
if (style === 'dark') {
    enableDarkMode();
}

/* Cause switch to alternate between light and dark */
sw.addEventListener('click', () => {
    console.log('hello');
    style = localStorage.getItem('style');

    if (style === '') {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
});