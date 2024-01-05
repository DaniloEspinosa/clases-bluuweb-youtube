const array = ["Cat", "Dog", "Tiger", "Zebra"]

//devuelve un nuevo array cortado
// primer parametro: posición de inicio del corte INCLUIDA
//segundo parametro: posición final del corte NO INCLUIDA
const arrayNuevo = array.slice(1, 3) // devuelve ["Dog", "Tiger"]
console.log(arrayNuevo)