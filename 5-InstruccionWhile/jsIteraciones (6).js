//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
function mostrar()
{
	//var numero;
	var contador=0;//incremente el conteo/iteraciones/cantidad d veces q paso algo
	var acumulador=0;//acumula la suma 
	var numero;
while  (contador <5)
{
	numero= prompt("ingrese un numero");
	while (isNaN (numero)){ 
	numero=prompt("error");
	}//contador=parseInt(contador);

	numero=parseInt(numero);

acumulador= acumulador + numero;
contador++;
}

promedio=acumulador/contador;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
/*var acumulador=0;
var numero;
var contador = 0;



}

while (contador < 5)
{
	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);
	acumulador += numero;
	contador++;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;*/