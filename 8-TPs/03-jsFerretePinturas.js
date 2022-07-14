/*
Radetich, Pedro
Div Z

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

/*
Proceso: se utiliza formula de conversion de grados Fahrenheit a Celsius y 
reciprocamente de Celsius a Fahrenheit
*/

function FahrenheitCentigrados () 
{
	var temperaturaEnFahr;
	var deFahrACel;
	var mensaje;

	temperaturaEnFahr = document.GetElementById("txtIdTemperatura").value;
	temperaturaEnFahr = parseFloat(temperaturaFahr);

	deFahrACel = (temperaturaFahr - 32) / 1.8;
	mensaje = "La temperatura en grados Fahrenheit dada equivale a " + deFahrACel.toFixed(1);
	alert(mensaje);
}




function CentigradosFahrenheit () 
{
	var temperaturaEnCel;
	var deCelAFahr;
	var mensaje;	

	temperaturaEnCel = document.GetElementById("txtIdTemperatura").value;
	temperaturaEnCel = parseFloat(temperaturaEnCel);

	deCelAFahr = (temperaturaEnCel * 1.8) + 32;
	
	mensaje = "La temperatura en grados Centigrados dada equivale a " + deCelAFahr.toFixed(1);

	alert(mensaje);
}

// "txtIdTemperatura"