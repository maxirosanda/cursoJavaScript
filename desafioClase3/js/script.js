let numeroIngresado = prompt("Ingrese un numero porfavor")
x = parseInt(numeroIngresado)
console.log(numeroIngresado)
console.log(x)
const div = document.querySelector(".info")
n = 0;
while (n < x) {
    div.innerHTML += "<strong class='col-12'>Hola</strong>"
    n++
}