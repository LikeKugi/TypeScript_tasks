class Car{
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getInfo(): string {
        return `Car: ${this.name}; Price: ${this.price}`;
    }
}

console.log(new Car('gachivozka', 300).getInfo()) ;
