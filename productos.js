
const containerProductos = document.querySelector("#productos-container")
const generarTarjetas = async () => {
    const productos = await traerProductos()
    console.log(productos)
    const cards = productos.reduce((acumuladora, element) => {
        return acumuladora + `
        <div class="tarjeta">
        <div class="item">
        <img src= ${element.imagen || "./img/outOfStock.jpeg"} alt="imagen de producto">
        </div>
        <div class="item-description">
            <h2>${element.producto}</h2>
            <p>${element.descripcion || "no existe descripción para este producto"} </p>
        </div>
        <div>
            <span>$ ${element.precio}</span>
        </div>
        <div>
            <button onclick=AgregarAlStorage(${element.id})>Agregar al Carrito</button>
        </div>
        </div>
            `}, "");

    containerProductos.innerHTML = cards
}

const traerProductos = async () => {
    const respuesta = await fetch('/src/data/productos.json')
    return await respuesta.json()
};

generarTarjetas()
const AgregarAlStorage =async (id) => {
    const productos = await traerProductos()
    const articulo = productos.find(seleccion => seleccion.id === id);

    let carrito = [];
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    if(carritoStorage) {
        carrito = carritoStorage
    }
    carrito.push(articulo)

    localStorage.setItem('carrito', JSON.stringify(carrito))
}
