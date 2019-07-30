function mostrar()
{
	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");

	while(!(numero >= 0 && numero <= 10))
	{
		numero = prompt("ERROR. Reingrese:");
	}

	alert("Usted ingresó " + numero);

}//FIN DE LA FUNCIÓN