window.addEventListener("DOMContentLoaded", main);
// window.addEventListener("refresh", ()=>alert("refresco"));

const panelTypes = { SHOP: "Shop", HOME: "Home" }
let panels = [];
let wallet;

function main() {
    panels = document.getElementById("mainContent").childNodes;
    wallet = new moners(moneyDisplay);

    shopManagerInst = new shopManager(shop);
    shopManagerInst.render();

    goShop.onclick = () => togglePanel(panelTypes.SHOP);
    goHome.onclick = () => togglePanel(panelTypes.HOME);
    togglePanel(panelTypes.SHOP);
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