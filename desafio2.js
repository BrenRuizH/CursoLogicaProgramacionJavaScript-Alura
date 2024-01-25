let dia = prompt('¿Qué día de la semana es?');

if (dia === "Sabado" || dia === "Domingo") {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

let numero = prompt('Escribe un número');
if (numero < 0) {
    alert('Tu número es negativo');
} else {
    alert('Tu número es positivo');
}

let puntuacion = prompt('Escribe tu puntuación');
if (puntuacion >= 100) {
    alert('¡Felicidades, has ganado!')
} else {
    alert('¡Intenta nuevamente para ganar!');
}

let saldo = prompt('Ingresa el saldo de tu cuenta');
alert(`El saldo de tu cuenta es de: $${saldo}`);

let nombre = prompt('Ingresa tu nombre');
alert(`Bienvenido/a ${nombre}`);