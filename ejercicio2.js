//Ejercicio 2.1
const jedi = {nombre: "Luke Skywalker", edad: 19};
jedi.edad = 25;

console.log(jedi.nombre, "ha cumplido años, ahora tiene", jedi.edad);

//Ejercicio 2.2
const princess = {nombre: "Leia", apellido: "Organa", edad: 20};

console.log("Soy", princess.nombre,  princess.apellido, ", tengo", princess.edad,  "años y soy una princesa de Alderaan");

//Ejercicio 2.3
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

sumPrices = sable1.precio + sable2.precio;
console.log("Los dos sables tienen un precio total de", sumPrices);

//Ejercicio 2.4
let precioBaseGlobal = 10000;

precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Los precios de las naves han cambiado. Ahora", nave1.nombre, "cuesta", nave1.precioFinal, "y", nave2.nombre, "es", nave2.precioFinal);

