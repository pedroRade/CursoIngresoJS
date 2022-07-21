// Radetich, Pedro
// Div Z

/*
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
	//tomo el mes
	var mesDelAnio;
	var mensaje;

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Febrero":
		mensaje = "Este mes no tiene mas de 29 dias";
		break;

		default:
		mensaje = "este mes tiene 30 dias o mas";
		break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN


// Hacer hasta el ej 8 (inclusive)