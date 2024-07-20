//ejercicio 10
//Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
//Puedes usar este array para probarla:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let sumNumbers = 0;
  for (let i = 0; i < numberList.length; i++) {
    sumNumbers = sumNumbers + numberList[i];
  }
let promedio = sumNumbers / numberList.length;
console.log("El promedio es:", promedio);
}

average(numbers);