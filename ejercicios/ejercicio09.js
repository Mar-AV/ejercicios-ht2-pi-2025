"use strict";

const usuarioActual = {
    nombre: "Ana Martínez",
    edad: 28,
    activo: true,
    correo: "ana.martinez@example.com"
};
console.log("--- Información del Usuario Actual ---");
console.log(usuarioActual);

function loguear(info) {
    const correoValido = info.correo.includes('@') && info.correo.includes('.');
    const claveValida = info.clave.length >= 6;
    const recaptchaValido = info.recaptcha === true; 
    console.log(`\n--- Intento de Login para: ${info.correo} ---`);
    if (correoValido && claveValida && recaptchaValido) {
        console.log('Acceso permitido');
    }
    else {
        console.log('Datos inválidos');
        if (!correoValido)
            console.log("  - Razón: El correo no es válido (falta @ o .)");
        if (!claveValida)
            console.log("  - Razón: La clave es demasiado corta (mínimo 6 caracteres)");
        if (!recaptchaValido)
            console.log("  - Razón: El recaptcha no fue verificado");
    }
}
console.log("\n--- Pruebas de la Función Login ---");
const datosLoginValidos = {
    correo: 'usuario@dominio.com',
    clave: 'password123',
    recaptcha: true
};
loguear(datosLoginValidos);
const datosLoginClaveCorta = {
    correo: 'prueba@otro.org',
    clave: '123',
    recaptcha: true
};
loguear(datosLoginClaveCorta); 
const datosLoginRecaptchaFalso = {
    correo: 'test@example.net',
    clave: 'securepwd',
    recaptcha: false 
};
loguear(datosLoginRecaptchaFalso);
const datosLoginCorreoInvalido = {
    correo: 'correoinvalido.com', 
    clave: 'password456',
    recaptcha: true
};
loguear(datosLoginCorreoInvalido); 
