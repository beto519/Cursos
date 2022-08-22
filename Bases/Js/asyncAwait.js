//Async- Await
function DescargarNuevosClientes() {
    return new Promise (resolve=>{
        console.log("Descargando clientes... espere por favor...");
        setTimeout(() => {
            resolve("El cliente fue descargado")
        }, 5000);

    });
}

function DescargarPedidos() {
    return new Promise (resolve=>{
        console.log("Descargando pedidos... espere por favor...");
        setTimeout(() => {
            resolve("El cliente fue descargado")
        }, 3000);

    });
}



async function app() {
    try {
        const pedidos = await DescargarPedidos();
        const clientes = await DescargarNuevosClientes();
        console.log(clientes);
        console.log(pedidos);
    } catch (error) {
     console.error();
    }
}

app();