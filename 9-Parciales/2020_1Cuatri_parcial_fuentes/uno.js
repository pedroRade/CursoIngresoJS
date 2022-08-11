// Radetich Pedro
// Div Z

/******************************************************************************
Ejercicio 1
"El bombon asesino"
La empresa nos encarga una app para poder registrar el gasto de materias primas para la elaboracion 
de sus bombones rellenos. Para ello se ingresa dia a dia, durante un mes los siguientes datos 
expresados en Kg (validar):
*Cantidad de chocolate negro
*Cantidad de almendras picadas
*Cantidad de dulce de leche
Se necesita saber:
a) Del total en kg de todos los productos, el porcentaje de cada producto.
b) El dia que menos chocolate negro se gastó (por ejemplo el dia 3 se gasto menos chocolate)
c) Se sabe que para producir 1000 bombones mensuales se necesitan 30 kg de chocolate negro,
5 kg de almendras picadas y 20 kg de dulce de leche, informar si los insumos alcanzaron para dicha 
producción.
*******************************************************************************/
// Se asume al menos un ingreso, los kg deben ser reales mayores que cero
// Asumo mes de 30 dias (30 cargas)
function mostrar()
{
	//ingreso de datos
	var cantidadChocolateNegro; //en kg
	var cantidadAlmendraPicada;
	var cantidadDulceDeLeche;
  	var totalChocolate;
	var totalAlmendra;
	var totalDulce;


	var contador;
	var porcentajeChocolate;
	var porcentajeAlmendra;
	var porcentajeDulceLeche;
	var totalTodosProductos;
	var minimaCantidadChocolate;
	var diaDeMinimoChoco;
	var flagEsPrimerChoco;
	

	totalDulce = 0;
	totalAlmendra = 0;
	totalChocolate = 0;
	cantidadChocolateNegro = 0;
	cantidadAlmendraPicada = 0;
	cantidadDulceDeLeche = 0;
	contador = 0;
	flagEsPrimerChoco = true;
	const TOTAL = 2;

	while(contador < TOTAL)
	{
		//ingreso y validacion chocolate
		cantidadChocolateNegro =  prompt("ingrese la cantidad en kg de chocolate negro");
		cantidadChocolateNegro = parseFloat(cantidadChocolateNegro); //puede ser con decimales al tratarse de kg
		
		while(cantidadChocolateNegro < 0)//mientras las cantidades sean negativas...
		{
			cantidadChocolateNegro = prompt("error de ingreso, reingrese la cantidad de chocolate negro en kg (numero positivo)");
			cantidadChocolateNegro = parseFloat(cantidadChocolateNegro);
		}

		//ingreso y validacion almendra
		cantidadAlmendraPicada =  prompt("ingrese la cantidad en kg de almendra picada");
		cantidadAlmendraPicada = parseFloat(cantidadAlmendraPicada);
		
		while(cantidadAlmendraPicada < 0)
		{
			cantidadAlmendraPicada = prompt("error de ingreso, reingrese la cantidad de almendra picada en kg (numero positivo)");
			cantidadAlmendraPicada = parseFloat(cantidadAlmendraPicada);
		}
		
		//ingreso y validacion dulce
		cantidadDulceDeLeche =  prompt("ingrese la cantidad en kg de de dulce  de leche");
		cantidadDulceDeLeche = parseFloat(cantidadDulceDeLeche);
		
		while(cantidadDulceDeLeche < 0)
		{
			cantidadDulceDeLeche = prompt("error de ingreso, reingrese la cantidad de dulce de leche en kg (numero positivo)");
			cantidadDulceDeLeche = parseFloat(cantidadDulceDeLeche);
		}
		

		// a) Del total en kg de todos los productos, el porcentaje de cada producto.
		//calculo totales
		totalChocolate = totalChocolate + cantidadChocolateNegro;
		totalAlmendra = totalAlmendra + cantidadAlmendraPicada;
		totalDulce = totalDulce + cantidadDulceDeLeche;

		// b) El dia que menos chocolate negro se gastó (por ejemplo el dia 3 se gasto menos chocolate)
		//buscar un minimo de kg de chcoclate y guardar el dia
		if(cantidadChocolateNegro < minimaCantidadChocolate || flagEsPrimerChoco)
		{
			minimaCantidadChocolate = cantidadChocolateNegro;
			diaDeMinimoChoco = contador + 1 ; //pues no existe dia cero
			flagEsPrimerChoco = false;
		}
		
		contador++;
	} 

	totalTodosProductos = totalChocolate + totalDulce + totalAlmendra; //todas estas expresiones en kg
	
	porcentajeAlmendra = (totalAlmendra * 100) / totalTodosProductos;
	
	porcentajeChocolate = (totalChocolate * 100) / totalTodosProductos;
	
	porcentajeDulceLeche = (totalDulce * 100) / totalTodosProductos;

	console.log("el porcentaje de chocolate es del " + porcentajeChocolate.toFixed(2) + " %");
	console.log("el porcentaje de almendra es del " + porcentajeAlmendra.toFixed(2) + " %");
	console.log("el porcentaje de dulce de leche es del " + porcentajeDulceLeche.toFixed(2) + " %");
	console.log("el dia " + diaDeMinimoChoco + " se gasto menos chocolate");

	//c) Se sabe que para producir 1000 bombones mensuales se necesitan 30 kg de chocolate negro,
		// 5 kg de almendras picadas y 20 kg de dulce de leche, informar si los insumos alcanzaron para dicha 
		// producción.

	if(totalChocolate >= 30 && totalAlmendra >= 5 && totalDulce >= 20)//si las cantidades en kg son al menos esas...
	{
		console.log("las cantidades de insumos alcanzan para producir 1000 bombones"); //informo
	}	
	else
	{
		console.log("las cantidades de insumos disponibles no alcanzan para producir 1000 bombones");
	}

}//FIN DE FUNCION