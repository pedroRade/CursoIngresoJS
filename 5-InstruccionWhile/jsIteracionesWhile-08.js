// Radetich Pedro
// Div Z


/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

//Se asume el ingreso de al menos un numero 
function mostrar()
{
	var contador;
	var respuesta;
	var numeroIngresado; // agrego variable por claridad
	var sumaPositivos;
	var multiplicacionNegativos;
	// var existeNegativo;  //uso esta variable para excluir el caso de ingreso todos ceros
	var cantidadDePositivos;
	var cantidadDeNegativos;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta='si';
	// existeNegativo = false;
	cantidadDePositivos = 0; //ambas variables usadas para evitar el caso de ingresos todos nulos
	cantidadDeNegativos = 0; 

	while(respuesta == "si") // ingreso al menos 1 vez al ciclo
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 0)
		{
			cantidadDePositivos++; //incrementa en 1
			sumaPositivos = sumaPositivos + numeroIngresado;
		}

		if(numeroIngresado < 0)
		{
			// existeNegativo = true; //bandera
			cantidadDeNegativos++; //incrementa en 1
			multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;
		}

		contador = contador + 1;
		respuesta = prompt("desea ingresar otro numero? si/no");
	}

	// PROBLEMA: qué hacer cuando se ingresan TODOS CEROS?
	// Si se ingresa al menos un num positivo necesariamente la suma sera > 0,
	// pero si se ingresan todos negativos, la suma queda nula, como diferenciar
	// el caso TODOS CEROS?

	if(cantidadDeNegativos == 0 && cantidadDePositivos == 0)
	{
		alert("Usted ingreso todos ceros, no pueden realizarse las operaciones");
	}
	else
	{
		txtIdSuma.value = sumaPositivos;
		txtIdProducto.value = multiplicacionNegativos;
	}
}//FIN DE LA FUNCIÓN	





// Otra VERSION
/*function mostrar()
{
	var contador;
	var respuesta;
	var numeroIngresado; // agrego variable por claridad
	var sumaPositivos;
	var multiplicacionNegativos;
	var cantidadDeCeros;
	

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta='si';
	cantidadDeCeros = 0; 
	

	while(respuesta == "si") // ingreso al menos 1 vez al ciclo
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado != 0)
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
			}

			if(numeroIngresado < 0)
			{
				multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;
			}
		}
		else
		{
			cantidadDeCeros = cantidadDeCeros + 1; //cuento la cantidad de ceros
		}
		
		contador = contador + 1;
		respuesta = prompt("desea ingresar otro numero? si/no");
	}

	// PROBLEMA: qué hacer cuando se ingresan TODOS CEROS?
	// Si se ingresa al menos un num positivo necesariamente la suma sera > 0,
	// pero si se ingresan todos negativos, la suma queda nula, como diferenciar
	// el caso TODOS CEROS?

	if(cantidadDeCeros == contador) //si la cantidad de ceros es la misma 
										//que la de numeros ingresados, luego ingrese TODOS CEROS
	{
		alert("Usted ingreso todos ceros, no pueden realizarse las operaciones");
	}
	else
	{
		txtIdSuma.value = sumaPositivos;
		txtIdProducto.value = multiplicacionNegativos;
	}
}//FIN DE LA FUNCIÓN	
*/

// Otra forma del ciclo while

/*while(respuesta == "si") // ingreso al menos 1 vez al ciclo
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado != 0)
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
			}
			else
			{
				multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;
			}
		}
		else
		{
			cantidadDeCeros = cantidadDeCeros + 1; //cuento la cantidad de ceros
		}
		
		contador = contador + 1;
		respuesta = prompt("desea ingresar otro numero? si/no");
	}*/