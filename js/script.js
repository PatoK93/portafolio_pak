//DOM
const botonEnviar = document.getElementById("btnEnviar");
const inputNombre = document.getElementById("inputNombre");
const inputEmail = document.getElementById("inputEmail");
const inputAsunto = document.getElementById("inputAsunto");
const inputMensaje = document.getElementById("inputMensaje");


//Eventos
botonEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    let esValido = validarCorreo(inputEmail.value);
    if(inputNombre.value == "" || inputEmail.value == "" || inputAsunto.value == "" || inputMensaje.value == "" || esValido == false){
        swal.fire({
            title: 'Error!',
            text: 'Se tienen que llenar todos los campos correctamente para realizar el envío!',
            icon: 'error',
            confirmbuttontext: 'cool'
        });
    }
    else{
        swal.fire({
            title: 'Éxito!',
            text: 'Se envío el mensaje correctamente!',
            icon: 'success',
            confirmbuttontext: 'cool'
        });
        limpiarCampos();
    }
});

inputNombre.addEventListener("keypress", (e) => {
    if (!((e.charCode >= 97 && e.charCode <= 122) || (e.charCode >= 65 && e.charCode <= 90) || (e.charCode == 32))) {
        e.preventDefault();
        swal.fire({
            title: 'Error!',
            text: 'Solo puede ingresar letras mayúsculas, minúsculas y espacios!',
            icon: 'error',
            confirmbuttontext: 'cool'
        });
    }
});

//Funciones

function validarCorreo(correo){
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let esValido = expReg.test(correo);
    return esValido;
}

function limpiarCampos(){
    inputNombre.value = "";
    inputEmail.value = "";
    inputAsunto.value = "";
    inputMensaje.value = "";
}