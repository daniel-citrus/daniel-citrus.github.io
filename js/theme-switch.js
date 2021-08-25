/*
    Functions to initialize theme. For first time visitors, the theme will be set to light.
    Once the user updates the theme, their choice will be stored into local storage.
*/
document.addEventListener('DOMContentLoaded', () => {
    initialize_theme_switch();
})

/*
    Initialize event listener for theme switch.
    Loads the appropriate theme based on localStorage.
    Default: Light Setting
*/
function initialize_theme_switch () {
    let light = 'light';
    let dark = 'dark';
    
    /* 
        Initiate theme based on localStorage.
        First time visitors will be in light mode.
    */
    if (get_local_style() === 'null' || get_local_style() === light) {
        set_local_style(light);
        update_theme(light);
    }
    else {
        set_local_style(dark);
        update_theme(dark);
    }

    let sw = document.getElementById('theme-switch');

    /* Cause switch to alternate between light and dark */
    sw.addEventListener('click', () => {
        if (get_local_style() === light) {
            set_local_style(dark);
            update_theme(dark);
        }
        else {
            set_local_style(light);
            update_theme(light);
        }
    })
}

function get_local_style() {
    return localStorage.getItem('style');
}

function set_local_style(style) {
    localStorage.setItem('style', style);
}

/* Update current page's theme based on the theme set in localtorage */
function update_theme(theme) {
    let this_theme = document.getElementById('theme-switcher-id');
    this_theme.href = `../css/themes/${theme}.css`;
}