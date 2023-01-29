 
        // Crea el numero ramdon
        let numRandom2 = (Math.round(Math.random()*(36-0)+0));
        
        // llama al galery = tablero
        const gallery = document.getElementById('gallery')
        
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
        let ganador = 36;
        let saldo = document.getElementById("saldo").textContent = nuevoSaldo;

        function validar_jugada(){
            let consumoFichas = nuevoSaldo - arraySelecionado.length;
            if (nuevoSaldo <= 0){
                alert("No tienes saldo para jugar")
            }else{
                if ((arraySelecionado.includes(numRandom2) === true)){
                    alert("Eres un Ganador");
                    console.log(nuevoSaldo = consumoFichas + ganador);
                }else{
                    alert("Seguir participando");

                    console.log(consumoFichas); 
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
        location.reload(); 
    }
},1000)






