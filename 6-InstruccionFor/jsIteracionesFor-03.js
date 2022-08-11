// Radetich Pedro
// Div Z
// al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"


function mostrar()
{
	var repeticiones = prompt("ingrese el número de repeticiones");
	
	repeticiones = parseInt(repeticiones);

	for (i = 0; i < repeticiones; i++)
	{
		// document.write("Hola UTN FRA" + "<br>");
		console.log("Hola UTN FRA");
	}


	// alert("ok");
}//FIN DE LA FUNCIÓN

/*Salida con repeticiones == 4
Hola UTN FRA
Hola UTN FRA
Hola UTN FRA
Hola UTN FRA
*/