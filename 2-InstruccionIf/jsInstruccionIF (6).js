/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

function mostrar()
{
    var edad;
    edad=document.getElementById("edad").value;
    edad=parseInt(edad);
//tomo la edad  

if (edad >= 18 ){
    alert("Es mayor de edad");}
    else 
    if (edad >= 13 && edad <= 17){
        alert ("Es adolescente"); }
        
    } else
     if (edad <= 13) {
        alert("Es niño"); 
    }
      
    
 //FIN DE LA FUNCIÓN