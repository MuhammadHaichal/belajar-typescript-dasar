"use strict";
class Man {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    info() {
        return `Hello my name is ${this.username} dan password ${this.password}`;
    }
}
const haikal = new Man("haichal", "haichal");
// haikal.info()
class NewMan extends Man {
    constructor() {
        super(...arguments);
        this.data = this.info();
    }
}
const david = new NewMan("david", "david");
// david.info()
