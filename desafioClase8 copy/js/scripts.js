//const historial = document.getElementById("historial")

let operador=""
//let calculo = []

const agregarCaracter = (valor) =>{
   operador = operador.concat(valor)
   visor.innerHTML = `${operador}`
}
const borrarUltimoCaracter = ()=>{
  operador = operador.slice(0, -1)
  visor.innerHTML = `${operador}`
}
const realizarOperacion = (operacion)=>{
    //let item = document.createElement('li');
    //calculo.push(operador)
    //calculo.push(operacion)
    //item.textContent = `Numero Ingresado: ${operador || "sin valor"}`
    //historial.appendChild(item)
    //let item2 = document.createElement('li');
    //item2.textContent = `Operacion: ${operacion}`
    //historial.appendChild(item2)
    if(operacion === "factorial"){
        let numeroIn = operador
         x = 1
        while (numeroIn > 1) {
            x = x * numeroIn
            numeroIn--
        }
        visor.innerHTML = `${x}`

    }
    if (operacion === "cuadrado"){
        x = Math.pow(operador,2)
       visor.innerHTML = `${x}`
    }

    if (operacion === "cubo"){
        x = Math.pow(operador,3)
       visor.innerHTML = `${x}`
    }

    operador= `${x}`

}


//Tomar valores de la botonera
const uno = document.getElementById("uno")
uno.addEventListener("click",()=>{agregarCaracter(uno.value)})
const dos = document.getElementById("dos")
dos.addEventListener("click",()=>{agregarCaracter(dos.value)})
const tres = document.getElementById("tres")
tres.addEventListener("click",()=>{agregarCaracter(tres.value)})
const cuatro = document.getElementById("cuatro")
cuatro.addEventListener("click",()=>{agregarCaracter(cuatro.value)})
const cinco = document.getElementById("cinco")
cinco.addEventListener("click",()=>{agregarCaracter(cinco.value)})
const seis = document.getElementById("seis")
seis.addEventListener("click",()=>{agregarCaracter(seis.value)})
const siete = document.getElementById("siete")
siete.addEventListener("click",()=>{agregarCaracter(siete.value)})
const ocho = document.getElementById("ocho")
ocho.addEventListener("click",()=>{agregarCaracter(ocho.value)})
const nueve = document.getElementById("nueve")
nueve.addEventListener("click",()=>{agregarCaracter(nueve.value)})
const cero = document.getElementById("cero")
cero.addEventListener("click",()=>{agregarCaracter(cero.value)})

//tomar operacion de la botonera
const suma = document.getElementById("suma")
suma.addEventListener("click",()=>{realizarOperacion(suma.value)})
const resta = document.getElementById("resta")
resta.addEventListener("click",()=>{realizarOperacion(resta.value)})
const multiplicacion = document.getElementById("multiplicacion")
multiplicacion.addEventListener("click",()=>{realizarOperacion(multiplicacion.value)})
const divicion = document.getElementById("divicion")
divicion.addEventListener("click",()=>{realizarOperacion(divicion.value)})
const factorial = document.getElementById("factorial")
factorial.addEventListener("click",()=>{realizarOperacion(factorial.value)})
const porcentaje = document.getElementById("porcentaje")
porcentaje.addEventListener("click",()=>{realizarOperacion(porcentaje.value)})
const cubo = document.getElementById("cubo")
cubo.addEventListener("click",()=>{realizarOperacion(cubo.value)})
const cuadrado = document.getElementById("cuadrado")
cuadrado.addEventListener("click",()=>{realizarOperacion(cuadrado.value)})

const visor = document.getElementById("visor")

const borrar = document.getElementById("borrar")
borrar.addEventListener("click",()=>{borrarUltimoCaracter()})

const calcular = document.getElementById("calcular")
