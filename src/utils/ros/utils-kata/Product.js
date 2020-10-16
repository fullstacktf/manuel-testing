
export class Product {
    constructor(name, lot, price) {
        this.name = name;
        this.lot = lot;
        this.price = price;
    }

    getTotalPrice() {
        return this.lot * this.price;
    }
}