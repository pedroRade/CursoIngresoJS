/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var incremento;
	//var cartel;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value); 
	//Asigno el valor de txtIdSueldo (que la recibe por caja) a la variable sueldo     

	incremento = sueldo * 0.1; //equivale al 10 por cien de sueldo
	
	sueldoIncrementado = incremento + sueldo; 

	document.getElementById("txtIdResultado").value = sueldoIncrementado;
	
}

//"txtIdSueldo"
//"txtIdResultado"

// Pedro Radetich
// Div z