//Al ingresar una edad debemos informar solo si la persona es mayor de edad
function mostrar()

{var edad;
    edad=document.getElementById("edad").value;
    edad=parseInt(edad);
//tomo la edad  

    if(edad >= 18){
alert(" es mayor de edad");
}//FIN DE LA FUNCIÓN
}   