var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log('Logger: ', constructor.name);
}
function LogMethod(target, key, description) {
    console.log(key, description);
}
let Plane = class Plane {
    constructor(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
};
__decorate([
    LogMethod
], Plane.prototype, "getId", null);
Plane = __decorate([
    Logger
], Plane);
const pp = new Plane(1);
pp.getId();
//# sourceMappingURL=decorators.js.map