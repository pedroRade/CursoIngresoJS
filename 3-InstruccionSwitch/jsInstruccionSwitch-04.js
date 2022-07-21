// Radetich Pedro
// Div Z


/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

// Idea: dado que la una parte de los meses del anio tienen 30 dias, otra parte
// tienen 31 y uno solo posee 28 o 29 (en caso de ser anio bisiesto) se utilizara
// la estructura switch para agruparlos
// Se ASUME anio no bisiesto
function mostrar()
{
	var mesDelAnio; 
	var mensaje;

	// recibo el mes
	mesDelAnio = document.getElementById("txtIdMes").value;	
	
	switch(mesDelAnio)
	{
		// case "Febrero":
		// mensaje = "Tiene 28 dias (si es anio no bisiesto)";
		// break;
	
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		mensaje = "tiene 31 dias";
		break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		mensaje = "tiene 30 dias";
		break;

		default:
		mensaje = "Tiene 28 dias (si es anio no bisiesto)";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN

//id="txtIdMes"    

// <select id="txtIdMes">
// 					<option value="Enero">Enero</option>
// 					<option value="Febrero">Febrero</option>
// 					<option value="Marzo">Marzo</option>
// 					<option value="Abril">Abril</option>
// 					<option value="Mayo">Mayo</option>
// 					<option value="Junio">Junio</option>
// 					<option value="Julio">Julio</option>
// 					<option value="Agosto">Agosto</option>
// 					<option value="Septiembre">Septiembre</option>
// 					<option value="Octubre">Octubre</option>
// 					<option value="Noviembre">Noviembre</option>
// 					<option value="Diciembre">Diciembre</option>
// 				</select>