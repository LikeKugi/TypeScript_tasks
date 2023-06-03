function entity<T> (args: T):T {
    return args
}

console.log(entity(7))

console.log(entity('7'));


class Channel<T> {
    readonly name: T;

    constructor(name: T) {
        this.name = name;
    }

    getName():T {
        return this.name;
    }
}


const try1 = new Channel('qwerty');
console.log(try1);

const try2 = new Channel(123);
console.log(try2);

interface IPair<K, V> {
    key: K,
    value: V,
}

const dot1:IPair<string, number> = {
    key: 'one',
    value: 1,
}

const dot2:IPair<number, string> = {
    key: 1,
    value: 'one',
}

console.log(dot1, dot2);

interface ILength {
    length: number,
}

interface IGetLength {
    <T extends ILength>(entity: T): number
}

let getNameLength: IGetLength;

getNameLength = (entity) => {
    return entity.length;
}

console.log(getNameLength('terra incognita'));
console.log(getNameLength([1, 2, 3]));
