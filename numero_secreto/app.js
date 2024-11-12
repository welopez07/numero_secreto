let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//control + F buscar en el codigo
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroUsuario === numeroSecreto){//igual en valor y en tipo de dato
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else{
        //el usuario no acertó
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';    
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;    
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros salir de ljeugo 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    }else{    
    //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
   }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}: `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);

}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de nuemros 
    //generar el numero aleatorio 
    //iniaclizar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();

