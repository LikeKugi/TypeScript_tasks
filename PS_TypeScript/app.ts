interface IUser {
    firstName: string,
    lastName: string,
}

function getFullName<T extends IUser>(userEntity: T): string {
    return `${userEntity.firstName} ${userEntity.lastName}`
}

const user = {
    firstName: 'John',
    lastName: 'Doe',
    city: 'City',
    age: 35,
}

console.log(getFullName(user))
