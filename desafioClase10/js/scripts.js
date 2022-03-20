const visor = document.getElementById("visor")
const borrar = document.getElementById("borrar")
borrar.addEventListener("click",()=>{borrarUltimoCaracter()})
const borrarTodo = document.getElementById("borrarTodo")
borrarTodo.addEventListener("click",()=>{LimpiarVisor()})
const guardar = document.getElementById("guardar")
guardar.addEventListener("click",()=>{guardarLocal(operador)})
const guardado = document.getElementById("guardado")
guardado.addEventListener("click",()=>{traerNumeroMemoria()})
let operador=""
let resultados = []

const guardarLocal = (x) => { 
        localStorage.setItem("numeroGuardado", x)
}
const traerNumeroMemoria = () =>{
    operador = `${localStorage.getItem("numeroGuardado")}`
    visor.innerHTML = `${operador}`
}

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
    resultados.push({_id:Math.floor(Math.random()*10000001),Operador:operador,Opetacion:operacion,Resultado:x})
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


