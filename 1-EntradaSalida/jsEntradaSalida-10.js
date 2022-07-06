/*
Nicolas Brites
DIV X
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	importe = parseInt(document.getElementById("txtIdImporte").value);
    importe = importe - (importe /100)*25;
	document.getElementById("txtIdResultado").value = importe;
}
