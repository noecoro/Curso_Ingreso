/*
	Realizar el algoritmo que pida los datos 
	necesarios para un triángulo por prompt. 
	De ser escaleno, mostrar los lados concatenados. 
	De ser equilátero, mostrar el perímetro.
*/ 
function mostrar()
{
	var ladoA;
	var ladoB;
	var ladoC;
	var mensaje;
	
	ladoA = prompt("Ingrese el primer lado:");	
	ladoB = prompt("Ingrese el segundo lado:");
	ladoC = prompt("Ingrese el tercer lado:");

	// Verifico si es escaleno
	if (ladoA != ladoB && ladoB != ladoC && 
		ladoA != ladoC) 
	{
		mensaje = "Es escaleno. Lados concatenados: "
		+ ladoA + ladoB + ladoC;
	}
	else if(ladoA == ladoB && ladoA == ladoC) 
	{
		ladoA = parseInt(ladoA);
		ladoB = parseInt(ladoB);
		ladoC = parseInt(ladoC);

		mensaje = "Es equilatero. Perimetro: "
		+ (ladoA + ladoB + ladoC);	
	}
	else {
		mensaje = "No es escaleno ni equilatero.";
	}

	alert(mensaje);
}
