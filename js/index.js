'use strict';
var icon = document.querySelector('#hamburger');
var menu = document.querySelector('.menu');
icon.addEventListener('click', function () {
    console.log("I got clicked");
    menu.classList.toggle('visible');
});
