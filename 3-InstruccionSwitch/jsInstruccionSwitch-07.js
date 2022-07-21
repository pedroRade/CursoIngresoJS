// Radetich Pedro
// Div Z



/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais 
en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado; 
	var mensaje;
	
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		mensaje = "Oeste";
		break;

		case "Cataratas":
		mensaje = "Norte";
		break;

		case "Ushuaia":
		mensaje = "Sur";
		break;

		case "Mar del Plata":
		mensaje = "Este";
		break;

		// default:
		// mensaje = "Desconozco ese destino";
		// break;
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN

// id="txtIdDestino"


