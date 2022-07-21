// Radetich Pedro
// Div Z


/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
// Asumo entre 7 y 11 inclusive
function mostrar()
{
	//tomo la hora
	var horaDelDia;
	var mensaje;

	horaDelDia = document.getElementById("txtIdHora").value;
	// console.log(typeof(horaDelDia));

	horaDelDia = parseInt(horaDelDia); //No puedo asumir ingreso correcto, 
										//deben ser enteros positivos
	// console.log(typeof(horaDelDia));	

	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		mensaje = "Es de maniana";
		break;

		default:
		mensaje = "No tengo nada que informar";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN

//id="txtIdHora"

