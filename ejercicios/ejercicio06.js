import readline from 'readline-sync'; 
console.log("--- Saludos Personalizados a Estudiantes ---");

const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José'];
const notas = [70, 85, 55, 90, 60];

for (let i = 0; i < estudiantes.length; i++) {
    const nombre = estudiantes[i]; 

    if (nombre.endsWith('a')) { 
        console.log(`Bienvenida, ${nombre}`);
    } else {
        console.log(`Bienvenido, ${nombre}`);
    }
}

console.log("\n--- Cálculo del Promedio del Grupo ---");

let sumaNotas = 0; 

for (let i = 0; i < notas.length; i++) {
    sumaNotas = sumaNotas + notas[i]; 
}

const promedio = sumaNotas / notas.length;

console.log(`El promedio del grupo es: ${promedio.toFixed(2)}`); 