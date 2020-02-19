/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz"
 se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas”
 se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz" 
 el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % 
 y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos 
brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var marca; 
     var cantidad;
     var precioUnidad;
     var precioConDescuento;
     var precioBruto;
     var precioNeto;
     var mensaje;

     //descuento 50/100
     //iniciar datos
     //parsear cantidad
     cantidad= document.getElementById("Cantidad").value;
     marca= document.getElementById("Marca").value;
     precioConDescuento= 
     precioConDescuento= parseInt(precioConDescuento);
     cantidad= parseInt(cantidad);
     // precioBruto = cantidad * precioUnidad;
// procesar datos EL PRECIO BRUTO NUNCA CAMBIA
// obtener el descuento
if (cantidad >= 6){
    precioBruto = cantidad * precioUnidad;
    porcentajeConDescuento= 0,5;
    precioNeto= precioNeto - precioNeto*porcentajeConDescuento;

}
else if(cantidad==5 && marca == "ArgentinaLuz")// cantidad ==5
if 

//mostrar resultado
document.getElementById("precioDescuento").value= precioConDescuento;
}
if (cantidad >6){
    porcentajeConDescuento= 0,5; 
}
else if (cantidad ==5){
    if (marca =="ArgentinaLuz" ){
        porcentajeConDescuento= 0,40;
        else{
            porcentajeConDescuento= 0,30;
        }
    }
    else if (cantidad == 4)
    if (marca =="ArgentinaLuz" || marca== "FelipeLamparas" ){
porcentajeConDescuento=0,25;
    }
    else
    porcentajeConDescuento= 0,20;
}
else if
precioNeto= precioNeto - precioBruto= porcentajeConDescuento;
// preparo el msj de salida
mensaje= "el precio final es " + precioNeto;
//punto e
if (precioNeto >120){
    var impuesto= precioNeto *0.10;
    precioNeto+= impuesto;
    mensaje= mensaje + precioNeto+ "usted pago" + importe+ "
    "
}