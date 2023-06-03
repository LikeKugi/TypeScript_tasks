function getCar(name: string) : string
function getCar(name: string, price: number)
function getCar(name: string, price?: number) {
    return price ? `Car: ${name}; Price: ${price}` : `Car: ${name}`
}

console.log(getCar('Flinstones'));
console.log(getCar('Flinstones', 500));