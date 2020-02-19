//Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.
function mostrar()
{

var sexo = prompt("ingrese f ó m .");
document.getElementById("Sexo").value=sexo;

while  (sexo != "f" && sexo != "m") //(! (sexo == "f" || sexo == "m"))
{
    sexo = prompt("Error. Reeingrese");
}

alert("sexo correcto");
}//FIN DE LA FUNCIÓN

/*var clave = prompt("ingrese el número clave.");
while ( clave != "utn750")// (clave!= utn750)
 {
     clave= prompt ("clave incorrecta. Reeingrese");
    }//pregunto por el dato incorrecto
    {
        alert("clave correcta");
    }*/
   