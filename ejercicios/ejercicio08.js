console.log("--- Manipulación de Productos con Métodos de Arreglos ---");

const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
    { nombre: 'Pantalón', precio: 120 },
    { nombre: 'Corbata', precio: 50 },
];

console.log("Productos Originales:", productos);

const productosConIVA = productos.map(producto => {
    const precioConIVA = producto.precio * 1.12; 
    return {
        nombre: producto.nombre,
        precio: parseFloat(precioConIVA.toFixed(2))
    };
});

console.log("\n--- Arreglo con Precios con IVA ---");
console.log(productosConIVA);

const productosFiltrados = productosConIVA.filter(producto => {
    return producto.precio >= 100; 
});

console.log("\n--- Productos Filtrados (Precio con IVA >= 100) ---");
console.log(productosFiltrados);

const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    return a.precio - b.precio; 
});

console.log("\n--- Productos Ordenados por Precio con IVA (Menor a Mayor) ---");
console.log(productosOrdenados);