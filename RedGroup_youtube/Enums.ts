enum EnumRoles{
    ADMIN, GUEST,USER,
}
const enum EnumColors{
    red, green,blue,
}
interface IEnumUser {
    role: EnumRoles,
    color: EnumColors,
}

const  userTestEnum: IEnumUser = {
    role: EnumRoles.USER,
    color: EnumColors.blue,
}

console.log(userTestEnum)