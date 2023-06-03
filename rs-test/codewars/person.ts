class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get name(): string {
        return this.firstName + ' ' + this.lastName;
    }

    set name(value:string) {
        [this.firstName, this.lastName] = value.split(' ');
    }

    getName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
