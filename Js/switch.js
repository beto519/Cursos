const metodoPago = "tarjeta";


switch (metodoPago) {
    case "tarjeta":
        console.log("Pagaste con tarjeta");
        
        break;

        case "cheque":
            console.log("El fondo de tu cheque debe ser revisado");

        break;

        case "efectivo":
            console.log("Tu pago es en efectivo");

        break;

    default:
        console.log("No se ha seleccionado ninguna forma de pago");
        break;
}