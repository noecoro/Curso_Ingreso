function mostrar()
{
var sexo = prompt("ingrese f ó m .");

sexo = sexo.toUpperCase();

while(sexo != "F" && sexo != "M") 
{
    sexo = prompt("ERROR. ingrese f ó m:");
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN