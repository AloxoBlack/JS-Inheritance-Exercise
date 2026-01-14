class shopManager {
    #wallet;
    #shop;
    constructor(wallet, shop) {
        this.#wallet;
        this.#shop;
    }
    SHOPSTRUCTURE = [
        {
            id: "puppy",
            name: "Puppy!!!!1!",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Heterochromia_dog%2C_Struga.jpg/250px-Heterochromia_dog%2C_Struga.jpg",
            description: "A stray dog you encounter and decide to shelter. <br> +1 moner per second",
            effect: function () {
                alert(this.name);
            },
            price: 10
        },
        {
            id: "smol-kitten",
            name: "Smol Kitten",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/250px-Cat03.jpg",
            description: "A tiny kitten that purrs constantly. <br> +2 moner per second",
            effect: function () {

            },
            price: 25
        },
        {
            id: "wheel-menace",
            name: "Wheel Menace",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Mesocricetus_auratus_-pet_hamster-8a.jpg/330px-Mesocricetus_auratus_-pet_hamster-8a.jpg",
            description: "Runs endlessly on a squeaky wheel. <br> +5 moner per second",
            effect: function () {

            },
            price: 75
        },
        {
            id: "capitalist-parrot",
            name: "Capitalist Parrot",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ara_ararauna_Luc_Viatour.jpg/330px-Ara_ararauna_Luc_Viatour.jpg",
            description: "Repeats everything you say, including business advice. <br> +12 moner per second",
            effect: function () {

            },
            price: 200
        },
        {
            id: "tiny-dragon",
            name: "Tiny Dragon",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Komodo_dragon_%28Varanus_komodoensis%29.jpg/330px-Komodo_dragon_%28Varanus_komodoensis%29.jpg",
            description: "Illegal in most regions, profitable in all of them. <br> +50 moner per second",
            effect: function () {

            },
            price: 1000
        },
        {
            id: "quantum-ferret",
            name: "Quantum Ferret",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mustela_putorius_furo_-_18-10-2008.JPG/250px-Mustela_putorius_furo_-_18-10-2008.JPG",
            description: "Exists in multiple places at once. <br> +120 moner per second",
            effect: function () {

            },
            price: 3500
        }

    ]
    render() {
        this.SHOPSTRUCTURE.forEach(element => {
            let shopPet = document.createElement("div");
            shopPet.classList.add("shopPet");
            shopPet.setAttribute("type", element.id);
            shopPetContainer.appendChild(shopPet);

            let petImage = document.createElement("img");
            petImage.src = element.image;
            shopPet.appendChild(petImage);

            let petName = document.createElement("h3");
            petName.innerText = element.name;
            shopPet.appendChild(petName);

            let petDescription = document.createElement("p");
            petDescription.innerHTML = element.description;
            shopPet.appendChild(petDescription);

            let buyButton = document.createElement("button");
            buyButton.innerText = "Buy";
            buyButton.onclick = () => alert("bought " + element.name);
            buyButton.classList.add("shopBuyButton");
            shopPet.appendChild(buyButton);
        });
    }

    buy(item) {
        if (this.SHOPSTRUCTURE[item].price > this.#wallet.get()) {
            alert("Not enough cash!");
            return;
        }
        alert("TODO: IMPLEMENT");
    }
}