const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
};

const containerCarrito = document.querySelector("#carrito-container")
const generarTarjetas = async () => {
    const productos = await obtenerCarritoStorage()

    console.log(productos)
    if(productos){
        const cards = productos.reduce((acumuladora, element, index) => {
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
                <button onclick=BorrarItemDelStorage(${index})>Borrar del Carrito</button>
            </div>
            </div>
                `}, "");

        containerCarrito.innerHTML = cards
    } else {
        containerCarrito.innerHTML = "";
    }
}

generarTarjetas()

const BorrarItemDelStorage = async (index) => {
    const carrito = await obtenerCarritoStorage();
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    generarTarjetas();
}

const vaciarCarrito = async () => {
    await localStorage.clear();
    generarTarjetas();
}


