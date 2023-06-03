var EnumRoles;
(function (EnumRoles) {
    EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
    EnumRoles[EnumRoles["GUEST"] = 1] = "GUEST";
    EnumRoles[EnumRoles["USER"] = 2] = "USER";
})(EnumRoles || (EnumRoles = {}));
const userTestEnum = {
    role: EnumRoles.USER,
    color: 2 /* EnumColors.blue */,
};
console.log(userTestEnum);
//# sourceMappingURL=Enums.js.map