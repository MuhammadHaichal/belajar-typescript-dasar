interface PersonType {
   id: number,
   username: string,
   password: string

}


let person: PersonType

person = {
   id: 1,
   username: "haikal",
   password: "haikal123"
}

// nested object 

interface Products {
   id: number,
   name: string,
   products: detailProducts,
}

interface detailProducts {
   // product detail 
   price: number
   products_factory: string,
}

let waffers: Products;
waffers = {
   id: 1,
   name: "Tango coklat",
   products: {
      price: 12000,
      products_factory: "PT. OTE orang tua"
   }
}

console.log(waffers)
