// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function cambiarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    if (amigoIngresado == '') {
        alert('Ingrese un nombre valido');
    } else {
        sumarALaLista(amigoIngresado)
        amigos.push(amigoIngresado)
        document.querySelector('#amigo').value = ''
    }
    console.log(amigos)
}

function sumarALaLista(amigo){
    const lista = document.querySelector('#listaAmigos')
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = amigo
    lista.appendChild(nuevoAmigo)
    //cambiarTexto('#listaAmigos', amigoIngresado)
}

function sortearAmigo(){
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)]
    cambiarTexto('#resultado', 'El amigo secreto es: ' + amigoSecreto )
}