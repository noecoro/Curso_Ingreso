function mostrar()
{
    // 1) Declarar variables
    var planeta;
    var mensaje;

    // 2) Tomar datos / Inicializar
    planeta = prompt("Ingrese un planeta");

    // 3) Procesar datos
    switch (planeta) {
        case "mercurio":
        case "venus":
            mensaje = "Acá hace más calor";
        break;
        case "tierra":
            mensaje = "Acá vivimos";
        break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            mensaje = "Acá hace más frío";
        break;    
        default:
            mensaje = "No es un planeta válido";
        break;
    }

    // 4) Mostrar resultados.
    alert(mensaje);
}
