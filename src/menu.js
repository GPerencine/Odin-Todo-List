// menu.js
import burgerImg from "./images/burger.svg";
import drinkImg from "./images/drink.svg";
import sideImg from "./images/side.svg";
import dessertImg from "./images/dessert.svg";
export {loadMenu};

const imageMap = {
    burger: burgerImg,
    drink: drinkImg,
    side: sideImg,
    dessert: dessertImg
};

class MenuItem{
    constructor(name, description, price, category) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = imageMap[category] || burgerImg; 
    }
}

const menu = [
    // Burgers
    new MenuItem('Pere Burger', 'Smash patty, cheddar, bacon, caramelized onions, and house sauce on brioche.', 12.90, 'burger'),
    new MenuItem('The Full Stack', 'Double beef, double cheese, bacon, onion rings, jalapeños, and Sriracha mayo on charcoal bun.', 15.50, 'burger'),
    new MenuItem('Boss Fight Burger', 'Triple beef, extra cheddar, pulled pork, crispy onions, and BBQ sauce on sesame bun.', 17.90, 'burger'),

    // Sides
    new MenuItem('Level 1 Fries', 'Small portion of crispy salted fries.', 3.50, 'side'),
    new MenuItem('Level 2 Fries', 'Medium fries tossed in garlic butter, paprika, and herbs.', 5.50, 'side'),
    new MenuItem('Level 3 Fries', 'Large fries loaded with melted cheddar, bacon, and green onions.', 7.90, 'side'),

    // Drinks
    new MenuItem('Pere Drink', 'Mint lemonade with passion fruit syrup over crushed ice.', 4.50, 'drink'),
    new MenuItem('Binary Shake', 'Creamy cookies & cream milkshake with espresso shot and dark chocolate.', 5.00, 'drink'),
    new MenuItem('Overclock Soda', 'Electric green apple citrus soda with energy boost and popping bobas.', 5.50, 'drink'),

    // Desserts
    new MenuItem('Pere Dessert', 'Warm brownie with vanilla ice cream and salted caramel.', 6.50, 'dessert'),
    new MenuItem('404: Cake Not Found', 'Deconstructed berry cheesecake served in a glass.', 7.00, 'dessert'),
    new MenuItem('Respawn Sundae', 'Ice cream sundae topped with popping candy, fudge, and cherry.', 7.50, 'dessert')
];

function loadMenu(){
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    menu.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        card.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.image}" alt="${item.name}" />
            <div class="menu-card-info">
                <p>${item.description}</p>
                <p class="price">$${item.price.toFixed(2)}</p>
            </div>
        `;

        menuContainer.appendChild(card);
    });

    return menuContainer;
}