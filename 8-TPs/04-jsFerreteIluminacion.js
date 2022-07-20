	// Radetich, Pedro
	// Div Z

	/*4.	Para el departamento de iluminación:
	Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
	A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
	B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si 
	es de otra marca el descuento es del 30%.
	C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento 
	del 25 % y si es de otra marca el descuento es del 20%.
	D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  
	“FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
	E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en 
	informar del impuesto con el siguiente mensaje:
	 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

	 */
	function CalcularPrecio () 
	{
		var cantidadLamparasCompradas;
		var descuento;
		var precioFinal;
		var marquita;
		var ingresosBrutos;

		cantidadLamparasCompradas = document.getElementById("txtIdCantidad").value;
		cantidadLamparasCompradas = parseInt(cantidadLamparasCompradas);
		marquita = document.getElementById("Marca").value;

		precioFinal = cantidadLamparasCompradas * 35;
		

		if(cantidadLamparasCompradas > 5) // si la cantidad de lamparas es al menos 6...
		{
			descuento = 0.5; // tiene un descuento del 50%
		}
		else
		{
			if(cantidadLamparasCompradas == 5)
			{
				if(marquita == "ArgentinaLuz")
				{
					descuento = 0.4;
				}
				else
				{
					descuento = 0.3;
				}
			}
			else
			{
				if(cantidadLamparasCompradas == 4)
				{
					if(marquita == "FelipeLamparas" || marquita == "ArgentinaLuz")
					{
						descuento = 0.25;
					}
					else
					{
						descuento = 0.2;
					}
				}
				else
				{
					if(cantidadLamparasCompradas == 3)
					{
						if(marquita == "ArgentinaLuz")
						{
							descuento = 0.15;
						}
						else
						{
							if(marquita == "FelipeLamparas")
							{
								descuento = 0.1;
							}
							else
							{
								descuento = 0.05;
							}
						}
					}
				}
			}
		}

		descuento = precioFinal * descuento;
		precioFinal = precioFinal - descuento;
		
		document.getElementById("txtIdprecioDescuento").value = "El precio con descuento es de $ " 
		+ precioFinal.toFixed(2);		
		
		if(precioFinal > 120)
		{   
			//alert("Usted pago $" + precioFinal * 0.1 + " de IIBB"); //otra manera sin usar 
																		//var ingresosBrutos
			ingresosBrutos = 0.1 * precioFinal;
			alert("Usted pago $ " + ingresosBrutos + " de IIBB");
		}
	}

	// "ArgentinaLuz"
	// FelipeLamparas
	//"txtIdCantidad"
	//"txtIdprecioDescuento";
	// "Marca"




// Otra manera
/*

if(cantidadLamparasCompradas == 5)
		{
			if(marquita == "ArgentinaLuz")
			{
				descuento = precioFinal * 0.4;
				precioFinal = precioFinal - descuento;
				txtIdprecioDescuento.value = "El precio con descuento es de $" + precioFinal.toFixed(2);
			}
			else
			{
				descuento = precioFinal * 0.3;
				precioFinal = precioFinal - descuento;
				txtIdprecioDescuento.value = "El precio con descuento es de $" + precioFinal.toFixed(2);
			}


		}

	*/




	// if(cantidadLamparasCompradas == 5 && marquita == "ArgentinaLuz")
		// {
		// 	descuento = precioFinal * 0.4;
		// 	precioFinal = precioFinal - descuento;
		// 	txtIdprecioDescuento.value = "El precio con descuento es de $" + precioFinal.toFixed(2);
		// }
		// else
		// {
		// 	if(cantidadLamparasCompradas == 5 && marquita != "ArgentinaLuz")
		// 	{
		// 		descuento = precioFinal * 0.3;
		// 		precioFinal = precioFinal - descuento;
		// 		txtIdprecioDescuento.value = "El precio con descuento es de $" + precioFinal.toFixed(2);
		// 	}
		// }