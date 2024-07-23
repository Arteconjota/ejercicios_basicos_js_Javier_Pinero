//Ejercicio 14
//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
//Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
//Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.
//Puedes usar este array para probar tu función:

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];

function repeatCounter(list) {
  list.sort();
  let elem = [];
  let repeat = [];
  let contador = 1;
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] === list[i]) {
      contador++;
    } else {
      elem.push(list[i]);
      repeat.push(contador);
      contador = 1;
    }
  }
  for (let j = 0; j < elem.length; j++) {
    console.log("La palabra", elem[j], "aparece", repeat[j], "vez/veces.");
  }
}

repeatCounter(words);