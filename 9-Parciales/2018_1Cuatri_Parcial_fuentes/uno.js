/*Realizar el algoritmo que pida el ancho y el largo 
de un rectángulo por prompt 
y que muestre el perímetro por alert.*/
function mostrar()
{
var ancho;
var largo;
var resultado;
ancho= prompt("ingrese ancho");
largo=prompt("ingrese largo");
ancho= parseInt(ancho);
largo= parseInt(largo);
resultado= parseint(resultado);
resultado = ancho * largo;
//mensaje= ("El perimetro es " + (resultado))
alert(" El perimetro es " + (resultado));
}
