import readline from 'readline-sync'

console.log("--- Determinador de Día de la Semana ---");

const numeroDiaTexto = readline.question('Ingresa un número del 1 al 7 para el día de la semana: ');
const numeroDia = parseInt(numeroDiaTexto); 
let nombreDia; 
switch (numeroDia) {
    case 1:
        nombreDia = "Lunes"; 
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break;
    case 7:
        nombreDia = "Domingo"; 
        break;
    default:
        nombreDia = "Día inválido"; 
}
console.log(`El día correspondiente al número ${numeroDia} es: ${nombreDia}`);

console.log("\n--- Interpretación de Semáforo ---");

const color = readline.question('Ingresa un color de semáforo (verde, amarillo, rojo): ').toLowerCase(); 

let mensajeSemaforo; 
switch (color) {
    case 'verde':
        mensajeSemaforo = "Puede avanzar";
        break;
    case 'amarillo':
        mensajeSemaforo = "Pase con precaución";
        break;
    case 'rojo':
        mensajeSemaforo = "Deténgase";
        break;
    default:
        mensajeSemaforo = "Color no válido"; 
}
console.log(`Si el semáforo está en ${color}, significa: ${mensajeSemaforo}`);