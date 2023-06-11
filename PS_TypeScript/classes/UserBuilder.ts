class UserBuilder {
  name: string = '';
  setName(name: string): this {
    this.name = name;
    return this;
  }
  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder;
  }
}

class AdminBuilder extends UserBuilder {
  roles: string[] = ['admin'];
}

const res = new UserBuilder().setName('JohnDoe');
console.log(res)
const adm = new AdminBuilder().setName('JohnDoeAdmin');
console.log(adm)

let usrBldr: UserBuilder | AdminBuilder = new UserBuilder().setName('Mac aca Lolo');

if (usrBldr.isAdmin()) {
  console.log(usrBldr)
} else {
  console.log('not admin', usrBldr)
}
