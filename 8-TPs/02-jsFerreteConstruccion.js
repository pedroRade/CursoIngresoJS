/* Radetich, Pedro
   Div Z

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetroTerreno;
	var alambreTotal;
	var imprime; // o cartel o mensaje

	largoTerreno = document.getElementById("txtIdLargo").value;
	anchoTerreno = document.getElementById("txtIdAncho").value;

	largoTerreno = parseFloat(largoTerreno);
	anchoTerreno = parseFloat(anchoTerreno);

	perimetroTerreno = 2 * (largoTerreno + anchoTerreno); 
	alambreTotal = (3 * perimetroTerreno).toFixed(2); // trunco en ultima cuenta
	imprime = "Se deben comprar " + alambreTotal + " m de alambre"
	alert(imprime);
}
// "txtIdLargo"
// "txtIdAncho"






function Circulo () 
{
	var radioCirculo;
	var perimetroCirculo;
	var alambreTotal;
	var mensaje;

	radioCirculo = document.getElementById("txtIdRadio").value;
	radioCirculo = parseFloat(radioCirculo);

	perimetroCirculo = 2 * radioCirculo * Math.PI; //Se invoca a constante PI
	alambreTotal  = (3 * perimetroCirculo).toFixed(2); //Se trunca a 2 decimales
	mensaje = "Se deben comprar " + alambreTotal + " m de alambre";
	alert(mensaje);	
}
// "txtIdRadio"



function Materiales () 
{
	var largoContrapiso;
	var anchoContrapiso;
	var areaContrapiso;
	var bolsasDeCemento;
	var bolsasDeCal;
	var imprime;

	largoContrapiso = document.getElementById("txtIdLargo").value;
	anchoContrapiso = document.getElementById("txtIdAncho").value;

	largoContrapiso = parseFloat(largoContrapiso);
	anchoContrapiso = parseFloat(anchoContrapiso);

	areaContrapiso = largoContrapiso * anchoContrapiso; //Se asume rectangular
	
	bolsasDeCemento = parseInt(areaContrapiso * 2); //cantidad de bolsas debe ser un entero
	
	bolsasDeCal = parseInt(areaContrapiso * 3);
	
	imprime = "Se necesitaran " + bolsasDeCemento + " y bolsas de cemento " + bolsasDeCal + 
	" bolsas de cal";
	
	alert(imprime);
}
// "txtIdLargo"
// "txtIdAncho"
