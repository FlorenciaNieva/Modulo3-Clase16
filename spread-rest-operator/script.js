// -- Ejercicio 1 --
// Completá el siguiente código para obtener el resultado deseado en el console.log, utilizando el operador de propagación (spread operator).
const delUnoAlTres = [1, 2, 3];

const delUnoAlCinco = [...delUnoAlTres, 4, 5];

console.log( delUnoAlCinco ); // [1, 2, 3, 4, 5]

// -- Ejercicio 2 --
// A partir del array dado, creá un nuevo array que empiece con el elemento ‘CERO’ y termine con el elemento ‘CUATRO’
const arrayDado = ['UNO', 'DOS', 'TRES'];

const nuevoArray = ['CERO', ...arrayDado, 'CUATRO'];

console.log( nuevoArray ); // ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO']

// -- Ejercicio 3 --
// Completá el código para poder unir los 3 arrays en uno solo y llegar al resultado esperado utilizando el spread operator.
const frase0 = ['¡', 'Hola'];
const frase1 = [',', ' ', 'Mundo'];
const frase2 = ['!'];

const fraseCompleta = [...frase0, ...frase1, ...frase2]

console.log(fraseCompleta); // ['¡', 'Hola', ',', ' ', 'Mundo', '!']
console.log( fraseCompleta.join('') ); // ¡Hola, Mundo!

// -- Ejercicio 4 --
// Completá el siguiente código para llegar al resultado esperado (respetar orden).
// Quiero obtener un único objeto final con todas las propiedades

const reviews = {
    reviewIMDB: 9,
    reviewFilmAffinity: 8.1
};

const peliInfo = {
    titulo: 'The Dark Knight',
    anio: 2008
};

const pelicula = {
    ...peliInfo, 
    ...reviews
};

console.log(pelicula); // {
//   titulo: 'The Dark Knight',
//   anio: 2008,
//   reviewIMDB: 9,
//   reviewFilmAffinity: 8.1
// }

// -- Ejercicio 5 --
// Completá el siguiente código para llegar al resultado esperado (respetar orden).
// Tengo un objeto con propiedades que representa una alumna
// Las propiedades que contiene son: nombre y apellido
// Queremos agregar la propiedad sabeJS con valor true, y la propiedad edad con el valor 27
// La propiedad sabeJS queremos que esté al principio y la propiedad edad al final

const estudiante = {
    nombre: 'Ada',
    apellido: 'Lovelace'
};

const estudianteJS = {
    sabeJS: true,
    ...estudiante,
    edad: 27,
}

console.log(estudianteJS); // { sabeJS: true, nombre: 'Ada', apellido: 'Lovelace', edad: 27 }

// -- Ejercicio 6 --
// La función Math.max() recibe varios números (distintos parámetros) y retorna el más alto.
// ¿Cómo modificarías el siguiente código para que funcione con distintos arrays sin tener que estar todo el tiempo usando los índices?

console.log( Math.max(4, 7) ); // 7

const tresNums = [9, 4, 7];
console.log( Math.max(tresNums[0], tresNums[1], tresNums[2]) ); // 9
console.log( Math.max(...tresNums) ); // NaN

const masNums = [5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17];
console.log( Math.max(...masNums) ); // NaN, y debería ser 132

// -- Ejercicio 7 --
// Escribir una arrow function llamada agregarNumeroAlArray, que recibe un número como primer parámetro y un array como segundo parámetro
// Utilizando spread operator, la función tiene que retornar un array conteniendo los números del array pasado por parámetro y concatenarle al final el nuevo número.
// Utilizar Spread Operator

const agregarNumeroAlArray = (num, arr) => {
    return [...arr, num]
}
// ejemplo de uso
console.log( agregarNumeroAlArray(1, [6, 19]) ) // [6, 19, 1]
console.log( agregarNumeroAlArray(4, [1, 2, 3]) ) // [1, 2, 3, 4]

// -- Ejercicio 8 --
// Crear la función contarLosArgumentos, que toma un número variable de parámetros y retorna la cantidad de parámetros que tiene
// Utilizar Rest Operator

const contarLosArgumentos = (...params) => {
    return params.length;
}
console.log(contarLosArgumentos('uno', 'dos')); // 2
console.log(contarLosArgumentos('uno', 'dos', 'tres', 'cuatro')); // 4
console.log(contarLosArgumentos(5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17)); // 16

// -- Ejercicio 9 --
// Escribir la función alCuadradoYSumar, que toma un número variable de parámetros, los eleva al cuadrado y retorna la suma de todos
// Utilizar Rest Operator

const alCuadradoYSumar = (...params) => {
    let resultado = 0;
    for (let num of params) {
        resultado += num * num
    }
    return resultado;
}

console.log(alCuadradoYSumar(2, 4, 3)); // 29
console.log(alCuadradoYSumar(1, 2)); // 5

// Ejercicio 10
// Tengo un array con arrays adentro
// Tomando la idea del ejercicio 3, ¿cómo podemos implementar una solución que desde un array de arrays, me retorne un solo array con todos los elementos juntos?

const fraseEnPartes = [
    ['¡', 'Hola'],
    [',', ' ', 'Mundo'],
    ['!']
];

const fraseCompleta1 = [];

for (let array of fraseEnPartes) {
    for (let arr of array) {
        fraseCompleta1.push(arr);
    }
}

console.log( fraseCompleta1.join('') ); // ¡Hola, Mundo!

// -- Ejercicio 11 --
// Escribir la función combinarArrays, que toma un número variable de parámetros
// Cada parámetro es un array
// Combinar todos los arrays y retornar uno solo para obtener el resultado esperado
// Utilizar Rest Operator y Spread operator

const combinarArrays = (...params) => { 
    return [].concat(...params)
}
console.log(combinarArrays([1, 2], [4, 5, 6])); // [1, 2, 4, 5, 6]
console.log(combinarArrays(['a', 'b'])); // ['a', 'b']
console.log(combinarArrays([true, false], [1, 2, 3], ['a'], [{}])) // [true, false, 1, 2, 3, 'a', {}]