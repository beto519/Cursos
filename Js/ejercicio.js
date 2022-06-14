/**
 * hola = aloh
 */
 const frase = (prompt('Ingresa la frase'));

function invertir(cadena) {
    let invertido = "";
    for(let letra of cadena){
invertido = letra + invertido;

    }
 return invertido;
}

console.log("El texto ya funciona "+invertir(frase));



function ivertirFacil(texto) {
    return texto.split("").reverse().join("");
    
}

console.log("Forma facil "+ivertirFacil(frase));








/**
 * Suma del numero menor y mayor
 * [0,1,2,3,4,5,6,7,8,9]
 * 
 */

 function sumatoriaMinMax() {

    const arrayNros = [1,2,3,4,56,7,8,10]
    const ordenarArray = arrayNros.sort(function(a,b)
    {return a - b})
    const nroMayor = ordenarArray.pop()
    const nroMenor = ordenarArray[0]
    const suma = nroMayor + nroMenor
    console.log(suma)
    
   }
   sumatoriaMinMax();