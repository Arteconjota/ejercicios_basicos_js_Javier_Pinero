//Ejercicio 4

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//Ejercicio 4.1 - Saca a "Tendo" por consola atacando su posición.

console.log(aldeanos[3]);

//Ejercicio 4.2 - Coloca en el último lugar de este array a "Cervasio".

aldeanos.push("Cervasio");

//Ejercicio 4.3 - Cambia el primer elemento de este array por "Bambina".

aldeanos.unshift("Bambina");

//Ejercicio 4.4 - Dale la vuelta a este array.

aldeanos.reverse();

//Ejercicio 4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.

aldeanos.splice(4, 1, "Canela");

//Ejercicio 4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente

const lastName = aldeanos[aldeanos.length - 1];
console.log("El último nombre que aparece en la lista es:", lastName);
