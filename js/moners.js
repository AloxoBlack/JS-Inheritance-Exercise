/**
 * this class is basically a "wrapper" of money and its "displays".
 */
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
        this.updateDisplay();
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