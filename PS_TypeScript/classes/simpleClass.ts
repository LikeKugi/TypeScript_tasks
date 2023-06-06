class User{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const simpleUser = new User('John Doe');
console.log(simpleUser)
simpleUser.name = 'Doe';
console.log(simpleUser)

class Admin {
    role: number;
    name: string;
    constructor();
    constructor(role: number);
    constructor(name: string);
    constructor(initValue?: number | string) {
        if (typeof initValue === "number") {
            this.role = initValue;
            this.name = 'John Doe';
        } else if (typeof initValue === 'string') {
            this.name = initValue;
            this.role = Math.floor(Math.random() * 10000);
        } else {
            this.name = 'Default John';
            this.role = +`99${Math.floor(Math.random() * 10000)}`
        }


    }
}

const simpleAdmin = new Admin(5);
const anotherSimpleAdmin = new Admin('Anakin');
const emptySimpleAdmin = new Admin();

console.log(simpleAdmin, anotherSimpleAdmin, emptySimpleAdmin);
