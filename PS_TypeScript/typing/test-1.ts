type TypeAddress = {
    city: string,
}

type TypeContacts = {
    phone: string,
    email: string,
    address: TypeAddress,
}

type TypeOffice = {
    officeId: number,
    isOpened: boolean,
    contacts: TypeContacts,
}

const jsonedData = `{
"officeId": 45,
"isOpened": false,
"contacts": {
"phone": "+79100000000",
"email": "my@email.ru",
"address": {
"city": "Москва"
}
}
}`

function getObject(jsonedObj: string = jsonedData): TypeOffice {

    const out: TypeOffice = JSON.parse(jsonedObj);
    console.log(out.isOpened)
    return out;

}

console.log(getObject());
