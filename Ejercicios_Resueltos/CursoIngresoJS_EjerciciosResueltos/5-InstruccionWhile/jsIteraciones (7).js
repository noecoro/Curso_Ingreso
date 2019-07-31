function mostrar()
{
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

	// inicializacion; condicion; incremento
	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contadorIteraciones;

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
*/