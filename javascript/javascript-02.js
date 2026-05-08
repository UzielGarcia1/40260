let resultado = document.getElementById("resultado")
let botones = document.getElementsByTagName("button")

for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key]

        if (boton.className != "operadores")
            boton.addEventListener("click", pintar)
        else
            boton.addEventListener("click", pintar2)
    }
}

function pintar(e) {
    console.log(e.target.innerText)
    resultado.value += e.target.innerText
}

function pintar2(e) {
    console.log(e.target.innerText)

    if (e.target.innerText == "+")
        suma()

    if (e.target.innerText == "-")
        resta()

    if (e.target.innerText == "*")
        multiplicacion()

    if (e.target.innerText == "/")
        division()

    if (e.target.innerText == "=")
        igual()

    if (e.target.innerText == "Ce")
        limpiar()
}

let prm1
let operador

function suma() {
    prm1 = resultado.value
    operador = "+"
    resultado.value = ""
}

function resta() {
    prm1 = resultado.value
    operador = "-"
    resultado.value = ""
}

function multiplicacion() {
    prm1 = resultado.value
    operador = "*"
    resultado.value = ""
}

function division() {
    prm1 = resultado.value
    operador = "/"
    resultado.value = ""
}

function igual() {

    let prm2 = resultado.value

    if (operador == "+")
        resultado.value = parseFloat(prm1) + parseFloat(prm2)

    if (operador == "-")
        resultado.value = parseFloat(prm1) - parseFloat(prm2)

    if (operador == "*")
        resultado.value = parseFloat(prm1) * parseFloat(prm2)

    if (operador == "/")
        resultado.value = parseFloat(prm1) / parseFloat(prm2)
}

function limpiar() {
    resultado.value = ""
    prm1 = ""
    operador = ""
}

