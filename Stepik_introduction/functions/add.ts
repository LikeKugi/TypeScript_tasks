function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2));

function echo(message: string): void {
    console.log(message);
}

echo('hey there');

let sum: (a: number, b: number) => number = function (x: number, y: number): number {
    return x + y;
}

console.log(sum(1, 2));

// sum = function (x: string, y: string): number {
//     return x.concat(y).length;
// };

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

console.log(multiply(1, 2, 3));
console.log(multiply(2, 5));