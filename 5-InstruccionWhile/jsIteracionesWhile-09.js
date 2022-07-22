// Radetich Pedro
// Div Z
//ENTREGADO

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
// Se asume el ingreso de al menos 1 numero, se trabajara en enteros o parte entera de un Float

function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero = true;
	// respuesta = 'si';
	respuesta = true;
	
	// while(respuesta=="si")
	while(respuesta)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(banderaDelPrimero) //El primer numero seguro entra
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else // son al menos 2 numeros...
		{
			if(numeroIngresado < numeroMinimo) //Si existe uno menor al minimo...
			{
				numeroMinimo = numeroIngresado; //ya no es el minimo
			}
		
			if(numeroIngresado > numeroMaximo) //Si existe uno mayor al maximo...
			{
				numeroMaximo = numeroIngresado; //Ya deja de ser el maximo
				// banderaDelPrimero = false; // una prueba...jamas me reconoce mas de 1 numero
			}
		}
		
		banderaDelPrimero = false; // Si vuelvo a ingresar al while el siguiente numero 
									// ya no sera el primero
		respuesta = confirm("Desea ingresar otro numero?");
	}

	txtIdMaximo.value = numeroMaximo;
	
	txtIdMinimo.value = numeroMinimo;

}//FIN DE LA FUNCIÓN


