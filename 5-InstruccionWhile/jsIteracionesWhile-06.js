// Radetich Pedro
// Div Z

/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	
	contador = 0;
	acumulador = 0;


	while(contador < 5)
	{
		numeroIngresado =  prompt("ingrese un numero");
		// console.log(typeof(numeroIngresado));
		numeroIngresado = parseInt(numeroIngresado); // debo asegurarme un entero 
		                                              //ya que por prompt viene como string
		// console.log(typeof(numeroIngresado));
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	}
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador/5;
}//FIN DE LA FUNCIÓN

// entregado