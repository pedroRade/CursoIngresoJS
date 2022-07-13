
// Consigna: Recibir edad por id e imprimir "es mayor de edad" en caso de serlo
//Asumo que mayor de edad implica edad >= 18 anios

function mostrar()
{
	//tomo la edad  
	var edad;
	var esMayorDeEdad;

	edad = document.getElementById("txtIdEdad").value;
	//Paso a enteros
	edad = parseInt(edad);
	//Evaluo condicion
	esMayorDeEdad = edad >= 18;
	
	if (esMayorDeEdad)
	{
		alert("Es persona mayor de edad");
	}

}//FIN DE LA FUNCIÓN

// Pedro Radetich