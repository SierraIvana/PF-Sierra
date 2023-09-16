const boton = document.querySelector(".modo_oscuro");
boton.addEventListener('click', () => {
    let modo = localStorage.getItem('modoOscuro');

    if( modo === "si") {
        modo = "no"
    } else {
        modo = "si"
    } 

    localStorage.setItem('modoOscuro', modo)
});