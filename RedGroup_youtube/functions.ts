type TypeReverseReturner = {
    name: string
}

function reverse(name: string): TypeReverseReturner {
    return {name: name.split('').reverse().join('')};
}

console.log(reverse('hey'))

const getReverse = (name: string): TypeReverseReturner => {
    return {name: name.split('').reverse().join('')};
}

console.log(getReverse('named'))

type TypeEchoFunction = (value: string) => TypeReverseReturner

const reverseEcho: TypeEchoFunction = (value) => {
    return {name: value.split('').reverse().join('')};
}

console.log(reverseEcho('some text'))

const sum = (...numbers: number[]): number => {
    return numbers.reduce((a: number, el: number) => a + el, 0);
}

console.log(sum(1, 2, 3, 4, 4))