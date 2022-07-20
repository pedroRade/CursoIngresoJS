/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

var numeroIntentado; //agregada por mi

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random() * 100) + 1;
	console.log("numero secreto: " + numeroSecreto);
	
	numeroIntentado = document.getElementById("txtIdNumero").value;
	console.log("su intento: " + numeroIntentado);
	contadorIntentos = 0;
	
	if(numeroSecreto == document.getElementById("txtIdNumero").value)
	{
		contadorIntentos = 1 + contadorIntentos;
		alert("Usted es un ganador!! y en solo " + contadorIntentos + " intentos");
		
	}
	else
	{
		if(numeroIntentado < numeroSecreto)
		{
			alert("falta...");
		}
		else
		{
			alert("se pasó...");
		}
	}

	//alert(numeroSecreto );

}
// "txtIdNumero"
// "txtIdIntentos"

function verificar()
{
	
	// console.log(numeroSecreto);
}