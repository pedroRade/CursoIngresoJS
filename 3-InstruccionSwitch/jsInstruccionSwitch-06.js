// Radetich Pedro
// Div Z

/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".
*/
function mostrar()
{
	//tomo la hora
	var horaDelDia;
	var esDeNoche;

	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia); //No puedo asumir ingreso correcto 
	
	esDeNoche = (horaDelDia > 19 && horaDelDia < 25) || (horaDelDia > -1 && horaDelDia < 7);

	if(esDeNoche)
	{
		mensaje = "Es de noche";
	}
	else
	{
		switch(horaDelDia)
		{
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			mensaje = "Es de maniana";
			break;

			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			mensaje = "Es de tarde";
			break;

			default:
			mensaje ="La hora no existe";
			break;
		}

	}	
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN

// id="txtIdHora"