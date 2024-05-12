let man = {
   firstName: "Muhammad",
   lastName: "Haichal"
}

// type inference
// let { firstName, lastName } = man

// inline interface 

let { firstName, lastName }: { firstName: string, lastName: string} = man
console.log(firstName)
