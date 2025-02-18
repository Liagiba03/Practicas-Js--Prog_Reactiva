const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("btn-saludo");

const evtSaludar = () =>{
    let textoMensaje = "Hola desde Js con DOM";
    mensaje.innerText = textoMensaje;
}

boton.addEventListener("click", evtSaludar);
