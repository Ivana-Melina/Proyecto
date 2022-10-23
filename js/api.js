//Consumiendo una API
const aplicacion = document.querySelector('.card-user');
const url = 'https://randomuser.me/api';
fetch(url)
.then(res => res.json()) //pasamos a formato json la respuesta de la API
.then(data => {
    if(data.results['0'].gender === 'male'){
        aplicacion.innerHTML = `
        <img class="img-cards" src="${data.results['0'].picture.large}">
        <h2 class="name-user">${data.results['0'].name.first}</h2>
        `
    }
}) //obtemos los datos del json
.catch(err => console.log(err)) //captura el error si pasa, y te lo muestra