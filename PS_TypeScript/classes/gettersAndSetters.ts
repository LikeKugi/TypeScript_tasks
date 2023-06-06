class UserForGetters {
    private _login: string = '';
    private _password: string = '';

    constructor(login:string, password:string) {
        this.login = login;
        this.password = password;
    }
    get login(): string {
        return this._login;
    }
    set login(value: string){
        this._login = `user-${value.replace(/\s/g, '_')}`;
    }
    get password(): string {
        return this._password.split('').reverse().join('');
    }
    set password(value:string) {
        this._password = value.split('').reverse().join('');
    }
}

const getterUser = new UserForGetters('John Doe Really Login', 'reallyStrongPassword');
console.log(getterUser);
console.log(getterUser.login);
console.log(getterUser.password);
