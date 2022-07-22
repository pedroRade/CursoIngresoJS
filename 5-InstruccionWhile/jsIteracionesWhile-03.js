// Radetich Pedro
// Div Z

/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var cantidadDeIntentos = 0;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750")
	{
		claveIngresada = prompt("ingrese nuevamente el número clave.");
		cantidadDeIntentos = cantidadDeIntentos + 1;
	}

	alert("cantidad de intentos " + cantidadDeIntentos);
}
