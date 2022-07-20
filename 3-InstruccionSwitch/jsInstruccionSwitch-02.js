/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño)
	{
		case "Julio":
		mensaje = "ABRIGATE que hace frio";
		break;

		case "Agosto":
		mensaje = "Abrigate que hace frío";
		break;


		case "Setiembre":
		mensaje = "Ya pasamos el frio, ahora calor";
		break;

		case "Octubre":
		mensaje = "Ya pasamos el frio, ahora calor";
		break;

		case "Noviembre":
		mensaje = "Ya pasamos el frio, ahora calor";
		break;

		case "Diciembre":
		mensaje = "Ya pasamos el frio, ahora calor";
		break;

		case "Enero":
		.
		.
		.
		case "Junio":
		mensaje = "Falta para el invierno";
		break;

		case "Julio":
		case "Agosto":
		mensaje = "Abrigate que hace frío";
		break;



}
	alert(mensaje);
}//FIN DE LA FUNCIÓN