/*
Ciclo if: Ej 1

Enunciado:
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/


function mostrar()
{
	var edad;
	var tieneQuince;
	
	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	// evaluo condicion
	tieneQuince = (edad == 15);
	
	if(tieneQuince){
		alert("Niña bonita");
	}

}//FIN DE LA FUNCIÓN

// Pedro Radetich