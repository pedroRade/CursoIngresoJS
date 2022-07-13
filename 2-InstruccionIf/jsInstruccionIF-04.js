/*
Ej 4
Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, 
edad entre 13 y 17 años (inclusive)
*/

function mostrar()
{
	//Declaro
	var edad;
	var esAdolescente;
	
	//Recibo la edad por id
	edad = document.getElementById("txtIdEdad").value;
	
	//Paso a enteros
	edad = parseInt(edad);
	
	//Evaluo condicion
	esAdolescente = (13 <= edad && edad <= 17);

	if(esAdolescente)
	{
		alert("Es adolescente");
	}
	

}
//FIN DE LA FUNCIÓN
//"txtIdEdad"

//Pedro Radetich