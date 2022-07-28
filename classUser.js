class User{
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    
    }
    getUserStats() {
        return `
            name: ${this.name}
            age: ${this.age}
            email: ${this.email}
        `;
    }
}

module.exports = User;