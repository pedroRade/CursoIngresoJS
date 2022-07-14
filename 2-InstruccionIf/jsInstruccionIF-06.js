
// Radetich Pedro, Div Z
/*
Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;    
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Es mayor de edad");
	}
	else
	{
		if(edad > 12)
		{
			alert("Es adolescente");
		}
		else
		{
			alert("Es niño");
		}
	}

}//FIN DE LA FUNCIÓN

// "txtIdEdad"

// Otra forma:

/*
function mostrar()
{	
	var edad;
	var esMayorDeEdad;
	var esAdolescente;

	edad = document.getElementById("txtIdEdad").value;    
	edad = parseInt(edad);

	esMayorDeEdad = edad > 17;
	esAdolescente = edad > 12 && edad < 18; // o bien: esAdolescente = edad > 12 && !esMayorDeEdad

	if(esMayorDeEdad)
	{
		alert("es mayor de edad");
	}
	else
	{
		if(esAdolescente)
		{
			alert("es adolescente");
		}
		else
		{
			alert("es niño");
		}
	}
}
*/


// otra forma
/*
function mostrar()
{	
	var edad;
	var esMayorDeEdad;
	var esAdolescente;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;    
	edad = parseInt(edad);

	esMayorDeEdad = edad > 17;
	esAdolescente = edad > 12 && !esMayorDeEdad
	

	if(esMayorDeEdad)
	{
		mensaje = "Es mayor de edad";
	}
	else
	{
		if(esAdolescente)
		{	
			mensaje = "Es adolescente";
		
		}
		else
		{
			mensaje = "Es niño";
		}
	}
	alert(mensaje);
}
*/