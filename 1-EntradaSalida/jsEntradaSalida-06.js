/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	
	var numUno;
	var numDos;
	var suma;	

	numUno = txtIdNumeroUno.value;
	numUno = parseInt(numUno);

	numDos = txtIdNumeroDos.value; //(pq esta expresion?)
	numDos = parseInt(numDos); //parseo
	suma = numUno + numDos;


	//    suma = numUno + numDos;

	alert(suma);
}

