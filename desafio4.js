console.log('Bienvenido');

let nombre = 'Brenda';

console.log(`¡Hola, ${nombre}!`);

alert(`¡Hola, ${nombre}!`);

let lenguajeProgramacion = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(lenguajeProgramacion);

let valor1 = 1;
let valor2 = 2;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

let resultado2 = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado2}`);

let edad = prompt('Ingresa tu edad')
if (edad >= 18){
    console.log('Eres mayor de edad');
} else {
    console.log('No eres mayor de edad');
}

let numero = prompt('Ingresa un número');
if(numero >= 0) {
    if(numero == 0) {
        console.log('Es cero');
    } else {
        console.log('Es positivo');
    }
} else {
    console.log('Es negativo');
}


let num = 1;
while(num <= 10){
    console.log(num);
    num++;
}

let nota = 10;
if (nota >= 7){
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}

let aleatorio = Math.random();
console.log(aleatorio);

let aleatorio2 = Math.floor((Math.random() * 10) + 1);
console.log(aleatorio2);

let aleatorio3 = Math.floor((Math.random() * 1000) + 1);
console.log(aleatorio3);