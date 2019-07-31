/*
	Al presionar el botón pedir números
	 hasta que el usuario quiera, mostrar:
	1-Suma de los negativos. 
	2-Suma de los positivos. 
	3-Cantidad de positivos. 
	4-Cantidad de negativos. 
	5-Cantidad de ceros. 
	6-Cantidad de números pares. 
	7-Promedio de positivos. 
	8-Promedios de negativos. 
	9-Diferencia entre positivos y negativos, 
	(positvos-negativos).
*/
function mostrar()
{
	var respuesta;
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var cantidadImpares = 0;
	var maximo;
	var minimo;
	var numero;
	var esPrimeraIteracion = true;

	do
	{
		//Pido un numero
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if (numero != 0) { // Los que no son cero.
			if (numero > 0) // Pregunto por positivos
			{
				sumaPositivos = sumaPositivos + numero;
				cantidadPositivos = cantidadPositivos + 1;
			}
			else // Menores a cero (por descarte)
			{
				sumaNegativos += numero;
				cantidadNegativos++;
			}

			if (numero % 2 == 0) //Es par
			{
				cantidadPares++;
			}
			else // Si no es par, es impar.
			{
				cantidadImpares = cantidadImpares + 1;
			}

		}
		else
		{
			cantidadCeros++;
		}

		if (esPrimeraIteracion) 
		{
			maximo = numero;
			minimo = numero;
			esPrimeraIteracion = false;
		}

		if (numero > maximo) 
		{
			maximo = numero;
		}

		if (numero < minimo) 
		{
			minimo = numero;
		}

		respuesta = confirm("¿Desea continuar?");
	} while(respuesta);




}//FIN DE LA FUNCIÓN