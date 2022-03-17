const visor = document.getElementById("visor")
const borrar = document.getElementById("borrar")
borrar.addEventListener("click",()=>{borrarUltimoCaracter()})
const borrarTodo = document.getElementById("borrarTodo")
borrarTodo.addEventListener("click",()=>{LimpiarVisor()})

let operador=""
let resultados = []

const agregarCaracter = (valor) =>{
   operador = operador.concat(valor)
   visor.innerHTML = `${operador}`
}
const borrarUltimoCaracter = ()=>{
  operador = operador.slice(0, -1)
  visor.innerHTML = `${operador}`
}
const LimpiarVisor = ()=>{
    operador = ""
    visor.innerHTML = `${operador}`
  }
const realizarOperacion = (operacion)=>{

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
    resultados.push({Operador:operador,Opetacion:operacion,Resultado:x})
    console.log(resultados)
    operador= `${x}`

}

//Tomar valores de la botonera
botonesNumeros = ["uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","cero"]
for (var i=0; i<botonesNumeros.length; i++) {
    const dato = document.getElementById(botonesNumeros[i])
    dato.addEventListener("click",()=>{agregarCaracter(dato.value)})
 }

botonesOperaciones = ["suma","resta","multiplicacion","divicion","factorial","porcentaje","cubo","cuadrado"]

for (var i=0; i<botonesOperaciones.length; i++) {
    const dato = document.getElementById(botonesOperaciones[i])
    dato.addEventListener("click",()=>{realizarOperacion(dato.value)})
}


