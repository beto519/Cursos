
/**
 * Prototype es utilizado para evitar la sobreescritura de metodos, evitando que se cree la misma funcion.
 * @param {} nombre 
 * @param {*} costo 
 */


function Producto(nombre, costo) {
    this.nombre = nombre;
    this.costo = costo;
}

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const producto2 = new Producto('Monitor Curvo de 49',800);
const producto3 = new Producto('Laptop',300);
const cliente = new Cliente('Jesus', 'Rivera'); 

Cliente.prototype.FormatoCliente = function () {
    return ('El Cliente es '+this.nombre+' su apellido es '+this.apellido);
}

Producto.prototype.FormatoProducto = function () {
    return ('El producto es'+this.nombre+' su precio es de $'+this.costo);
}
console.log(cliente);


console.log(producto2.FormatoProducto());
console.log(cliente.FormatoCliente());