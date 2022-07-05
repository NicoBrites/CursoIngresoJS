/*
Nicolas Brites
DIV X
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
 let numero1;
 let numero2;
 let numResultado;
 numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
 numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
 numResultado = numero1 + numero2;
 alert("La suma es :" + numResultado);	
}
function restar()
{
 let numero1;
 let numero2;
 let numResultado;
 numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
 numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
 numResultado = numero1 - numero2;
 alert("La resta es :" + numResultado);
}
function multiplicar()
{ 
 let numero1;
 let numero2;
 let numResultado;
 numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
 numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
 numResultado = numero1 * numero2;
 alert("La multiplicacion es :" + numResultado);
}
function dividir()
{
 let numero1;
 let numero2;
 let numResultado;
 numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
 numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
 numResultado = numero1 / numero2;
 alert("La division es :" + numResultado);
}

