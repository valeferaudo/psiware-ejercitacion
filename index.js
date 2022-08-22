// Ejercicio 1: Algoritmos I

let arr = [1,10,6,8,15,2];

// 1 - Determinar cual es el número mayor y en qué posicion de la coleccion se encuentra
// a - Sin función
let max = 0;
let position = 0;
for (let index = 0; index < arr.length; index++) {
    if (max < arr[index]) {
        max = arr[index];
        position = index;
    }
}
console.log(`El mayor número es el: ${max} y se encuentra en la posición: ${position} del arreglo`);