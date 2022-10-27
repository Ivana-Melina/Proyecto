const form = document.getElementById('form');
const button = document.getElementById('submit')
const name = document.getElementById('name');
const email = document.getElementById('email');
const celular = document.getElementById('cell');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const parrafo = document.getElementById('warnings');

const formIsValid ={
    name: false,
    email: false,
    celular: false,
    asunto: false,
    mensaje: false,
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let warnings = '';
    let entrar = false;
    /* validacion de caracteres para el mail dominio*/
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML = ''
    if(nombre.value.length <2){
        warnings += 'El nombre no es valido <br>';
        entrar = true;
    }
    if (!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>';
        entrar = true;
    }
    if(cell.value.length <2){
        warnings += 'El celular no es valido <br>';
        entrar = true;
    }
    if(asunto.value.length >200){
        warnings += 'El asunto debe ser mas corto <br>';
        entrar = true;
    }
    if(mensaje.value.length >300){
        warnings += 'El mensaje debe ser mas corto <br>';
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
            parrafo.innerHTML = 'Enviado';
        

    }
})

