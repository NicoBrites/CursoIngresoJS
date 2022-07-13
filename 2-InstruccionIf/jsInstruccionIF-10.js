/*
Nicolas Brites
DIV X
*/
function mostrar()
{
	let numero;
	numero = Math.floor(Math.random()*10)+1;
	//Genero el número RANDOM entre 1 y 10 
	if (numero>8)
	{
		alert("EXCELENTE");	
	}
	else if(numero>3)
	{
		alert("APROBÓ");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}
	
}//FIN DE LA FUNCIÓN