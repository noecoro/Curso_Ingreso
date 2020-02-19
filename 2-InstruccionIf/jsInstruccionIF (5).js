//Al ingresar una edad solo debemos informar si la persona NO (!) es adolescente.
// negar !  sin negar se usa or || cambiando los mayores y menores
function mostrar()

{var edad;
    edad=document.getElementById("edad").value;
    edad=parseInt(edad);
//tomo la edad  
if (!( edad >= 13 && edad <= 17 )){
    alert(" NO es adolescente");

}

}//FIN DE LA FUNCIÓN