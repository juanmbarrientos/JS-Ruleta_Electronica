 
        
        // llama al galery = tablero
        const gallery = document.getElementById('gallery')
        
        // Crea el numero ramdon
        let numRandom2 = (Math.round(Math.random()*(36-0)+0));
        
        // donde se pushean los numeros que se guardan del tablero
        const arraySelecionado = [];
        
        //  donde se aloja el que sale
        const nResultados = [];

        // REVISAR
        const contar = nResultados.push(numRandom2);
    
        // Transfiere los numero elegidos al arraySeleccionado.
        let numSelecionado = "";

        // RECARGA LA PÁGINA Y EJECUTA EL RANDOM
        // setInterval("location.reload()",8000);
               
        // FUNCION QUE DA EL RESULTADO DEL NUMERO SALIENTE
        function categorizar(){
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

            // coloca el resultado en pantalla
            document.getElementById("resultado").innerHTML=numRandom2;

            // guarda el resultado en el localStorage, usa nResultados para no sobreescribir
            localStorage.setItem(nResultados, JSON.stringify(numRandom2));
        }      
        
        
        // para seleccionar en el tablero
        gallery.addEventListener('click', (e) => {
            console.log(e.target.textContent);
            e.target.classList.add("selec");
            numSelecionado = parseInt(e.target.textContent);
            arraySelecionado.push(numSelecionado);
        })
        

        let pesos = 100;
        let nuevoSaldo = pesos;
        let saldo = document.getElementById("saldo");
        let resultado_apuesta = document.getElementById("resultado_apuesta");
        let ganador = 36;

        function validar_jugada(){
            let consumoFichas = nuevoSaldo - arraySelecionado.length;
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

// CONTADOR
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
        validar_jugada();
        clearInterval();
        tiempo_pagos();
        galery();
    }
},1000)



let cont_pagos = 15;

function tiempo_pagos(){
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

function galery(){
    gallery.classList.add("gallery_disable");
}



