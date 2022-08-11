/* Enunciado:

Se ingresan dos notas entre 1 y 10, el nombre y el genero ("M", "F", "NB") 
y asistencias sobre un total de 20 clases de 40 estudiantes.

Se pide: 
1. El genero del estudiante con mayor promedio de notas.
2. El nombre de la estudiante que más faltó (solo puede ser una).
3. la cantidad de estudiantes de genero masculino o no binario, 
que hayan asistido a un total de entre 15 y 20 clases.
4. promedio de asistencia de todos los estudiantes.
5. Porcentaje de estudiantes de cada género.
*/

// minimo de asistencias

function mostrar()
{
	var nota1;
	var nota2;
	var genero;
	var nombre;
	var asistencias;
	
	//punto 1
	var promedio;
	var maximoPromedio;
	var generoMaximoPromedio;

	var minimoAsistencias;
	// var banderaFemeninaQueMasFalto = true;

	//punto 3
	var contadorAsistenciaMNB;

	contadorAsistenciaMNB = 0;

	// 4. promedio de asistencia de todos los estudiantes.
	var sumaAsistencias;
	var promedioAsistencias;
	sumaAsistencias = 0;



// 5. Porcentaje de estudiantes de cada género.
	var contadorFemeninos;
	var contadorMasculinos;
	var contadorNoBinarios;
	var porcentajeFemenino; // sera un float?


	contadorMasculinos = 0;
	contadorFemeninos = 0;
	contadorNoBinarios = 0;
	
	var total;
	total = 5; // solo para prueba

	contador = 0;

	while(contador < total)
	{
		nota1 = prompt("ingrese la primer nota");
		nota1 = parseInt(nota1);
		
		while(nota1 > 10 || nota1 < 1)
		{
			nota1 = prompt("Error de ingreso, vuelva a ingresar la nota");
		}

		nota2 = prompt("ingrese la segunda nota");
		nota2 = parseInt(nota2);

		while(nota2 > 10 || nota2 < 1)
		{
			nota2 = prompt("Error de ingreso, vuelva a ingresar la nota");
		}

		promedio = (nota1 + nota2);
		if(promedio > maximoPromedio || contador == 0)
		{
			maximoPromedio = promedio;
		}

		//2. El nombre de la estudiante que más faltó (solo puede ser una).
		if(genero == "F") // declarada y asignada arriba var banderaFemeninaQueMasFalto = true;
		{
			//busco maximo o min
			if(asistencias < minimoAsistencias || banderaFemeninaQueMasFalto)
			{
				minimoAsistencias = asistencias;

				banderaFemeninaQueMasFalto = false;
			}
		}

		// punto 3
		// 3. la cantidad de estudiantes de genero masculino o no binario, 
		// que hayan asistido a un total de entre 15 y 20 clases.
		if((genero == "M" || genero == "NB") && asistencias > 14 && asistencias < 21)
		{
			contadorAsistenciaMNB++;
		}

		// 4. promedio de asistencia de todos los estudiantes.
		

		sumaAsistencias = asistencias + sumaAsistencias;


		switch(genero)
		{
			case "M":
				contadorMasculinos++;
				if(asistencias > 14 && asistencias < 21)
				{

					
				}

			break;
			
			case "F":
				contadorFemeninos++;
				// construir la asistencia aqui //doble pregunta sobre "F"
			break;
			
			default: // case NB
				contadorNoBinarios++;
			break;
		}


		contador = contador + 1;

	}

	// salidas 
	promedio = sumaAsistencias / contador;
	porcentajeFemenino = (contadorFemeninos / contador) * 100;
	// contador sale  del ciclo con 40
	// 5. Porcentaje de estudiantes de cada género.
	// porcentajeFemenino = to.float(porcentajeFemenino, 2) // no
	// document.write("el porcentaje de alumnos femeninos 
	// es " + (contadorFemeninos / contador) * 100 

}