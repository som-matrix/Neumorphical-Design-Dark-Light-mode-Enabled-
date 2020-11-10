const darkModeToggler = document.querySelector('.switch__toggle');

const themeSwitch = document.querySelector('#theme-link');

//Adding toggling EventListners
darkModeToggler.addEventListener('click',function(){

    if(themeSwitch.getAttribute("href") == 'Light-theme-style.css'){

        //switching it to the dark mode
        themeSwitch.href = 'Dark-theme-style.css';
    } else{
        themeSwitch.href = 'Light-theme-style.css';
    }
});