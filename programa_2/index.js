document.addEventListener("DOMContentLoaded",()=>{
    const formulario = document.getElementById("calculadora");
    const txtResult = document.getElementById("result")

    const eventoFormulario = evt =>{
        evt.preventDefault();
        //TODO: Añadir un evento general al DOM para que se pueda cargar aunque la linea este al inicio del HTML
        // Sumar los nùmeros
        //Agregar evento para cuando este completo el DOM
        //Mostrar el resultado de la suma
    
        const data = new FormData(evt.target);
        //const dataObject = Object.fromEntries(data.entries());
        const num1 = data.get("numero1");
        const num2 = data.get("numero2");

        const result = +num1 + +num2;
        console.log(`num1: ${result}, num2: ${num2}`);
        //txtResult.innerText = result;

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `result ${result}`,
            showConfirmButton: false,
            timer: 2000
          });
          Swal.fire(`Result ${result}`);

    }

    formulario.addEventListener("submit", eventoFormulario);
});