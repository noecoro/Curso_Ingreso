/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var sueldo;
    var resultado;
    importe=document.getElementById("sueldo").value;
    resultado= document.getElementById("resultado").value;
    importe=parseInt(importe);
    sueldo=parseInt(sueldo);
    resultado= parseInt(resultado);
    resultado= 10*100;
    //alert()
}
var importe;
var porcentajeAumento;
var valoraumento;
var importeFinal;
importe=document.getElementById("sueldo").value;
importe=parseInt(importe);
porcentajeAumento=10;
valoraumento= importe* porcentajeAumento/100;
importeFinal= valoraumento + importe;