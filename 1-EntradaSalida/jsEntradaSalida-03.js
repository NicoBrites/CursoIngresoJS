/*
Nicolas Brites
DIV X
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
    nombreIngresado = document.getElementById("txtIdNombre").value;
	alert("Su nombre es : " + nombreIngresado);
}

