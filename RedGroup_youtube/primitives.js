const firstName = 'John';
console.log(firstName);
const user = {
    name: 'John',
    age: 33,
};
console.log(user);
const address = {
    city: 'SPb',
    country: 'Russia',
};
console.log(address);
let common;
common = Object.assign(Object.assign({}, user), address);
console.log(common);
//# sourceMappingURL=primitives.js.map