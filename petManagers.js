window.addEventListener("DOMContentLoaded", main);

const panelTypes = { SHOP: "Shop", HOME: "Home" }
let panels = [];

function main() {
    panels = document.getElementById("mainContent").childNodes;
    disablePanels();
    goShop.onclick = () => togglePanel(panelTypes.SHOP);
    goHome.onclick = () => togglePanel(panelTypes.HOME);
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