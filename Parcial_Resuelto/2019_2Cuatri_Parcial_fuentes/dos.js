function mostrar()
{
  var tipo;
  var edad;
  var nombre;
  var peso;
  var contador = 0;
  var acumuladorPesos = 0;
  var promedio;
  var cantidadAnimales = 0;
  var edadMaxima;
  var nombrePerroMasViejo;
  var esPrimerPerro = true;

  while(contador < 4)
  {
    tipo = prompt("Ingrese el tipo (perro/gato)");

    while (tipo != "perro" && tipo != "gato")
    {
      tipo = prompt("ERROR. Debe ser perro o gato. Reingrese:");
    }

    do
    {
      edad = prompt("Ingrese la edad entre 1 y 25:");
      edad = parseInt(edad);
    } while (isNaN(edad) || edad < 1 || edad > 25);

    do 
    {
      peso = prompt("Ingrese el peso entre 1 y 100");
      peso = parseInt(peso);
    } while (isNaN(peso) || peso < 1 || peso > 100);

    nombre = prompt("Ingrese el nombre:");

    acumuladorPesos = acumuladorPesos + peso; 

    if (peso < 10 && edad > 10) 
    {
      cantidadAnimales++;
    }

    if (tipo == "perro") 
    {
      if(esPrimerPerro == true) 
      {
        edadMaxima = edad;
        nombrePerroMasViejo = nombre; 
        esPrimerPerro = false;
      }
      else if (edad > edadMaxima) 
      {
        edadMaxima = edad;
        nombrePerroMasViejo = nombre;
      }      
    }    

    contador++;
  }

  promedio = acumuladorPesos / contador;

}
