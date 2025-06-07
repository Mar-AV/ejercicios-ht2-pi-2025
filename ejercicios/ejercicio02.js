import readline from 'readline-sync'

console.log("- Cálculo de Precio con Descuento -");

const precioTexto = readline.question('Ingresa el precio del producto : ');
const descuentoTexto = readline.question('Ingresa el porcentaje de descuento : ');

const precio = parseFloat(precioTexto);
const descuentoPorcentaje = parseFloat(descuentoTexto);

const montoDescuento = precio * (descuentoPorcentaje / 100);
const total = precio - montoDescuento;

console.log(`El precio final con descuento es: Q${total.toFixed(2)}`); 

console.log("\n--- Verificación de Estatura para Juego Mecánico ---");

const estaturaTexto = readline.question('Por favor, ingresa tu estatura en centímetros ');
const estatura = parseInt(estaturaTexto); 
const puedeSubir = (estatura >= 120 && estatura <= 200);

if (puedeSubir) {
    console.log(`Tu estatura es ${estatura} cm. Sí puedes subir al juego mecánico `);
} else {
    console.log(`Tu estatura es ${estatura} cm. No puedes subir al juego mecánico (requiere entre 120 cm y 200 cm).`);
}