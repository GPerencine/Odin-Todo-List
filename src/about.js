// about.js
export {loadAbout};

function loadAbout(){
    const aboutContainer = document.createElement('div')
    aboutContainer.classList.add("about-container");
    
    aboutContainer.innerHTML = `
        <div class='about-card'>
            <h3>Our Story</h3>
            <p>
                It all started with: <code>if(hungry) {eat(burger);}</code>. I realized that average fast food just isn't enough. I always want the best burger I can get. So, I decided to compile my passion for burgers into this project. Pere Burger was born in a kitchen that looks just like a dev lab, where recipes are debugged, flavor is optimized, and cold fries are treated like a critical system error.
            </p>
        </div>
        <div class='about-card'>
            <h3>What We Believe</h3>
            <p>
                To us, a burger isn't just fast food. It's an end-to-end experience. From the crispiness of the bacon to the perfection of the melt. We believe in zero latency between the grill and your plate, and always making sure every bite feels like a successful deployment.
            </p>
        </div>
        <div class='about-card'>
            <h3>Contact</h3>
            <p><span>Location:</span> São Paulo, SP - Brazil</p>
            <p><span>Phone:</span> +55 (11) 99999-9999</p>
            <p><span>Email:</span> pere@burger.com</p>
            <p><span>Opening Hours:</span> Monday to Saturday - 08:30 — 23:00</p>
        </div>
        <div class='about-card'>
            <h3>Our Stats</h3>
            <p><span>10+</span> Signature Dishes</p>
            <p><span>20+</span> Years Cooking</p>
            <p><span>500+</span> Commits (Burgers Served)</p>
            <p><span>&infin;</span> Good Memories</p>
        </div>
    `;
    
    return aboutContainer;
}