function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var cantidadTempPares = 0;
    var marcaMasPesado;
    var cantidadProdBajoCero = 0;
    var pesoMaximo;
    var pesoMinimo;
    var promedioPeso;
    var sumadorPesos = 0;
    var contadorPesos = 0;
    var flagSeguir;
    var flagPrimeraIteracion = true;

    do 
    {
        // Pido ingreso de la marca.
        marca = prompt("Ingrese la marca:");

        // Pido ingreso del peso.
        peso = prompt("Ingrese el peso (entre 1 y 100):");
        peso = parseInt(peso);
        
        // Valido peso.
        while (isNaN(peso) || peso > 100 || peso < 1)
        {
            peso = prompt("ERROR. Ingrese un peso entre 1 y 100:");
            peso = parseInt(peso);
        }

        // Pido ingreso de la temperatura
        temperatura = prompt("Ingrese la temperatura (entre -30 y 30):");
        temperatura = parseInt(temperatura);

        // Valido temperatura.
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt("ERROR. Ingrese una temperatura entre -30 y 30:");
            temperatura = parseInt(temperatura);
        }

        // Considero que el cero es par.
        // Evaluo cantidad de temperaturas pares.
        if (temperatura % 2 == 0) 
        {
            cantidadTempPares = cantidadTempPares + 1;
        }

        // Evalúo cantidad de productos bajo cero.
        if (temperatura < 0) 
        {
            cantidadProdBajoCero++;            
        }

        // Calculo datos para el promedio.
        sumadorPesos += peso;
        contadorPesos++;
        
        // Evaluo peso máximo y mínimo.
        if (flagPrimeraIteracion) 
        {
            pesoMaximo = peso;
            pesoMinimo = peso;
            marcaMasPesado = marca;
            flagPrimeraIteracion = false;
        }
        else if (peso > pesoMaximo) 
        {
            pesoMaximo = peso;
            marcaMasPesado = marca;
        }
        else if (peso < pesoMinimo) 
        {
            pesoMinimo = peso;
        }

        flagSeguir = confirm("¿Desea seguir ingresando?");
    } while(flagSeguir);

    if (contadorPesos == 0) {
        promedioPeso = "No se ingresaron datos para el promedio.";
    }
    else 
    {
        promedioPeso = sumadorPesos / contadorPesos;
    }

    document.write("Cantidad Temperaturas Pares: " +
        cantidadTempPares + "ºC <br>");
    document.write("Cantidad Productos Bajo Cero: " +
            cantidadProdBajoCero + "<br>");
    document.write("Promedio de pesos: " + promedioPeso +
                    "<br>");
    document.write("El peso máximo es " + pesoMaximo +
            "y el mínimo " + pesoMinimo + "<br>");
    document.write("La marca más pesada es: " + 
                marcaMasPesado + "<br>");





}
