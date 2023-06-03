interface IUserAge {
    age:number,
}
interface IUser extends IUserAge{
    name: string,
    email: string,
}



const userName: IUser = {
    email: 'tro@lo.lo',
    name: 'John Doe',
    age: 33,
}

console.log(userName)