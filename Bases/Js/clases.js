
class Producto{
    constructor(nombre,costo){
    this.nombre = nombre;
    this.costo = costo;
    }
    formatoProducto() {
        return `El producto ${this.nombre} tiene un precio de $ ${this.costo}`;
    }
}

const producto = new Producto();


const producto2 = new Producto('Monitor Curvo de 49',800);
const producto3 = new Producto('Laptop',300);



class Libro{

    constructor(nombre, precio, isbn){
    this.nombre = nombre;
    this.precio =  precio;
    this.isbn = isbn;
    }
}
const libro = new Libro('Java Script','120','ad4s452d4a')





console.log(libro);

console.log(producto2);
console.log(producto3);
