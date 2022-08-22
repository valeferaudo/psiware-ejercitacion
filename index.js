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
console.log(`El mayor número es el: ${max} y se encuentra en la posición: ${position} del arreglo: `, arr);

// b - Utilizando al menos una función/método
console.log(`El mayor número es el: ${Math.max(...arr)} y se encuentra en la posición: ${arr.indexOf(Math.max(...arr))} del arreglo: `, arr);

// 2- Ordenar la lista
let sortedArray = [...arr];
sortedArray = sortedArray.sort((a,b) => a - b);
console.log(`El arreglo `,arr, ` ordenado de menor a mayor es: `,sortedArray);

// a - Determinar cuales son pares y en qué posición se encuentran
let pares = [];
let indexes = [];
for (let index = 0; index < arr.length; index++) {
    if(arr[index] % 2 === 0){
        pares.push(arr[index]);
        indexes.push(index);
    }
}
console.log(`Los números pares son:${pares} y se encuentran en las posiciones: ${indexes} respectivamente.`);

// Otra forma sin utilizar variables.
for (let index = 0; index < arr.length; index++) {
    if(arr[index] % 2 === 0){
        console.log(`El número: ${arr[index]} es par y se encuentra en la posición: ${index}`)
    }
}

// b - Crear un nuevo arreglo con los número pares únicamente
let newPares = [];
for (let index = 0; index < arr.length; index++) {
    if(arr[index] % 2 === 0){
        newPares.push(arr[index]);
    }
}
console.log(`Los números pares son: `, newPares);