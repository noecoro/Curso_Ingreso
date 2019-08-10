/*
Realizar el algoritmo que permita ingresar el nombre de una localidad, 
cantidad de habitantes en millones entre 1 y 40 (validar)   
	  
la temperaruta mínima que se registra en esa localidad(entre -50 y 50)  
la zona donde queda  validando (norte, sur, este u oeste)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
				<br>a)
				La cantidad de temperaturas pares.
				<br>b)
				El nombre de la localidad con menos habitantes
				<br>c)
				La cantidad localidades  que superan los 40 grados de temperatura.
				<br>d)
				El promedio de habitantes entre las localidades ingresadas				
				<br>f)
				La temperatura mínima ingresada, y nombre de la localidad  que registro esa temperatura. 
				<br>f)
				La temperatura maxima ingresada de una localidad del sur , 
				y nombre de la localidad  que registro esa temperatura. 
		
		</h3>
			<br> Testeo con los siguientes valores
				<br>(localidad=quilmes;habitantes = 5; t =-300(mal) ,-15(bien) )
				<br>(localidad=avellaneda;habitantes = 10; t =1 )
				<br>(localidad=lanus;habitantes = -150(mal), 15(bien); t =45 )
				<br>(localidad=moron;habitantes = 40; t =12 )



*/ 


function mostrar()
{
	var localidad;
	var cantidadHabitantes;
	var temperatura;
	var respuesta="s";
	var contadorDePares=0;
	var banderaMenosHabitantes=true;
	var nombreMenosHabitantes;
	var menor;
	var contadorTemperaturasAltas=0;
	var contador=0;
	var acumuladorHabitantes=0;
	var minimoTemperatura;
	var nombreMinimoTemperatura;
	while(respuesta=="s")
	{
		localidad=prompt("ingrese localidad");

		do{
			cantidadHabitantes=prompt("ingrese cantida entre 1 y 40");
		}while(isNaN(cantidadHabitantes)||cantidadHabitantes<1||cantidadHabitantes>40);
		cantidadHabitantes=parseInt(cantidadHabitantes);

		do{
			temperatura=prompt("ingrese cantida entre -50 y 50");
		}while(isNaN(temperatura)||temperatura<-50||temperatura>50);
		temperatura=parseInt(temperatura);

		respuesta=prompt("ingrese 's' para continuar");
		//a)La cantidad de temperaturas pares.
		if(temperatura!=0 && temperatura%2==0)
		{
			contadorDePares++;
		}

		//b)El nombre de la localidad con menos habitantes
		if(contador==0 ||cantidadHabitantes<menor   )
		{
			menor=cantidadHabitantes;
			nombreMenosHabitantes=localidad;
		}

		//c)La cantidad localidades  que superan los 40 grados de temperatura.
		if(temperatura>40)
		{
			contadorTemperaturasAltas++;
		}
		//d) El promedio de habitantes entre las localidades ingresadas
		acumuladorHabitantes=acumuladorHabitantes+cantidadHabitantes;


		//f)La temperatura mínima ingresada, y nombre de la localidad  que registro esa temperatura. 
		
		if(contador==0||temperatura<minimoTemperatura)
		{
			minimoTemperatura=temperatura
			nombreMinimoTemperatura=localidad;
		}






		contador++;
	}//while(respuesta=="s")
	
	promedio=acumuladorHabitantes/contador;


}
