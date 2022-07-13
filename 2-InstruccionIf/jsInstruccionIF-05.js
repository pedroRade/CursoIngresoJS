// Consigna: Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{
	//Declaro
	var edad;
	var noEsAdolescente;
	
	//Recibo la edad por id
	edad = document.getElementById("txtIdEdad").value;
	
	//Paso a enteros
	edad = parseInt(edad);
	
	//Evaluo condicion
	noEsAdolescente = (13 > edad || edad > 17);

	if(noEsAdolescente)
	{
		alert("No es adolescente");
	}
	
 	/*
 	Otra forma posible:
 	
 	var esAdolescente;
 	esAdolescente =  12 < edad < 18; //la condición

 	if (! esAdolescente) // operador unario ! negación.
 	{
 		alert("No es adolescente");
 	} 
 	*/
}//FIN DE LA FUNCIÓN

//"txtIdEdad"

//Pedro Radetich
