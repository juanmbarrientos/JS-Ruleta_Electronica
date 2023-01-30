// REVISAR
// const contar = nResultados.push(numRandom2);

// Donde se pushean los numeros que se guardan del tablero.
const arraySelecionado = [];

// Transfiere los numero elegidos al arraySeleccionado.
let numSelecionado = "";

// Llama a la mesa.
const mesa = document.getElementById('mesa')

// Selección en la mesa.
mesa.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    e.target.classList.add("selec");
    numSelecionado = parseInt(e.target.textContent);
    arraySelecionado.push(numSelecionado);
})

// Contador de tiempo en el juego con mensajes.
let tiempo = document.getElementById("tiempo_restante");
let mensaje = document.getElementById("mensaje_tiempo");
let contenedor_resultado = document.getElementById("contenedor_resultado")
let cont = 30;
setInterval(() =>{
    tiempo.innerHTML = cont--;
    if(cont == 29){
        mensaje.innerHTML = "Hacé tus apuestas";
        mensaje.classList.add("hace_apuestas")
    }else if(cont == 10){
        mensaje.innerHTML = "Te queda poco tiempo para apostar ¡Buena Suerte!";
        mensaje.classList.add("poco_tiempo");
    }else if (cont == 3){
        mensaje.innerHTML = "¡No va más!";
        mensaje.classList.add("no_va_mas");
    }else if (cont == 0){
        categorizar();
        tiempo_pagos();
        validar_jugada();
    }
},1000)

// Tiempo de espera y pagos.
let cont_pagos = 15;
function tiempo_pagos(){
    mesa_disabled();
    clearInterval();

    setInterval(() =>{
            tiempo.innerHTML = cont_pagos--;
            if(cont_pagos == 14){
                mensaje.innerHTML = "No puedes apostar. Tiempo de pagos";
                mensaje.classList.add("tiempo_espera");
            }else if (cont_pagos == 0){
                location.reload();
            }
},1000)
}

// Control de saldos.
let pesos = 100;
let nuevoSaldo = pesos;
let saldo = document.getElementById("saldo");
let resultado_apuesta = document.getElementById("resultado_apuesta");
let ganador = 36;
let numRandom2 = (Math.round(Math.random()*(36-0)+0));

function validar_jugada(){
    let consumoFichas = nuevoSaldo - arraySelecionado.length;
    saldo.innerHTML = consumoFichas;
    if (nuevoSaldo <= 0){
        alert("No tienes saldo para jugar")
    }else{
        if ((arraySelecionado.includes(numRandom2) === true)){
            saldo.innerHTML = (consumoFichas + ganador);
            resultado_apuesta.innerHTML = "Eres un ganador";
        }else{
            saldo.innerHTML = consumoFichas;
            resultado_apuesta.innerHTML = "Seguí participando"
        }
    }
}

// Despues del juego desactiva la mesa.
function mesa_disabled(){
    mesa.classList.add("gallery_disable");
}

// Muestra el resultado y categoriza.
function categorizar(){
    // Llama al numero ganador.
    numRandom2;        
    //  Donde se aloja el que sale.
    const nResultados = [];
    let colorear = document.getElementById("resultado");
    if (numRandom2 >= 1 && numRandom2 <= 36){
        if (numRandom2%2 == 0){
            document.getElementById("categorizado").innerHTML=`El numero es ${numRandom2} ROJO - PAR`;
            colorear.className = "rojo";
        }else{
            document.getElementById("categorizado").innerHTML=`El numero es ${numRandom2} NEGRO - IMPAR`;
            colorear.className = "negro";
        }
    }else{
        numRandom2 == 0;
        document.getElementById("categorizado").innerHTML=`El numero es ${numRandom2} VERDE`;
        colorear.className = "verde";
    };
    // Coloca el resultado en pantalla.
    document.getElementById("resultado").innerHTML=numRandom2;
    // Guarda el resultado en el localStorage, usa nResultados para no sobreescribir.
    localStorage.setItem(nResultados, JSON.stringify(numRandom2));
}      