class Person  {
 
   sayLogin(username: string): string {
        const data = `Selamat Datang ${username}`
        return data;
    } 

    sayLogout(id: number, username: string): string {
        const data = `${id} logout, Sampai jumpa ${username}`
        return data
    }
}

// const haikal = new Person()

// const login = haikal.sayLogin("haichal")
// console.log(login);

// const logout = haikal.sayLogout(2, "haichal")
// console.log()
