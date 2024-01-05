// El valor devuelto de la funcion reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz, en ultima instancia, se convierte en el valor final, único y resultante.

const numeros = [1, 2, 3, 4, 5]

// Le pasamos un acumulador y un valor actual
const sumarTodos = numeros.reduce((acc, valorActual) => acc + valorActual)
console.log(sumarTodos)

const arrayNumeros = [
    [0,1],
    [2,3],
    [4,5]
]

const soloNumeros = arrayNumeros.reduce((acc, current) => acc.concat(current))
console.log(soloNumeros)

//otra opcion para hacer lo mismo que con reduce SPREAD
const arrayPlano = [].concat(...arrayNumeros)
console.log(arrayPlano)

//otra opcion utilizando el metodo flat()
//Es un metodo relativamente nuevo y aun no se utiliza mucho ya que no es muy conocido
const arrayFlat = arrayNumeros.flat()
console.log(arrayFlat)

