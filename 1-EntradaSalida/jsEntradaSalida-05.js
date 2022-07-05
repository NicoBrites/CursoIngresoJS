/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;
	let edad;
    nombreIngresado = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	alert("Su nombre es " + nombreIngresado + ", y su edad es " + edad + " años.");
}

