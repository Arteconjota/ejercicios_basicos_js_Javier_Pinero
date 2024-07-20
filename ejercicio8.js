//Ejercicio 8
//Completa la función que tomando un array de strings como argumento devuelva el más largo, 
//en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
    let longNumber = []
    for (let i = 0; i < stringList.length; i++) {
        longNumber.push(stringList[i].length);
    }
    let max = Math.max(...longNumber);
    let indice = longNumber.indexOf(max);
    console.log("La palabra más larga es:", stringList[indice]);
}
       


findLongestWord(avengers);