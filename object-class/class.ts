class Person {
    constructor (username: string, password: string) {
        this.username = username,
        this.password = password
    }

    sayLogin(): string {
        const data = `Selamat Datang ${this.username}`
        return data;
    } 

    sayLogout(id: number): string {
        const data = `${id} logout, Sampai jumpa ${this.username}`
    }
}

const haikal = new Person("Muhammad Haichal", "haichal123")

const login = haikal.sayLogin()
console.log(login);

const logout = haikal.sayLogout(2)
console.log()