/*
Nicolas Brites
DIV X
(CORREGI EL parceFloat Y EL .toFixed())
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerr;
	let anchoTerr;
    let alambre;
	largoTerr = parseFloat(document.getElementById("txtIdLargo").value);
	anchoTerr = parseFloat(document.getElementById("txtIdAncho").value);
	alambre = ((largoTerr * 2) + (anchoTerr * 2)) * 3;
	alambre = alambre.toFixed(2);
	alert("Se necesitan " + alambre + " metros de alambre");
}
function Circulo () 
{

	let radioTerr;
    let alambre;
    let pi = 3.141592;
	radioTerr = parseFloat(document.getElementById("txtIdRadio").value);
	alambre = ((radioTerr*2)*pi)*3;
	alambre = alambre.toFixed(2);
	alert("Se necesitan " + alambre + " metros de alambre");
}
function Materiales () 
{
	let largoTerr;
	let anchoTerr;
    let superficieTerr;
    let bolsaCemento;
    let bolsaCal;

	largoTerr = parseFloat(document.getElementById("txtIdLargo").value);
	anchoTerr = parseFloat(document.getElementById("txtIdAncho").value);

	superficieTerr = largoTerr * anchoTerr;
    bolsaCemento = superficieTerr*2;
    bolsaCal= superficieTerr*3;

	superficieTerr = superficieTerr.toFixed(2);
	bolsaCemento = bolsaCemento.toFixed(2);
	bolsaCal = bolsaCal.toFixed(2);

	alert("Se necesitan " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal parar cubrir toda la superficie del terreno, que mide " + superficieTerr + " metros cuadrados");
}