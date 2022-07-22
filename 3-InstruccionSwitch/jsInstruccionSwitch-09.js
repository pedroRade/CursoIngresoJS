// Radetich Pedro
// Div Z

/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia 
como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder 
calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	var estacionIngresada; //=txtIdEstacion.value;
	var destino;
	var mensaje;
	var precioBase;
	var precioFinal;
	var descuento;


	destino = document.getElementById("txtIdDestino").value;
	estacionIngresada = document.getElementById("txtIdEstacion").value;

	precioBase = 15000;
	aumento = 0; // porque podria devolver cualquier valor si lo dejo sin asignar
	descuento = 0;

	switch(estacionIngresada)
	{
		case "Verano":
			switch(destino)
			{
				case "Cordoba":
					descuento = 0.2;
				break;

				default: // las demas
					aumento = 0.1;
				break;
			}
		break;

		case "Invierno":
			//mensaje
		break;

		default: //otoño y primavera
		break;
	}

	// cuentas
	// una manera
	descuento = precioBase * descuento;
	aumento = precioBase * aumento;
	precioFinal = precioFinal + aumento - descuento;
	alert("");

}//FIN DE LA FUNCIÓN

// id="txtIdEstacion"

// <select id="txtIdEstacion">
// 					<option value="Invierno">Invierno</option>
// 					<option value="Verano">Verano</option>
// 					<option value="Otoño">Otoño</option>
// 					<option value="Primavera">Primavera</option>
// 				</select>

// <select id="txtIdDestino">
// 					<option value="Bariloche">Bariloche</option>
// 					<option value="Cataratas">Cataratas</option>
// 					<option value="Mar del plata">Mar del plata</option>
// 					<option value="Cordoba">Cordoba</option>
				


// id="txtIdDestino"
				// 	<option value="Bariloche">Bariloche</option>
				// 	<option value="Cataratas">Cataratas</option>
				// 	<option value="Mar del plata">Mar del plata</option>
				// 	<option value="Ushuaia">Ushuaia</option>
				// </select>