// Pedro Radetich Div Z


/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioA;
	var precioB;
	var precioC;
	var suma;
	var imprime;

	precioA = document.getElementById("txtIdPrecioUno").value;
	precioB = document.getElementById("txtIdPrecioDos").value;
	precioC = document.getElementById("txtIdPrecioTres").value;

	precioA = parseFloat(precioA); //Los llevo a formato Float
	precioB = parseFloat(precioB);
	precioC = parseFloat(precioC);

	suma = precioA + precioB + precioC;

	imprime = "La suma total de precios es $" + suma;
	alert(imprime);

}





function Promedio () 
{
	var precioA;
	var precioB;
	var precioC;
	var suma;
	var promedio;
	var imprime;
		
	precioA = document.getElementById("txtIdPrecioUno").value;
	precioB = document.getElementById("txtIdPrecioDos").value;
	precioC = document.getElementById("txtIdPrecioTres").value;

	precioA = parseFloat(precioA); //Los llevo a formato Float
	precioB = parseFloat(precioB);
	precioC = parseFloat(precioC);

	suma = precioA + precioB + precioC;
	promedio = suma / 3;
	imprime = "El promedio de precios ingresados es $" + promedio.toFixed(2); //trunco el float a 2
																			 //decimales
	alert(imprime);		
}


function PrecioFinal () 
{
	var precioA;
	var precioB;
	var precioC;
	var suma;
	var ivaTotal;
	var preciosFinal;
	var imprime;
	
	precioA = document.getElementById("txtIdPrecioUno").value;
	precioB = document.getElementById("txtIdPrecioDos").value;
	precioC = document.getElementById("txtIdPrecioTres").value;

	precioA = parseFloat(precioA); //Los llevo a formato Float
	precioB = parseFloat(precioB);
	precioC = parseFloat(precioC);	

	suma = precioA + precioB + precioC;
	ivaTotal = suma * 0.21;   // Atencion puede evaluar con muchos decimales
	preciosFinal = (suma + ivaTotal).toFixed(2); // Ya trunco a 2 decimales
	imprime = "El total de precios mas IVA es de $" + preciosFinal;
	alert(imprime);

}

// "txtIdPrecioUno" 
// "txtIdPrecioDos"
// "txtIdPrecioTres"