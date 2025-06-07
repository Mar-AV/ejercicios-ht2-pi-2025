import readline from 'readline-sync'

console.log("--- Calculadora de Edad y Clasificación Etaria ---");

const anioNacimientoTexto = readline.question('Ingresa tu AÑO de nacimiento (por ejemplo, 1990): ');
const anioNacimiento = parseInt(anioNacimientoTexto); 

const fechaActual = new Date();
const anioActual = fechaActual.getFullYear();

let edad = anioActual - anioNacimiento;

if (isNaN(anioNacimiento) || anioNacimiento <= 1900 || anioNacimiento > anioActual) {
    console.log("¡Error! Año de nacimiento inválido. Por favor, ingresa un año sensato.");
    edad = -1; 
}

console.log(`Tu edad es: ${edad} años.`);

if (edad < 0) { 
    console.log("No se pudo determinar el grupo etario debido a una edad inválida.");
} else if (edad < 12) {
    console.log("Eres un niño.");
} else if (edad >= 12 && edad <= 17) {
    console.log("Eres un adolescente.");
} else if (edad >= 18 && edad <= 64) {
    console.log("Eres un adulto.");
} else { 
    console.log("Eres un adulto mayor.");
}

console.log("\n--- Clasificación de Nota de Examen ---");

const notaTexto = readline.question('Ingresa tu nota de examen (0 a 100): ');
const nota = parseInt(notaTexto); 

if (isNaN(nota) || nota < 0 || nota > 100) {
    console.log("Nota inválida. Debe ser un número entre 0 y 100.");
} else if (nota >= 90) {
    console.log(`Tu calificación de ${nota} es: A`);
} else if (nota >= 80 && nota <= 89) {
    console.log(`Tu calificación de ${nota} es: B`);
} else if (nota >= 70 && nota <= 79) {
    console.log(`Tu calificación de ${nota} es: C`);
} else if (nota >= 60 && nota <= 69) {
    console.log(`Tu calificación de ${nota} es: D`);
} else { // nota < 60
    console.log(`Tu calificación de ${nota} es: F`);
}