'use strict'
const icon = (document.querySelector('#hamburger') as HTMLElement);
const menu = (document.querySelector('.menu') as HTMLElement);
icon.addEventListener('click', () : void =>{
    console.log("I got clicked");
    menu.classList.toggle('visible');
})