// Radetich, Pedro
// Div Z
/*
Al ingresar una edad menor a 18 años y un estado civil 
distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/


function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if (edad < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
	else
	{
		alert("Dentro del else: O bien tengo más de 18 o bien soy soltero");
	}


}//FIN DE LA FUNCIÓN

// "txtIdEdad"
// "estadoCivil"