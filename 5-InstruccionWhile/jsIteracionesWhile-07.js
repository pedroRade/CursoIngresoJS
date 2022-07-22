// ENTREGADO
// Radetich Pedro
// Div

/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

// Se asume que el usuario ingresa al menos 1 número
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado; // variable intermedia por claridad
	
	contador = 0;  
	acumulador = 0;
	respuesta='si'; 
	// numeroIngresado = 0; 

	while(respuesta == "si") // ingreso al menos 1 vez al while
	{	
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
		respuesta = prompt("desea ingresar un numero? si/no");
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / contador;

}//FIN DE LA FUNCIÓN



// Se podria hacer mas limpio con una estructura do-while

// Otra forma
// PROBLEMA: si el usuario decide no ingresar ningun numero sobre el
// final divide por 0
// Solucionado, pero mas largo el codigo

/*function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado; // variable intermedia por claridad
	
	contador = 0;  
	acumulador = 0;
	
	respuesta = prompt("desea ingresar un numero? si/no");
	// console.log("contador: " + contador);
	
	while(respuesta == "si")
	{	
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
		respuesta = prompt("desea ingresar otro numero? si/no");
	}
	
	// console.log("contador: " + contador);

	// con este condicional evito division por cero
	if(contador == 0)
	{
		alert("No se ingreso ningun numero");
	}
	else
	{
		txtIdSuma.value = acumulador;
		txtIdPromedio.value = acumulador / contador;
	}
	
}//FIN DE LA FUNCIÓN
*/