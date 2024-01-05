const arrayNumeros = [
    [0,1],
    [2,3],
    [4,5]
]

//Es un metodo relativamente nuevo y aun no se utiliza mucho ya que no es muy conocido
const arrayFlat = arrayNumeros.flat()
console.log(arrayFlat)

const arrayNumeros2 = [1, 2, [3, 4, [5, 6]]];

// Se le pasa como argumento el numero de niveles de un array que se quieren aplanar
const arrayPlano = arrayNumeros2.flat(); //sin especificar niveles
console.log(arrayPlano);

const arrayPlano2 = arrayNumeros2.flat(2); //indicandole 2 niveles mas interiores
console.log(arrayPlano2);
