
/**
 * Un for loop basico
 * Que busca encontrar que numeros son pares del 0 al 100
 */
// for (let index = 0; index <= 100 ; index++) {
//     if (index%2 ===0) {
//         console.log("Este numero es par "+index);
        
//     } else{
//         console.log("Este numero es impar "+index);
//     }
    
// }

/**
 * For lopp
 * Para acceder a un objeto Carrito e imprimir los nombres
 */
// const carrito = [
//     {nombre:'Monitor msi 27" pulgadas', precio: 500},
//     {nombre:'Gabinete asus tuf gt301', precio: 2700},
//     {nombre:'Mouse logitech g203', precio: 400},
//     {nombre:'Teclado G213', precio: 900},
//     {nombre:'Procesador AMD Ryzen 7 5700G', precio: 7000}

// ];
// for (let index = 0; index < carrito.length; index++) {
//    //Imprimes el nombre de carrito
//    console.log(carrito[index].nombre);
//    //Imprimes su precio
//    console.log(carrito[index].precio);
// }


/**
 * While loop
 */
// let i = 1;
// while (i<=100) {

//    if (i % 2=== 0) {
//     console.log("Este numero es par ["+i+"]");
//     i++;
//    }
//    else{
//   console.log("Este numero es impar ["+i+"]");
//   i++ 
//  }
// }


/**
 * Do while
 * Diferencia entre do while y while es que en do while primero se ejecuta y despues se evalua, en contrario al while  que primero se evalua y si no se cumple no se ejecuta.
 */
let i = 100;
do{
   console.log(i);
i++;

}while (i<10) ;