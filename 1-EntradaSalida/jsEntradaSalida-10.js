/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var importe;
	var descuento;
	var resultado;

	importe = parseInt(document.getElementById("txtIdImporte").value); //Anido la funcion

	descuento = importe * 0.25;
	
	resultado = importe - descuento; 

	document.getElementById("txtIdResultado").value = resultado;

}
//txtIdImporte
//txtIdResultado

/*
 	Pedro Radetich
	Div z 
*/