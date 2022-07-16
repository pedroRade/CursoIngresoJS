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
	// else
	// {
	// 	alert("Dentro del else: O bien tengo más de 18 o bien soy soltero");
	// }


}//FIN DE LA FUNCIÓN

// "txtIdEdad"
// "estadoCivil"

//******************************************************************************

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
*/














