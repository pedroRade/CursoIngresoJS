// Radetich Pedro
// Div Z
//ENTREGADO

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
// Se asume el ingreso de al menos 1 numero, se trabajara en enteros o parte entera de un Float
/*function mostrar()
{	
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

		// Otra forma
		if(banderaDelPrimero || numeroIngresado > numeroMaximo) // aprovecho cortociuto 
																// pero puede haber riesgos ya que 
																// numeroMaximo tiene "basura" dentro
		{

			numeroMaximo = numeroIngresado;
		}

		if(banderaDelPrimero || numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimero =false; // Aqui cambio la bandera ya que si 
									// ingreso un prox num ya no sera el primero
		}
		
		// if(banderaDelPrimero) //El primer numero seguro entra
		// {
		// 	numeroMaximo = numeroIngresado;
		// 	numeroMinimo = numeroIngresado;
		// }
		// else // son al menos 2 numeros...
		// {
		// 	if(numeroIngresado < numeroMinimo) //Si existe uno menor al minimo...
		// 	{
		// 		numeroMinimo = numeroIngresado; //ya no es el minimo
		// 	}
		
		// 	if(numeroIngresado > numeroMaximo) //Si existe uno mayor al maximo...
		// 	{
		// 		numeroMaximo = numeroIngresado; //Ya deja de ser el maximo
		// 		// banderaDelPrimero = false; // una prueba...jamas me reconoce mas de 1 numero
		// 	}
		// }
		
		// banderaDelPrimero = false; // Si vuelvo a ingresar al while el siguiente numero 
		// 							// ya no sera el primero
		respuesta = confirm("Desea ingresar otro numero?");
	}

	txtIdMaximo.value = numeroMaximo;
	
	txtIdMinimo.value = numeroMinimo;

}//FIN DE LA FUNCIÓN
*/

// otra forma
/*function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	respuesta = true;
	banderaDelPrimero = 0;

	while(respuesta) // entro con true
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		// Otra forma
		if(banderaDelPrimero == 0 || numeroIngresado > numeroMaximo) //el primer numero entra seguro
		{
			numeroMaximo = numeroIngresado;
		}

		if(banderaDelPrimero == 0 || numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = 1; //aqui cambio la bandera una vez asegurado el primer numero
		}

		respuesta = confirm("Desea ingresar otro numero?");
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
} //FIN DE FUNCION*/



function mostrar()
{	
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero = true;
	respuesta = true;
	
	while(respuesta)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero) //El primer numero seguro entra
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false; // Si vuelvo a ingresar al while el siguiente numero 
									// ya no sera el primero e ire al else
		}
		else // Si la bandera evalua a False, son al menos 2 numeros...
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
		
		// banderaDelPrimero = false; // Si vuelvo a ingresar al while el siguiente numero 
		// 							// ya no sera el primero
		respuesta = confirm("Desea ingresar otro numero?");
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}
// FIN DE FUNCION