const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
  ];

  // Devuelve solo el indice del elemento buscado, si no encuentra el objeto devuelve -1
  const indice = users.findIndex(item => item.uid === 4)
  console.log(indice)