/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/
function mostrar()

{
//
var mesDelAño = document.getElementById('mes').value;
//mesDelAño
// se puede usar if adentro de switch, los break son opcionales
// evalua posibles opciones
switch(mesDelAño){
    case "Enero" : 
        alert("que comiences bien el año!!!.");
    break;

    case "Marzo" :
        alert("a clases!");
    break;

    case "Julio":
        alert("se vienen las vacaciones!!!.");
    break;

    case "Diciembre":
        alert( "Felices fiesta!!!.");
    break;
}}
/*var dia;
dia = 2;
switch(dia)
{
case 1 :
{
console.log("Domingo");
break;
}
case 2 :
{
console.log("Lunes");
break;
}
case 3 :
{
console.log("Martes");
break;
}
case 4 :
{
console.log("Miércoles");
break;
}
case 5 :
{
console.log("Jueves");
break;
}
case 6 :
{
console.log("Viernes");
break;
}
case 7 :
{
console.log("Sábado");
break;
}
}*/



//FIN DE LA FUNCIÓN