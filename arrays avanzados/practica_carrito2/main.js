const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
const botones = document.querySelectorAll(".card .btn");

const carritoObjeto = [];

const agregarAlCarrito = (e) => {
  console.log(e.target.dataset.fruta);

  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  const index = carritoObjeto.findIndex((item) => item.id === producto.id);

  console.log(index);

  if (index === -1) {
    carritoObjeto.push(producto);
  } else {
    carritoObjeto[index].cantidad += 1;
  }

  console.log(carritoObjeto);

  pintarCarrito(carritoObjeto);
};

const pintarCarrito = (array) => {
  carrito.textContent = "";

  array.forEach((item) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;

    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
};

botones.forEach((item) => {
  item.addEventListener("click", agregarAlCarrito);
});
