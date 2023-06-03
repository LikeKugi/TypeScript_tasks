function Logger(constructor: Function) {
    console.log('Logger: ',constructor.name);
}

function LogMethod(target: Object, key: string, description: PropertyDescriptor) {
    console.log(key, description);
}

@Logger
class Plane {
    id: number;
    constructor(id: number) {
        this.id = id;
    }

    @LogMethod
    getId():number {
        return this.id
    }
}


const pp = new Plane(1);
pp.getId()
