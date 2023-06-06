class UserForOverload {
    skills: string[] = [];

    addSkill(skill:string): void;
    addSkill(skills: string[]): void;
    addSkill(data: string | string[]): void {
        if (typeof data === "string") {
          this.skills.push(data);
        } else if (Array.isArray(data)) {
            data.forEach(el => this.skills.push(el));
        }
    }
}

const overloadingUser = new UserForOverload();
overloadingUser.addSkill('tryhard');
overloadingUser.addSkill(['try', 'hard', 'join', 'exception']);

console.log(overloadingUser);
