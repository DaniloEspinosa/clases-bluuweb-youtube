const users = [
  { uid: 1, name: "John", age: 34 },
  { uid: 2, name: "Amy", age: 20 },
  { uid: 3, name: "camperCat", age: 10 },
];

// Separar solo los mayores de 30
const mayoresDe30 = users.filter(item => item.age > 30)
console.log(mayoresDe30)

//eliminar algun usuario y devolver un nuevo array
const userFiltrado = users.filter(item => item.uid !== 3 )
console.log(userFiltrado)