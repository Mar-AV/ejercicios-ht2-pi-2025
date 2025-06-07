import readline from 'readline-sync';
console.log("--- Programa de Geometría y Saludos ---");

function calcularAreaTriangulo(base, altura) {
    const area = (base * altura) / 2;
    return area; 
}

function mostrarSaludo(nombre) {
    console.log(`Hola, ${nombre}. Bienvenido al sistema de geometría.`);
}

const baseTexto = readline.question('Ingresa el valor de la base del triángulo: ');
const base = parseFloat(baseTexto); 

const alturaTexto = readline.question('Ingresa el valor de la altura del triángulo: ');
const altura = parseFloat(alturaTexto);

if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    console.log("¡Error! La base y la altura deben ser números positivos.");
} else {
    const areaCalculada = calcularAreaTriangulo(base, altura);
    console.log(`El área del triángulo es: ${areaCalculada}`);
}
const nombreUsuario = readline.question('\nIngresa tu nombre para el saludo: ');

mostrarSaludo(nombreUsuario);