// Radetich Pedro
// Div Z


/*
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	//tomo el mes
	var mesDelAnio; 
	var mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
	 	case "Enero":
	 		mensaje = "que comiences bien el anio!!";
	 		break;

	 	case "Marzo":
	 		mensaje = "a clases!!!.";
	 		break;

	 	case "Julio":
	 		mensaje = "se vienen las vacaciones!!!.";
	 		break;

	 	case "Diciembre":
	 		menaje = "Felices fiesta!!!."
	 		break;
	 }

	 alert(mensaje);
}//FIN DE LA FUNCIÓN
//txtIdMes

// 	break; //rompe y sale

	// 	default; //por defecto
	// }