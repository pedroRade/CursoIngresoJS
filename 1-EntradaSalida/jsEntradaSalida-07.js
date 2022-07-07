/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

// Pedro Radetich

function sumar()
{
	var numUno;
	var numDos;
	var suma;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numUno = parseInt(numUno);

	numDos = document.getElementById("txtIdNumeroDos").value; 
	numDos = parseInt(numDos); 
	
	suma = numUno + numDos;
	alert("La suma es " + suma);
}



function restar()
{ 
	var numUno;
	var numDos;
	var resta;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numUno = parseInt(numUno);

	numDos = document.getElementById("txtIdNumeroDos").value; 
	numDos = parseInt(numDos); 

	resta = numUno - numDos;
	alert("La resta es " + resta);
}

function multiplicar()
{ 
	var numUno;
	var numDos;
	var producto;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numUno = parseInt(numUno);

	numDos = document.getElementById("txtIdNumeroDos").value; 
	numDos = parseInt(numDos); 

	producto = numUno * numDos;
	alert("El producto es " + producto);	
}

function dividir()
{
	var numUno;
	var numDos;
	var cociente;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numUno = parseInt(numUno);

	numDos = document.getElementById("txtIdNumeroDos").value; 
	numDos = parseInt(numDos); 

	cociente = numUno / numDos;
	alert("El cociente es " + cociente);
}

// Pedro Radetich