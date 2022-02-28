const calcular = document.getElementById("calcular")

const resolver = () =>{

    const visor = document.getElementById("visor")
    const operacion = document.getElementById("operacion").value
    let numero = parseFloat( document.getElementById("numero").value )

    if(operacion === "factorial"){
        
        let x = 1
        while (numero > 1) {
            x = x * numero
            numero = numero - 1
        }
        visor.innerHTML = `${x}`

    }
    else if (operacion === "potencia"){
        let x = numero * numero * numero
        visor.innerHTML = `${x}`
    }else{
        visor.innerHTML = `Operacion no valida`
    }


   
}
calcular.addEventListener("click",resolver)

