// Radetich Pedro
// Div Z

/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);
	
	while (numeroIngresado < 0 || numeroIngresado > 10)
	{
		numeroIngresado = prompt("ingrese nuevamente un numero en el rango pedido");
		numeroIngresado = parseInt(numeroIngresado);
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
	// alert("su numero es el " + numeroIngresado);


}//FIN DE LA FUNCIÓN
//"txtIdNumero"

// Entregado