const users = [
  { uid: 1, name: "John", age: 34 },
  { uid: 2, name: "Amy", age: 20 },
  { uid: 3, name: "camperCat", age: 10 },
];

//devuelve el primer elemento sea, array, numero, objeto o el tipo que sea
const amy = users.find((item) => item.uid === 2);
console.log(amy);

//usando desestructuracion para devolver solo un dato del objeto
const { age } = users.find((item) => item.uid === 2);
console.log(age);
