/**
 * For each y map es utilizado unicamente en arreglos
 * 
 */
 const carrito = [
    {nombre:'Monitor msi 27" pulgadas', precio: 500},
    {nombre:'Gabinete asus tuf gt301', precio: 2700},
    {nombre:'Mouse logitech g203', precio: 400},
    {nombre:'Teclado G213', precio: 900},
    {nombre:'Procesador AMD Ryzen 7 5700G', precio: 7000}

];
/**
 * For each
 * Arrow function => acorta el codigo
 * Es utilizado nada más en caso de querer mostrarlo o ver los resultados
 */
  carrito.forEach(producto=>console.log(producto.nombre));


/**
 * Map
 * Es utilizado para crear otro array
 */
 const array2 = carrito.map(producto=>producto.nombre);



console.log(array2);