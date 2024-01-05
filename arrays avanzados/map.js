let array = [1, 2, 3, 4]
let newArray = [...array]
array.push(5)
console.log(array)
console.log(newArray)

const newArrayMap = array.map(item => item)
console.log(newArrayMap)

const users = [
    {name: "John", age: 34},
    {name: "Amy", age: 20},
    {name: "camperCat", age: 10}
]

const names = users.map(item => item.name)
console.log(names)

const numeros = [1,2,3,4,5,6,7,8,9,10]

const numerosPorDos = numeros.map(item => item * 2)
console.log(numerosPorDos)
