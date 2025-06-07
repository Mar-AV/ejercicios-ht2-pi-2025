import readline from 'readline-sync';
async function ejecutarEjercicio5() {
    console.log("--- Temporizador de Conteo Regresivo ---");

    let segundosTexto = readline.question('¿Cuántos segundos quieres temporizar? ');
    let segundos = parseInt(segundosTexto); 

    if (isNaN(segundos) || segundos < 0) {
        console.log("Número de segundos inválido para el temporizador. Por favor, ingresa un número positivo.");
    } else {
        while (segundos > 0) {
            console.log(`Faltan ${segundos} segundos`);
            await new Promise(resolve => setTimeout(resolve, 1000));
            segundos--; 
        }
        console.log("El tiempo finalizó");
    }

    console.log("\n--- Menú Interactivo ---");

    let opcionMenu;
    do {
        console.log("\n--- Opciones del Menú ---");
        console.log("1. Saludar");
        console.log("2. Mostrar hora actual");
        console.log("3. Salir");

        let opcionTexto = readline.question('Elige una opción (1-3): ');
        opcionMenu = parseInt(opcionTexto); 

        switch (opcionMenu) {
            case 1:
                console.log("¡Hola! Bienvenido de nuevo.");
                break; 
            case 2:
                const ahora = new Date(); 
                console.log(`La hora actual es: ${ahora.toLocaleTimeString()}`); 
                break; 
            case 3:
                console.log("Saliendo del menú. ¡Hasta pronto!");
                break; 
            default:
                console.log("Opción inválida. Por favor, elige un número del 1 al 3.");
        }
    } while (opcionMenu !== 3);
}

ejecutarEjercicio5();