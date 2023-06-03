class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getInfo() {
        return `Car: ${this.name}; Price: ${this.price}`;
    }
}
console.log(new Car('gachivozka', 300).getInfo());
//# sourceMappingURL=classes.js.map