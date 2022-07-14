// Radetich, Pedro
// Div Z
/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y 
no es menor.'
*/

// function mostrar()
// {
// 	var edad;
// 	var estadoCiv;

// 	edad = document.getElementById("txtIdEdad").value;
// 	estadoCiv = document.getElementById("estadoCivil").value;

// 	edad = parseInt(edad);

// 	if(! (edad < 18 && estadoCiv != "Soltero")) //Si no es menor ni estado civil distinto de soltero
// 	{
// 		if(edad > 17 && estadoCiv == "Soltero")
// 		{
// 			alert("Es soltero y no es menor");
// 		}
// 	}
// }//FIN DE LA FUNCIÓN

// "txtIdEdad"
// "estadoCivil"

// Otra Forma(?)
// function mostrar()
// {
// 	var edad;
// 	var estadoCiv;

// 	edad = document.getElementById("txtIdEdad").value;
// 	estadoCiv = document.getElementById("estadoCivil").value;

// 	edad = parseInt(edad);
	
// 	if(edad < 18 && estadoCiv != "Soltero")
// 	{

// 	}
// 	else
// 	{
// 		if(edad > 17 && estadoCiv == "Soltero")
// 		{
// 			alert("Es soltero y no es menor")

// 		}
// 	}
// }


// Con esto solo alcanzaba
// *** Mejor Version ***
function mostrar()
{
	var edad;
	var estadoCiv;

	edad = document.getElementById("txtIdEdad").value;
	
	edad = parseInt(edad);
	
	estadoCiv = document.getElementById("estadoCivil").value;
	
	if(edad > 17 && estadoCiv == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
}

