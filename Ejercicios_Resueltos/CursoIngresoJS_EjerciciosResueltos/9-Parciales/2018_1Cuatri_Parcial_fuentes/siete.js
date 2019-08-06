function mostrar()
{
    var sumador = 0;
    var numero;
    var maximoNumero;
    var minimoNumero;
    var sexoMaximo;
    var sexoMinimo;
    var esPrimeraIteracion = true;

    for(var i = 0; i < 5 ; i++)
    { 
        numero = prompt("Ingrese un numero entre -5 y 5:");
        numero = parseInt(numero);

        while(isNaN(numero) || numero < -5 
                || numero > 5)
        {
            numero = prompt("ERROR. Debe ingresar un número entre -5 y 5:");
            numero = parseInt(numero);
        }

        sexo = prompt("Ingrese:");

        while(sexo != "f" && sexo != "m") 
        {
            sexo = prompt("ERROR. Ingrese f o m:");
        }

        sumador = sumador + numero;   
        
        if(esPrimeraIteracion) 
        {
            maximoNumero = numero;
            minimoNumero = numero;
            sexoMaximo = sexo;
            sexoMinimo = sexo;
            esPrimeraIteracion = false;
        }
        else 
        {
            if(numero > maximoNumero) 
            {
                maximoNumero = numero;
                sexoMaximo = sexo;
            } 
            else if(numero < minimoNumero)
            {
                minimoNumero = numero;
                sexoMinimo = sexo;
            }
        }
    } 
    

    document.write("suma es: " + 
    sumador + "<br>");
    document.write("maximo es: " + 
    maximoNumero + "<br>");

}
