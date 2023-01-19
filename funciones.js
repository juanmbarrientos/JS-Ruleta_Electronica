        
        
        let numRandom2 = (Math.round(Math.random()*(36-0)+0));
        const gallery = document.getElementById('gallery')
        const arraySelecionado = [];
        
        // RECARGA LA PÁGINA Y EJECUTA EL RANDOM
        // setInterval("location.reload()",8000);
        
        const nResultados = [];
        const contar = nResultados.push(numRandom2);
        
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

            document.getElementById("resultado").innerHTML=numRandom2;
            localStorage.setItem(nResultados, JSON.stringify(numRandom2));
        }


        
        
        gallery.addEventListener('click', (e) => {
            console.log(e.target.textContent);
            e.target.classList.add("selec");
            const numSelecionado = parseInt(e.target.textContent);
            arraySelecionado.push(numSelecionado);
        })

        function validar_jugada(){
            if ((arraySelecionado.includes(numRandom2) === true)){
                alert("Eres un Ganador")
                // console.log("Eres un ganador");
            }else{
                // console.log("segui participando");
                alert("Seguir participando")
            }
        }
    
        


