function reverse(name) {
    return { name: name.split('').reverse().join('') };
}
console.log(reverse('hey'));
const getReverse = (name) => {
    return { name: name.split('').reverse().join('') };
};
console.log(getReverse('named'));
const reverseEcho = (value) => {
    return { name: value.split('').reverse().join('') };
};
console.log(reverseEcho('some text'));
const sum = (...numbers) => {
    return numbers.reduce((a, el) => a + el, 0);
};
console.log(sum(1, 2, 3, 4, 4));
//# sourceMappingURL=functions.js.map