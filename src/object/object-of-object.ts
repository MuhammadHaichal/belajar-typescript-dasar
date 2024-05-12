interface Cars {
   name: string,
   factoryName: string,
   detailCars: {
      [key: string]: detailCars;
   }
}
// detailCars 
interface detailCars {
   priceCars: number,
   dateProducts: Date,

}

let nissanGTR: Cars;
nissanGTR = {
   name: "NISSAN GTR - R35",
   factoryName: "Nissan",
   detailCars: {
      Nissan : {
         priceCars: 900_000_000,
         dateProducts: new Date("2024-05-10")
      }
   }
}

console.log(nissanGTR)
