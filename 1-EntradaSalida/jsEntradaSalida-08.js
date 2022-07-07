/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;
	var cartel;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	
	divisor = document.getElementById("txtIdNumeroDivisor").value;
	
	dividendo = parseInt(dividendo);
	
	divisor = parseInt(divisor);

	resto = dividendo % divisor;

	cartel = "El resto es " + resto;
	
	alert(cartel); 
}

// Pedro Radetich
// Div z