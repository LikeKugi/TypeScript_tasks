const arr: number[] = [];
for (let i = 0; i < 10; i+=1) {
    arr.push(i);
}
arr.push(+'1');
console.log(arr)


const strArr: Array<string> = [];
for (let i = 0; i < 10; i++) {
    strArr.push(`${i}`);
}
console.log(strArr);

const unionArr: (string | number)[] = [];
for (let i = 0; i < 10; i++) {
    unionArr.push(i % 2 ? i : i.toString())
}
console.log(unionArr)