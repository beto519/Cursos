const meses =['Enero','Febrero', 'Marzo','Abril','Mayo'];

const carrito = [
    {nombre:'Monitor msi 27" pulgadas', precio: 500},
    {nombre:'Gabinete asus tuf gt301', precio: 2700},
    {nombre:'Mouse logitech g203', precio: 400},
    {nombre:'Teclado G213', precio: 900},
    {nombre:'Procesador AMD Ryzen 7 5700G', precio: 7000}

];



meses.forEach(function (mes) {
    if (mes == 'Marzo') {
        console.log("Marzo si se encuentra");
    }
    
});




const resultado = meses.includes('Marzo');
console.log(resultado);

let result = carrito.some(function (producto) {
    return producto.nombre ==='Teclado G213';
    
});

result = carrito.reduce(function (total,producto) {
    return total+producto.precio
},0

);

result = carrito.filter(function (producto) {
    return producto.precio > 1000
    
});


console.log(result);