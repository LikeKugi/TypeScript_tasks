function entity(args) {
    return args;
}
console.log(entity(7));
console.log(entity('7'));
class Channel {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const try1 = new Channel('qwerty');
console.log(try1);
const try2 = new Channel(123);
console.log(try2);
const dot1 = {
    key: 'one',
    value: 1,
};
const dot2 = {
    key: 1,
    value: 'one',
};
console.log(dot1, dot2);
let getNameLength;
getNameLength = (entity) => {
    return entity.length;
};
console.log(getNameLength('terra incognita'));
console.log(getNameLength([1, 2, 3]));
//# sourceMappingURL=generics.js.map