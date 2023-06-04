function simple_getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`
}

console.log(simple_getFullName('John', 'Doe'));
const simple_getFullNameArrow = (firstName: string, lastName: string):string => `${firstName} ${lastName}`;

console.log(simple_getFullNameArrow('john', 'doe'));
