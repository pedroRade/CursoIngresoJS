// Radetich Pedro
// Div Z
// ENTREGADO
/*
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/
function mostrar()
{
	// var numeroIngresado;
	var flagCota;
	var esDatoValido = false;	
	var contador = 0;

	while(! esDatoValido)
	{
		flagCota = prompt("ingrese la cota maxima (numero entero positivo)");
		flagCota = parseInt(flagCota);
		
		if(flagCota > 0)
		{
			esDatoValido = true;
		}
	}

	for (var i = 0; i == i; i++)
	{
		if( i > flagCota) //Si supero la cota, salgo
		{
			break;
		}
		contador++;
	}

	alert("rompio el ciclo for después de " + contador + " iteraciones");
}//FIN DE LA FUN = falseCIÓN
