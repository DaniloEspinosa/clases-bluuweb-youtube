const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
  ];

  // Devuelve solo true o false, sirve para comprobar si algo existe dentro de un array
  const existe = users.some(item => item.uid === 2)
  console.log(existe)