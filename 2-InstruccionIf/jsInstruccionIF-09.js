// Radetich Pedro
// Div Z

/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var randomNum;
	randomNum = Math.floor(Math.random() * 10) + 1;
	
	// alert(randomNum);
	console.log(randomNum);	
}//FIN DE LA FUNCIÓN



// Math.floor((Math.random() * 10) + 1);
// Math.floor(Math.random() * 10) + 1  -> evalua a numero entero
// aleatorio entre 1 y 10