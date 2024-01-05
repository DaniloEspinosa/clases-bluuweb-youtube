const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

// El método split() sirve para separar un string y devuelve un array
// utiliza como separador un caracter o caracteres indicados
//en este caso utilizamos una ,(coma) pero puede ser un espacio, una letra etc o mas caracteres
const arrayMeses = cadenaMeses.split(",")
console.log(arrayMeses)

// Por el contrario join() une un array y devuelve un string,
// tambien utiliza un caracter o caracteres indicados como separador
// en este caso indicamos que sea un " "(espacio).
// por defecto si no indicamos el argumento toma una ","
const nuevoTexto = arrayMeses.join(" ")
console.log(nuevoTexto)