// src/index.js
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import "./styles.css";
import "./images/preview.png";

const content = document.querySelector('#content');
const btnHome = document.querySelector('#home');
const btnMenu = document.querySelector('#menu');
const btnAbout = document.querySelector('#about');

content.appendChild(loadHome());

btnHome.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(loadHome());
})

btnMenu.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(loadMenu());
})

btnAbout.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(loadAbout());
})