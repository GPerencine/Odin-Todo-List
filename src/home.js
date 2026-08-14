// home.js
export {loadHome};
import gpBurger from "./images/burger-logo.png";

function loadHome(){
    const home = document.createElement('div')
    home.classList.add("home-card");

    home.innerHTML = `
        <h2>Best Burger in the world!</h2>
        <p>since 2006</p>
        <img src="${gpBurger}" alt="Pere Burger"/>
        <p>Order online or visit us!</p>
    `;

    return home;
}