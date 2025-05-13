const productos = [
  {
    nombre: "Camisa",
    descripcion: "Camisa hombre manga larga",
    precio: 80,
    imagen: "./img/download.jpg",
    categoria: "Ropa"
  },
  {
    nombre: "Pantalon",
    descripcion: "Pantalón de Jean",
    precio: 100,
    imagen: "./img/images.jpg",
    categoria: "Ropa"
  },
  {
    nombre: "Reloj Deportivo",
    descripcion: "",
    precio: 50,
    imagen: "./img/AC58IND165-2410Z-N01_1.webp",
    categoria: "Accesorios"
  },
  {
    nombre: "Zapatos Casual",
    descripcion: "",
    precio: 120,
    imagen: "./img/men_s_roman_ox.jpg",
    categoria: "Zapatos"
  }
];

let carrito = 0;

function init() {
  mostrarProductos(productos);
}

function mostrarProductos(lista) {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = `
    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      ${lista.map((producto, index) => `
        <div class="col mb-5">
          <div class="card h-100 producto">
            <img class="card-img-top" src="${producto.imagen}" alt="${producto.nombre}" />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">${producto.nombre}</h5>
                <p>${producto.descripcion}</p>
                $${producto.precio.toFixed(2)}
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <button class="btn btn-outline-dark mt-auto" onclick="agregarAlCarrito()">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function agregarAlCarrito() {
  carrito++;
  document.getElementById("contador").innerHTML = carrito;
  alert("Producto agregado al carrito.");
}

function filtrarCategoria() {
  const seleccion = document.getElementById("categoria").value;
  if (seleccion === "todas") {
    mostrarProductos(productos);
  } else {
    const filtrados = productos.filter(p => p.categoria === seleccion);
    mostrarProductos(filtrados);
  }
}


