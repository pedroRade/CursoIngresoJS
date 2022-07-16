
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

//"txtIdEdad"


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

//***************************************************************************
// Radetich Pedro
// Div Z

/*
Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
Si es menor de 13 , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolescente”
Si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
Si tiene 33 años , además mostrar el mensaje “como cristo”
Si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
Si tiene 88, además mostrar el mensaje “lindo número''
Si la edad es par , además mostrar , “sos par!!”.
*/

// Revision 2
/*
function mostrar()
{
	var mensaje;
	var edad;
	var esAdolescente;
	var esMayorDeEdad;

	edad = document.getElementById("txtIdEdad").value;    
	edad = parseInt(edad);

	esAdolescente  = edad < 18 && edad > 12;
	esMayorDeEdad = edad > 17;


	if(edad < 13)
	{
		mensaje = "feliz dia";
	}

	
	if(esAdolescente) 
	{
		mensaje = "usted es adolescente";
		
		if(edad == 17)
		{
			mensaje = mensaje + " ultimo año!!"; 
		}
	}

	
	if(esMayorDeEdad)
	{	
		//mensaje = "Tenes edad de laburar";
		if(edad > 60)
		{
			mensaje = "A jubilarse";

			if(edad == 88)
			{
				mensaje = mensaje + " lindo numero!";
			}
		}
		else
		{	
			mensaje = "Tenes edad de laburar";
			
			if(edad == 33)
			{
				mensaje = mensaje + " Como cristo";
		
			}

		}
	}

	
	if(edad % 2 == 0) //Si edad es par...
	{
		mensaje =  mensaje + " y ademas sos par!"; //entonces...
	}
	// si no, salgo...
	
	alert(mensaje);
}



