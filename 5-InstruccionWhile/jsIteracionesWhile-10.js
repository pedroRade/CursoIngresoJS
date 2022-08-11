// Radetich Pedro
// Div Z
// ENTREGADO
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
*/
// Asumo diferencia entre positivos y negativos como la diferencia entre la 
// suma de positivos y la suma de negativos
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var promedioPositivos;
	var promedioNegativos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadPares;
	var cantidadCeros;
	var diferenciaPositivosNegativos;
	
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadCeros = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadPares = 0;
	respuesta = true;

	while(respuesta)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado != 0)
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos = numeroIngresado + sumaPositivos;
				cantidadPositivos = cantidadPositivos + 1;
			}

			if(numeroIngresado < 0)
			{
				sumaNegativos = numeroIngresado + sumaNegativos;
				cantidadNegativos = cantidadNegativos + 1;
			}
		}
		else //Si entro seguro es cero
		{
			cantidadCeros = cantidadCeros + 1;
		}
		
		// *** otra forma
		/*if(numeroIngresado > 0)
		{
			sumaPositivos = numeroIngresado + sumaPositivos;
			cantidadPositivos = cantidadPositivos + 1;
		}
		else //si entro es que numero ingresado es negativo o cero
		{
			if(numeroIngresado < 0)
			{
				sumaNegativos = numeroIngresado + sumaNegativos;
				cantidadNegativos = cantidadNegativos + 1;
			}
			else //si entro seguro es cero
			{
				cantidadCeros = cantidadCeros + 1;
			}
		}*/
		
		if(numeroIngresado % 2 == 0) //Si es par...
		{
			cantidadPares = cantidadPares + 1;
		}	

		respuesta = confirm("Desea ingresar otro numero?");
	}//fin del while
	
	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;
	
	document.write("suma de negativos es: " + sumaNegativos + "<br>");
	document.write("suma de positivos es: " + sumaPositivos + 	"<br>");
	document.write("cantidad de numeros positivos: " + cantidadPositivos + "<br>");
	document.write("cantidad de numeros negativos: " + cantidadNegativos + "<br>");
	document.write("cantidad de numeros pares: " + cantidadPares + "<br>");
	document.write("cantidad de Ceros: " + cantidadCeros + "<br>");
	document.write("diferencia entre la suma de positivos y negativos es: " 
	+ diferenciaPositivosNegativos + "<br>");

	if(cantidadPositivos != 0)
	{
		promedioPositivos = sumaPositivos / cantidadPositivos;
		//alert("usted no ingreso numeros positivos, por lo tanto su promedio no esta definido");
		document.write("el promedio de positivos es: " + promedioPositivos.toFixed(2) + "<br>");
	}
	else
	{
		document.write("Usted no ingreso numeros positivos, por tanto su promedio" +  
			" no esta definido" + "<br>");
	}	

	if(cantidadNegativos != 0)
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
		//alert("usted no ingreso numeros negativos, por lo tanto su promedio no esta definido");
		document.write("el promedio de negativos es: " + promedioNegativos.toFixed(2) + "<br>");
	}
	else
	{
		document.write("Usted no ingreso numeros negativos, por tanto su promedio" +  
			" no esta definido" + "<br>");
	}


}//FIN DE LA FUNCIÓN