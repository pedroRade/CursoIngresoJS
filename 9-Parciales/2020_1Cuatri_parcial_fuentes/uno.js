


/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

/*
Ingreso:
5 productos
caracterizado por tipo(string), precio(float o int), cantidad (int)
marca (string) y fabricante(string)

Validar precio, cantidad, tipo

Proceso
a)
minimo precios tipo alcohol
cantidad unidades
fabricante

b)
maximo unidades segun tipo


c)


*/

/*function mostrar()
{
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var contador; //para el while principal
	var tipoProducto; //alcohol jabon o barbijo
	var alcoholMasBarato;
	var contadorAlcohol; // contadores para ciclos de cada tipo 
	var contadorJabon;
	var contadorBarbijo;
	var flagAlcohol;
	var fabricanteAlcoholMasBarato;
	var precioAlcoholBarato;
	var tipoConMasUnidades;
	var acumuladorAlcohol; //mejor: cantidadUnidadesAlcohol
	var acumuladorBarbijo;
	var acumuladorJabon;
	var promedioCompra;
	var cantidadDeUnidadesAlcoholMasBarato;
	
	contador = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;

	flagAlcohol = 0;

	while(contador < 5)
	{
		tipoProducto = prompt("ingrese un tipo de producto");

		//validacion del tipo
		while(tipoProducto != "Alcohol" && tipoProducto != "Barbijo" && tipoProducto != "Jabon")
		{

			tipoProducto = prompt("Error. Reingrese el tipo de producto");
		}

	}




	alert("uno");
}
*/


/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{	//variables para ingreso de datos
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var tipoProducto;
	
	var contador; //variable de control macro
	var flagAlcohol; //variable de control para ingresar al menos 1 vez al lazo if

	//variables de proceso
	var precioAlcoholBarato; //variable para buscar un minimo
	var contadorAlcohol; //cantidadComprasAlcohol tambien se usa como var de control interno
	var contadorBarbijo; //cantidadComprasBarbijo
	var contadorJabon;  //cantidadComprasJabon
	var acumuladorAlcohol; //cantidadUnidadesAlcohol
	var acumuladorBarbijo; //cantidadUnidadesBarbijo
	var acumuladorJabon; //cantidadUnidadesJabon
	var tipoConMasUnidades;
	var montoTotalAlcohol; //en las 3 que siguen acumulo el total en pesos de cada tipo
	var montoTotalJabon;
	var montoTotalBarbijo;

	//variables de salida
	var fabricanteAlcoholMasBarato;
	var promedioCompra;
	var cantidadUnidadesAlcoholMasBarato;

	contador = 0;
	contadorAlcohol = 0;
	contadorJabon = 0;
	contadorBarbijo = 0;
	acumuladorJabon = 0;
	acumuladorBarbijo = 0;
	acumuladorAlcohol = 0;
	flagAlcohol = true; //variable de control para entrar al menos 1 vez al ciclo
	montoTotalBarbijo = 0.0;
	montoTotalAlcohol = 0.0;
	montoTotalJabon = 0.0;

	const TOTAL = 2;

	while(contador < TOTAL)
	{
		tipoProducto = prompt("Ingrese un tipo de producto (barbijo, alcohol o jabon");

		while(tipoProducto != "alcohol" && tipoProducto != "jabon" && tipoProducto != "barbijo")
		{
			tipoProducto = prompt("ERROR/ Reingrese el tipo de producto (barbijo, alcohol o jabon");
		}

		precio = prompt("Ingrese el precio (Entre 100 y 300)");
		precio = parseFloat(precio);

		while(precio < 100 || precio > 300)
		{
			precio = prompt("ERROR/ Reingrese el precio (Entre 100 y 300)");
			precio = parseFloat(precio);		
		}

		cantidad = prompt("Ingrese la cantidad (Entre 1 y 1000)");
		cantidad = parseInt(cantidad);

		while(cantidad < 1 || cantidad > 1000)
		{
			cantidad = prompt("ERROR/ Reingrese la cantidad (Entre 1 y 1000)");
			cantidad = parseInt(cantidad);		
		}

		marca = prompt("Ingrese la marca");
		fabricante = prompt("Ingrese el fabricante");

		switch(tipoProducto)
		{
			case "alcohol":
				if(precio < precioAlcoholBarato || flagAlcohol)//Acá está el más barato de los alcoholes
				{
					precioAlcoholBarato = precio;
					cantidadUnidadesAlcoholMasBarato = cantidad;
					fabricanteAlcoholMasBarato = fabricante;
					flagAlcohol = false; //en el proximo ingreso al if directamente compara valores
				}

				contadorAlcohol++; //cuento la cantidad de compras de alcohol de toda marca, en este caso 
									//tambien podria usarse como flag para ingresar seguro 1 vez al if
				
				acumuladorAlcohol += cantidad; //cuenta la cantidad de unidades de ol de toda marca
				montoTotalAlcohol = montoTotalAlcohol + precio; //total en pesos de lo comprado por tipo de producto
			break;

			case "jabon":
				contadorJabon++;
				acumuladorJabon = acumuladorJabon + cantidad;
				montoTotalJabon = montoTotalJabon + precio;
			break;

			default://Barbijo
				contadorBarbijo++;
				acumuladorBarbijo+=cantidad;
				montoTotalBarbijo = montoTotalBarbijo + precio;
			break;
		}
		contador = contador + 1;
	}//fin del while	


	if(acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo)//Alcohol
	{
		tipoConMasUnidades = "alcohol";
		promedioCompra = acumuladorAlcohol / contadorAlcohol;
	}
	else
	{
		if(acumuladorJabon > acumuladorBarbijo)//Jabon
		{	
			tipoConMasUnidades = "jabon";
			promedioCompra = acumuladorJabon / contadorJabon;
		}
		else//Barbijo
		{	
			tipoConMasUnidades = "barbijo";
			promedioCompra = acumuladorBarbijo / contadorBarbijo;
		}
	}
}




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

// Asumo mes de 30 dias (30 cargas)
/*function mostrar()
{
	//ingreso de datos
	var cantidadChocolateNegro; //en kg
	var cantidadAlmendraPicada;
	var cantidadDulceDeLeche;
  	var totalChocolate;
	var totalAlmendra;
	var totalDulce;
// Se asume al menos un ingreso, los kg deben ser reales mayores que cero


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
		console.log("la cantidades de insumos disponibles alcanzan para producir 1000 bombones"); //informo
	}	
	else
	{
		console.log("la cantidades de insumos disponibles no alcanzan para producir 1000 bombones");
	}

}//FIN DE FUNCION*/