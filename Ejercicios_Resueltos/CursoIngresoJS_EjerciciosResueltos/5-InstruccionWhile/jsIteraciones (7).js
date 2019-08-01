function mostrar()
{
	var acumulador = 0;
	var contador = 0;
	var respuesta;
	var numero;
	do
	{
		numero = prompt("Ingrese un numero:");
		while(isNaN(numero))
		{
			numero = prompt("Ingrese un numero:");
		}
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador++;

		respuesta = prompt("¿Desea seguir? S/N:");
		
		while(respuesta != "S" && respuesta != "N" ) 
		{
			respuesta = prompt("Error. Ingrese S o N. ¿Desea seguir? S/N:");
		}
	} while(respuesta == "S");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN


/*
	do
	{
		numero = prompt("Ingrese un numero:");
		if(numero != null) 
		{
			numero = parseInt(numero);
			acumulador += numero;
	
			contadorIteraciones++;
		}
	} while(numero != null);


		var acumulador=0;
	var numero;
	var contadorIteraciones = 0;
	
	do
	{
		numero = prompt("Ingrese un numero:");
		numero = parseInt(numero);
		acumulador += numero;

		contadorIteraciones++;
		respuesta = prompt("Presione S si desea seguir ingresando.");
		
		while(respuesta.toUpperCase() != "S"
			   && respuesta.toUpperCase() != "N") 
		{
			respuesta = prompt("Error. Ingrese S para seguir o N para salir:");
		}

	} while(respuesta == "S" || respuesta == "s");
*/