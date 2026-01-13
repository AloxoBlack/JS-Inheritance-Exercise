window.addEventListener("DOMContentLoaded", main);
// window.addEventListener("refresh", ()=>alert("refresco"));

const panelTypes = { SHOP: "Shop", HOME: "Home" }
let panels = [];
let wallet;

function main() {
    panels = document.getElementById("mainContent").childNodes;
    wallet = new moners(moneyDisplay);
    goShop.onclick = () => togglePanel(panelTypes.SHOP);
    goHome.onclick = () => togglePanel(panelTypes.HOME);
    togglePanel(panelTypes.SHOP);

    window.setInterval(() => wallet.add(1), 1000);
}

function togglePanel(panel) {
    disablePanels();
    switch (panel) {
        case panelTypes.HOME:
            home.hidden = false;
            break;
        case panelTypes.SHOP:
            shop.hidden = false;
            break;
    }
    title.innerText = "Petsy! - " + panel;
}
function disablePanels() {
    panels.forEach((p) => {
        p.hidden = true;
    });
}

// this class is basically a wrapper of money and its displays.
class moners {
    #amount;
    display;
    constructor(display) {
        this.display = display;
        if (localStorage.getItem("moners") != null) {
            this.#amount = Number(localStorage.getItem("moners"));
        } else {
            this.#amount = 0;
        }
    }
    get() {
        return this.#amount;
    }
    add(qty) {
        this.#amount += qty;
        this.updateDisplay();
    }
    substract(qty) {
        this.#amount -= qty;
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.innerText = this.#amount;
        localStorage["moners"] = this.#amount;
    }
}