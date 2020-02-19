//Al ingresar una edad debemos informar si la persona es mayor de edad, 
//sino informar que es un menor de edad.
function mostrar()
{var edad;
    edad=document.getElementById("edad").value;
    edad=parseInt(edad);
    //mensaje=
    // usar dos if esta mal xq estaria 
//tomo la edad  
if (edad >= 18){
    alert("Es mayor de edad")}

else //(edad < 18){ no lleva condicion
    alert("Es menor de edad");

}//FIN DE LA FUNCIÓN