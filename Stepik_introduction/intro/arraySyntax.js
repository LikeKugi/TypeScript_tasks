"use strict";
var arr = [];
for (var i = 0; i < 10; i += 1) {
    arr.push(i);
}
arr.push(+'1');
console.log(arr);
var strArr = [];
for (var i = 0; i < 10; i++) {
    strArr.push("".concat(i));
}
console.log(strArr);
var unionArr = [];
for (var i = 0; i < 10; i++) {
    unionArr.push(i % 2 ? i : i.toString());
}
console.log(unionArr);
