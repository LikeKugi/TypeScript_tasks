"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
function echo(message) {
    console.log(message);
}
echo('hey there');
var sum = function (x, y) {
    return x + y;
};
console.log(sum(1, 2));
// sum = function (x: string, y: string): number {
//     return x.concat(y).length;
// };
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(1, 2, 3));
console.log(multiply(2, 5));
