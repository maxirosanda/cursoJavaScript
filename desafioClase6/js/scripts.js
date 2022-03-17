const calcular = document.getElementById("calcular")
const resultados = []

class Resultados {
    constructor(resultado, operacion, numero) {
        this._id = Math.floor(Math.random() * (10000000000))
        this.numero = numero
        this.resultado = resultado
        this.operacion = operacion
    }

}

const resolver = () => {

    const visor = document.getElementById("visor")
    const historial = document.getElementById("historial")
    const operacion = document.getElementById("operacion").value
    let numero = parseFloat(document.getElementById("numero").value)
    let item = document.createElement('li');
    let x
    if (operacion === "factorial") {
        let numeroIn = numero
        x = 1
        while (numeroIn > 1) {
            x = x * numeroIn
            numeroIn--
        }
        visor.innerHTML = `${x}`

    } else if (operacion === "potencia") {
        x = Math.pow(numero, 3)
        visor.innerHTML = `${x}`
    } else {
        visor.innerHTML = `Operacion no valida`
    }
    //Almacenar en un array los resultados obtenidos
    resultados.push(new Resultados(x, operacion, numero))
    item.textContent = `Numero ingresado: ${numero}   Operacion: ${operacion}   Resultado: ${x}`
    historial.appendChild(item)
    console.log(resultados)


}
calcular.addEventListener("click", resolver)