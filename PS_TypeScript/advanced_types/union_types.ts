const unionArr: [string, number] = ['string', 1];
console.log(unionArr);

function logID(id: string | number | boolean): void {
    console.log(id)
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else if (typeof id === 'number'){
        console.log(id.toFixed(5));
    }
}

logID(1);
logID('one');
logID(true);

function logError(err: string | string[]): void {
    if (Array.isArray(err)) {
        console.log(err.join('; '))
    } else {
        console.log(err.toUpperCase());
    }
}
logError('hey');
logError(['hey', 'there']);


function logObject(obj: {a: number} | {b:number}): void {
    if ('a' in obj) {
        console.log(obj.a)
    } else {
        console.log(obj.b);
    }
}

logObject({a: 1})
logObject({b: 2})
