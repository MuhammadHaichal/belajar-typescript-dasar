interface products {
   nameProdudcts: string,
   stokProducts: number,
   details: Array<detail>, 
}

interface detail {
   price: number,
   date: Date
}

let semangka: products;

semangka = {
   nameProdudcts: "semangka",
   stokProducts: 1_000,
   details: [{
      price: 30_000,
      date: new Date()
   }]
}

console.log(semangka)
