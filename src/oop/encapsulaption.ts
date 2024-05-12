class Man {
   username: string;
   password: string;

   constructor (username: string, password: string) {
      this.username = username
      this.password = password
   }

   protected info(): string {
      return `Hello my name is ${this.username} dan password ${this.password}`
   }
}


const haikal = new Man("haichal", "haichal")
// haikal.info()

class NewMan extends Man {
   data = this.info()
}

const david = new NewMan("david", "david") 
// david.info()
