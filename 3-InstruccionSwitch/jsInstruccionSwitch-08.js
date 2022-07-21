// Radetich Pedro
// Div Z

/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

// Asumo que en Mar del Plata hace calor (depende)
function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;
	// console.log(typeof(destinoIngresado));

	switch(destinoIngresado)
	{
		case "Cataratas":
		case "Mar del plata":
		mensaje = "hace calor";
		break;

		default:
		mensaje = "hace frio";
		break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN

// id="txtIdDestino"


				
