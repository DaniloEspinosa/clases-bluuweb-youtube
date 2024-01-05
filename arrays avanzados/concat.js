const array1 = ["a", "b", "c"]
const array2 = ["d", "e", "f"]

// Concatena o une arrays, devuelve un nuevo array
const array3 = array1.concat(array2)
console.log(array3)

// Se puede hacer algo similar con syntax spread operator
// Esta manera ademas permite otras posibilidades
const array4 = [...array1, ...array2]
console.log(array4)