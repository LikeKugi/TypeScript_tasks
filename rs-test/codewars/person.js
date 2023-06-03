"use strict";
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        set: function (value) {
            var _a;
            _a = value.split(' '), this.firstName = _a[0], this.lastName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
