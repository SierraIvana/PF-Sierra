
function chequear (e) {
    e.preventDefault()
    const email = document.querySelector("#mail").value
    const nombre = document.querySelector("#name").value
    if( !email.includes("@") || nombre.length <2) {
        alert("Mail o nombre no validos");
    }
}


