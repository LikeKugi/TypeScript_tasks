const firstName:string = 'John';
console.log(firstName);

type TypeUser = {
    name: string,
    age: number,
}

type TypeAddress = {
    city: string,
    country: string,
}
const user:TypeUser = {
    name: 'John',
    age: 33,
}

console.log(user)

const address:TypeAddress = {
    city: 'SPb',
    country: 'Russia',
}

console.log(address)

let common: TypeUser & TypeAddress;

common = {
    ...user, ...address
}

console.log(common);

