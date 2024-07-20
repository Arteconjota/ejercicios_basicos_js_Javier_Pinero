//Ejercicio 7
//Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
    numbers = [numberOne, numberTwo];
    numbers.sort((a, b) => b - a);
    console.log(numbers[0]);
}

//Pruebas:
greaterNumber(4, 26);
greaterNumber(14, 15);
greaterNumber(37, 26);

