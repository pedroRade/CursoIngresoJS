// Radetich Pedro
// Div Z

/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4

OBSERVACIÓN: aunque de la consigna no se infiere la situacion
en caso de nota == 4 (se indefine), asumo que "APROBÓ" vale tambien
en este caso.
*/

function mostrar()
{
	var notaAleatoria;
	
	//Genero un número entero aleatorio entre 1 y 10
	notaAleatoria = Math.floor((Math.random() * 10) + 1);
	
	console.log("nota:" + notaAleatoria);

	if(notaAleatoria > 8) //Otra opcion: (notaAleatoria == 9 || notaAleatoria == 10)
	{
		// alert("EXCELENTE");
		console.log("EXCELENTE");
	}
	else
	{
		if(notaAleatoria > 3) //Asumo que con 4 apruebo
		{
			// alert("APROBÓ");
			console.log("APROBÓ");
		}
		else
		{
			// alert("Vamos,la próxima se puede")
			console.log("Vamos,la próxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN