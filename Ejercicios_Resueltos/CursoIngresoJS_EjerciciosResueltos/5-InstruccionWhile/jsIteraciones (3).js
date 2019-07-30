function mostrar() {
    var numero;
    var esIncorrecto;
    esIncorrecto = true;

    numero = prompt("Ingrese un número");

    do {
        if (isNaN(numero)) {
            numero = prompt("Error. Debe ingresar un número:");
        }
        else {
            numero = parseInt(numero);
            if (numero >= 10) {
                numero = prompt("Error. Debe ingresar un número menor a 10:");
            }
            else {
                esIncorrecto = false;
            }
        }
    } while (esIncorrecto);


    alert("Usted ingresó: " + numero);

}//FIN DE LA FUNCIÓN


/*
var clave;
    clave = prompt("Ingrese la clave:");

    while (clave != "utn750") 
    {
        clave = prompt("Error. Clave Incorrecta. Reingrese:");
    }

    alert("Clave correcta.");

// Pedir el ingreso de un numero
// Validar que sea un numero.

var numero;
var esIncorrecto;

numero = prompt("Ingrese un número");

do 
{
    esIncorrecto = true;
    if (isNaN(numero)) 
    {
        numero = prompt("Error. Debe ingresar un número:");
    }
    else 
    {
        numero = parseInt(numero);
        if (numero >= 10) 
        {
            numero = prompt("Error. Debe ingresar un número menor a 10:");
        }
        else 
        {
            esIncorrecto = false;
        }
    }
} while(esIncorrecto);


alert("Usted ingresó: " + numero);


*/