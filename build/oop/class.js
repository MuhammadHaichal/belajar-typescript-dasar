"use strict";
class Person {
    sayLogin(username) {
        const data = `Selamat Datang ${username}`;
        return data;
    }
    sayLogout(id, username) {
        const data = `${id} logout, Sampai jumpa ${username}`;
        return data;
    }
}
// const haikal = new Person()
// const login = haikal.sayLogin("haichal")
// console.log(login);
// const logout = haikal.sayLogout(2, "haichal")
// console.log()
