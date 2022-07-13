/*
Nicolas Brites
DIV X
*/
function mostrar()
{
let edad;
edad = document.getElementById("txtIdEdad").value;
edad = parseInt(edad);
if (edad>=18 || edad<=13)
{
	alert("No es adolecente");
}
}
//FIN DE LA FUNCIÓN