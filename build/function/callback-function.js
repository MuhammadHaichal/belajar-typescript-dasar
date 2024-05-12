"use strict";
function utilsUpperCase(text) {
    let data = text.toUpperCase();
    return data;
}
// ini namanya callback (method)
function sayHello(nama, method) {
    let parse = method(nama);
    console.log(parse);
}
sayHello("muhammad haichal", utilsUpperCase);
