const nameInput = document.getElementById("Nombre")
const emailInput = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    /* validacion de caracteres para el mail dominio*/
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nameInput.value.length <6){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    /*console.log(regexEmail.test(emailInput.value))*/
    if (!regexEmail.test(emailInput.value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
            parrafo.innerHTML = "Enviado"
        

    }
})