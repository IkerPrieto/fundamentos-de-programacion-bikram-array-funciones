//1
let arrayVacio = [];

//2
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3
let arrayNumerosPares = [0, 2, 4, 6, 8];

//4
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//5
function suma (num1, num2) {
    return num1 + num2
}

suma(29, 82)

//6
function potenciacion (num1, num2) {
    return num1 ** num2
}

potenciacion(13, 6)

//7
function separarPalabras (texto) {
    return texto.split(' ')
}

separarPalabras('Hola que tal?')

//8
function repetirString (texto, num) {
    return texto.repeat(num)
}

repetirString('ja', 8)

//9
function esPrimo (num) {
    if (num % 2 === 0) {
        return false
    } else {
        return true
    }
}

esPrimo(761)

//10
function ordenarArray (numeros) {
    return numeros.sort()
}

ordenarArray([160, 179, 170, 165, 179, 166, 162, 191, 173, 162, 163])

//11
function obtenerPares (numeros) {
    return numeros.filter(numeros => numeros % 2 === 0)
}

obtenerPares([31, 25, 22, 36, 46, 51, 14, 48, 45])

//12
function pintarArray (texto) {
    return '[' + texto.join(', ') + ']'
}

console.log(pintarArray([8, 8, 9, 2, 3, 0, 5, 6, 5]))

//13
function arrayMapi (texto, func) {
    return texto.map(func)
}

console.log(arrayMapi([22, 9, 19, 17], num => num * 2))

//14
function eliminarDuplicados(array) {
    return [...new Set(array)]
}

console.log(eliminarDuplicados([53, 6, 101, 43, 53, 43, 101, 43, 53, 6, 101, 6]))

//15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

//16
let holaMundo = ['Hola', 'Mundo']

//17
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']

//18
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

//19
function multiplicacion (num1, num2) {
    return num1 * num2
}

console.log(multiplicacion(78, 42))

//20
function division (num1, num2) {
    return num1 / num2;
}

console.log(division(171, 126));

//21
function esPar (num) {
    return num % 2 === 0
}

console.log(esPar(128))

//22
function suma(a, b) {
    return a + b
}

function resta(a, b) {
    return a - b
}

function multiplicacion(a, b) {
    return a * b
}

const arrayFunciones = [suma, resta, multiplicacion]

console.log(arrayFunciones[0](11, 17))

//23
function ordenarArray2 (array) {
    return array.sort((a, b) => b-a)
}

console.log(ordenarArray2([209, 256, 240, 247, 251, 232]))

//24
function obtenerImpares (array) {
    return array.filter(num => num % 2 !== 0)
}

console.log(obtenerImpares([17, 28, 105]))

//25
function sumarArray (array) {
    return array.reduce((acumulado, num) => acumulado + num, 0)
}

console.log(sumarArray([27, 18, 34]))

//26
function multiplicarArray (array) {
    return array.reduce((acumulado, num) => acumulado * num, 1)
}

console.log(multiplicarArray([63, 85, 60, 71, 13, 102]))