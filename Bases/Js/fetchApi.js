/**
 * Utilizando promises, es menos usado en la actualidad
function obtenerEmpleados() {
    const archivo = 'js/empleados.json';
    fetch(archivo)
    .then(resultado =>{
      return resultado.json();

    }).then(datos =>{
     //   console.log(datos);
        const {empleados} = datos;
     //   console.log(empleados);

        empleados.forEach(empleados => {
            console.log(empleados.id);
            console.log(empleados.nombre);
            console.log(empleados.puesto);
            document.querySelector('.contenido').textContent = empleados.nombre;
        });
    })
}
*/
/**
 * ASYNC Y AWAIT con json es mas utilizado
 */
async function obtenerEmpleados() {
    const archivo = 'js/empleados.json';
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    const {empleados} = datos;
    console.log(datos);
    empleados.forEach(empleados => {
        console.log(empleados.id);
        console.log(empleados.nombre);
        console.log(empleados.puesto);
        
    });
    
}
obtenerEmpleados();