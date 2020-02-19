
/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
function mostrar()*/
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño){
case "Febrero":
alert("Este mes no tiene más de 29 días");
// usar default y omitir el resto de los meses
break;
    case " Enero":
    case "Marzo":
    case " Abril":
    case "Mayo":
    case "Junio": 
    case "Julio" : 
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case " Diciembre":   
alert("Este mes tiene 30 o más días");
break;
}





//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN