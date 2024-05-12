function utilsUpperCase(text: string): string {

   let data: string = text.toUpperCase()
   return data
}


// ini namanya callback (method)
function sayHello(nama: string, method: Function): void {
   let parse: string = method(nama)
   console.log(parse)
}

sayHello("muhammad haichal", utilsUpperCase)
