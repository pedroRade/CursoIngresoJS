// Radetich Pedro
// Div Z
//ENTREGADO

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
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
		
		if(banderaDelPrimero) //la primera vez evalua a True
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else
		{
			if(numeroIngresado < numeroMinimo) //Si existe uno menor al minimo...
			{
				numeroMinimo = numeroIngresado; //ya no es el minimo
			}
		
			if(numeroIngresado > numeroMaximo) //Si existe uno mayor al maximo...
			{
				numeroMaximo = numeroIngresado; //Ya deja de ser el maximo
			}
		}
		
		banderaDelPrimero = false; //Si vuelvo a ingresar al while el ingresado no sera el primero
		respuesta = confirm("Desea seguir?");
	}


	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;

}//FIN DE LA FUNCIÓN


