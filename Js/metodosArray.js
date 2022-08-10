const numeros = [10,20,30,40,50];

const meses =['Enero','Febrero', 'Marzo','Abril','Mayo'];


/**
 * Agrega los datos al final del arreglo
 */
//numeros.push(60);
/**
 * Agrega siempre al principio del arreglo
 */
numeros.unshift(-10,-20,30);
console.log(numeros);

/**
 * Elimina el ultimo elemento del arreglo
 */
//meses.pop();

/**
 * Elimina el primer elemento del arreglo
 */
//meses.shift();


/**
 * Elimina el primer dato de la posicion que marques en este caso posisicion 3 y segundo dato es cuantos va eliminar.
 */
//meses.splice(3,1);
console.table(numeros);
console.table(meses);
console.log(meses);




const mesesNuevos = [...meses,'Junio'];
console.table(mesesNuevos);

/*
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

console.log(numeros.length);

numeros.forEach( function (numero) {
    console.log(numeros); 
})
*/

