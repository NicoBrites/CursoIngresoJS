/*
Nicolas Brites
DIV X
(CORREGI EL parceFloat Y EL .toFixed())
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let producto1;
	let producto2;
	let producto3;
    let suma;
	producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	suma = producto1 + producto2 + producto3;
	suma = suma.toFixed(2);
	alert("El resultado es :" + suma);
}
function Promedio () 
{
    let producto1;
	let producto2;
	let producto3;
    let promedio;
	producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	promedio = (producto1 + producto2 + producto3)/3 ;
	promedio = promedio.toFixed(2);
	alert("El promedio es :" + promedio);
}
function PrecioFinal () 
{
	let producto1;
	let producto2;
	let producto3;
    let precioFinal;
	producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	precioFinal = (producto1 + producto2 + producto3)*1.21;
	precioFinal = precioFinal.toFixed(2);
	alert("El resultado es :" + precioFinal);
}