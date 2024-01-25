let numeroSecreto = Math.floor(Math.random() * numMax) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;

console.log(numeroSecreto);
alert('Bienvenido, este es un juego de adivinanzas, por favor indicame entre 1 y que número quieres que juguemos');
let numMax = parseInt(prompt('Número mayor'));

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numMax}, por favor: `));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos ++;
        palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}
