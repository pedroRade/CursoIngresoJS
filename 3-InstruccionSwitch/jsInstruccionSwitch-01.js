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
	var mesDelAño; //= txtIdMes.value;
	var mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
	 	case "Enero":
	 		mensaje = "  ";
	 		break;

	 	case "Marzo":
	 		mensaje = " ";
	 		break;

	 	case "Julio":
	 		mensaje = " ";
	 		break;

	 	case "Diciembre":
	 		menaje = "  "
	 		break;
	 }

	 alert(mensaje);


	// 	break; //rompe y sale

	// 	default; //por defecto
	// }

}//FIN DE LA FUNCIÓN
//txtIdMes
