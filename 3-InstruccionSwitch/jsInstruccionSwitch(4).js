
/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días*/
function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
mesDelAño
//alert (mesDelAño);
    switch ("mesDelAño"){
case "Febrero":
    alert("tiene 28 días");
    break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
     alert("tiene 30 días");
     // usar defaul
  break;
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Agosto":
  case "Julio":
  case "Octubre":
  case "Diciembre":
     alert("tiene 31 días");
     break;
   

    }

	



}//FIN DE LA FUNCIÓN