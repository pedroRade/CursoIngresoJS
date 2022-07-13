/*
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad.
*/


function mostrar()
{
	//Declaro
	var edad;
	var esMayorDeEdad;
	
	//Recibo la edad por id
	edad = document.getElementById("txtIdEdad").value;
	
	//Paso a enteros
	edad = parseInt(edad);
	
	//Evaluo condicion
	esMayorDeEdad = edad > 17;
	
	if (esMayorDeEdad)
	{
		alert("Es persona mayor de edad");
	}
	else
	{
		alert("Es persona menor de edad"); 
	}

    //otra opcion sin usar el else
	//alert("Es persona menor de edad");

}
//FIN DE LA FUNCIÓN

// Pedro Radetich

