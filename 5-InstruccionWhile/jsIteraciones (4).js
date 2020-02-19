//al presionar el botón pedir un número entre 0 y 9 inclusive.
function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero= parseInt(numero);

while  (isNaN(numero)|| numero <0 && numero >10 ) //(numero >=0 && numero <=9)
{
	numero= parseInt(numero);
	numero=prompt("numero incorrecto");
}
{
	alert("numero correcto");
}
}//FIN DE LA FUNCIÓN