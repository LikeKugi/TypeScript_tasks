class UserService {
  static db: number = 0;
  id: number;
  static getUser(): number {
    return Math.floor(Math.random() * 50)
  }
  constructor() {
    this.id = UserService.db;
    UserService.db += 1;
  }
  public getUser(): number {
    return this.id
  }
}

console.log(UserService.db);
console.log(UserService.getUser())
const newUser = new UserService();
console.log(newUser.getUser())
