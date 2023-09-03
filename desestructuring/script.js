// -- Ejercicio 1 --
// Crear una función (arrow function) llamada mostrarInfo
// mostrarInfo recibe un objeto y retorna la cadena “Tu nombre completo es ” concatenado con el valor de la propiedad nombre, un espacio y el valor de la propiedad apellido
// Tenés que usar destructuring dentro de la función.

const persona = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };

const mostrarInfo = obj => {
    let {nombre, apellido} = obj;
    return `Tu nombre completo es ${nombre} ${apellido}`;
};

console.log( mostrarInfo(persona) ); // Tu nombre completo es Ada Lovelace

// -- Ejercicio 2 --
// Utilizando destructuring, debemos extraer la propiedad nombre de cada objeto y crear un array en la variable nombres con los 3 nombres que obtuvimos de cada persona.
// 💡 Pista: vamos a tener que crear una variable para cada nombre

const persona1 = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };
const persona2 = { nombre: 'Grace', apellido: 'Hopper', edad: 25 };
const persona3 = { nombre: 'Hedy', apellido: 'Lamarr', edad: 45 };

let {nombre: nombre1} = persona1;
let {nombre: nombre2} = persona2;
let {nombre: nombre3} = persona3;

const nombres = [nombre1, nombre2, nombre3];

console.log( nombres ); // [ 'Ada', 'Grace', 'Hedy' ]

// -- Ejercicio 3 --
// Tenemos un array datosPersonales, con el nombre, apellido, día nacimiento, mes nacimiento, año nacimiento, lugar nacimiento (respetando el orden) de una persona
// Utilizando destructuring, obtener los datos necesarios para completar el siguiente código.
// utilizando destructuring
// extraer las variables nombre, lugar, dia, mes, anio

const datosPersonales = [ 'Ada', 'Lovelace', 10, 12, 1815, 'Londres' ];

let [nombre4, , dia, mes, anio, lugar] = datosPersonales;

console.log(`${nombre4} nació en ${lugar}, el ${dia}/${mes}/${anio}.`); // Ada nació en Londres, el 10/12/1815.

// -- Ejercicio 4 --
// Tenemos un objeto persona, con sus datos personales
// Utilizando destructuring, obtener los datos necesarios para completar el siguiente código.

const persona5 = {
    nombre5: 'Ada',
    apellido: 'Lovelace',
    fechaNacimiento: [10, 12, 1815],
    lugarNacimiento: {
        pais: 'Inglaterra',
        ciudad: 'Londres'
    }
};

let {nombre5, fechaNacimiento, lugarNacimiento} = persona5;
let {ciudad} = lugarNacimiento;
let [dia1, mes1, anio1] = fechaNacimiento;

console.log(`${nombre5} nació en ${lugar}, el ${dia1}/${mes1}/${anio1}.`); // Ada nació en Londres, el 10/12/1815.

// -- Ejercicio 5 --
// Utilizando destructuring, tenemos que extraer la información necesaria para completar el siguiente código.
// usando destructuring, obtener las variables idioma y nombrePersona

const persona6 = ['Ada Lovelace', [ { edad: 30, idioma: 'inglés' } ]];

let [nombrePersona, info] = persona6;
let [infoPersonal]= info;
let {idioma} = infoPersonal;

console.log(`${nombrePersona} habla en ${idioma}.`); // Ada Lovelace habla en inglés.

// -- Ejercicio 6 --
// Utilizando destructuring, tenemos que extraer la información necesaria para completar el siguiente código.

const persona7 = {
    nombre7: 'Ada Lovelace',
    techs: ['JavaScript', 'C++']
};

const persona8 = {
    nombre8: 'Grace Hopper',
    techs: []
};

let {nombre7, techs: lenguajes7} = persona7;
let [techPersona7] = lenguajes7;
let {nombre8, techs: lenguajes8} = persona8;
lenguajes8.push('JS');
let techPersona8 = lenguajes8;
let nombrePersona7 = nombre7;
let nombrePersona8 = nombre8;

console.log(`${nombrePersona7} programa en ${techPersona7}.`); // Ada Lovelace programa en JavaScript.
console.log(`${nombrePersona8} programa en ${techPersona8}.`); // Grace Hopper programa en JS.


// -- Ejercicio 7 --
// ¿Cómo podríamos mejorar la siguiente función utilizando destructuring?
// La función de la solución tiene que ser también una arrow function de una sola línea
const calcularArea = (triangulo) => {
    // const ladoA = triangulo.a;
    // const ladoB = triangulo.b;
    // const ladoC = triangulo.c;
    // return ladoA + ladoB + ladoC;

    let {a, b, c} = triangulo;
    return a + b + c
}

// ejemplos de uso
const triangulo1 = { a: 3, b: 5, c: 7 };
const triangulo2 = { a: 8, b: 2, c: 3 };

console.log( calcularArea(triangulo1) ); // 15
console.log( calcularArea(triangulo2) ); // 13

// -- Ejercicio 8 --
// Crear una función (arrow function) llamada mostrarPrimerDisco que recibe un objeto y retorna la cadena "El primer disco de BANDA es PRIMERDISCO"
// Tenés que usar destructuring dentro de la función, y tiene que tener el return implícito

const banda = {
 nombre: 'Nirvana',
 discos: [
   { nombre: 'Bleach' },
   { nombre: 'Nevermind' },
   { nombre: 'Incesticide' }
 ]
};

const mostrarPrimerDisco = (obj) => {
    let {nombre : nombreBanda, discos} = banda;
    let [primerDisco] = discos;
    let {nombre} = primerDisco;
    return `El primer disco de ${nombreBanda} es ${nombre}`;
}

console.log( mostrarPrimerDisco(banda) ); // El primer disco de Nirvana es Bleach

// -- Ejercicio 9 --
// Crear una una arrow function llamada estaVacio que recibe un array y retornar true si no tiene ningún elemento, o false si tiene algún elemento
// Es necesario utilizar destructuring y no hacer uso de la propiedad length de los arrays.

const estaVacio = (arr) => {
    let [array] = arr;
    return array === undefined;
};

console.log(estaVacio([])); //=> true

console.log(estaVacio([0])); //=> false

console.log(estaVacio([[]])); //=> false