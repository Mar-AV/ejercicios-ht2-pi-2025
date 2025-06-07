import readline from 'readline-sync'

const nombre = readline.question('Ingresa tu nombre: ')
const edadTexto = readline.question('Ingresa tu edad: ')
const activoTexto = readline.question('¿Estás activo? (si/no): ')

const edad = parseInt(edadTexto) 
const activo = activoTexto.toLowerCase() === 'si' 

console.log(`Hola, ${nombre}! Tienes ${edad} años y tu estado activo es: ${activo}.`)

console.log(`Tipo de nombre: ${typeof nombre}`)
console.log(`Tipo de edad: ${typeof edad}`)
console.log(`Tipo de activo: ${typeof activo}`)

let valorNulo = null
let valorNoAsignado 
console.log(`Tipo de valorNulo: ${typeof valorNulo}`) 
console.log(`Tipo de valorNoAsignado: ${typeof valorNoAsignado}`) 
