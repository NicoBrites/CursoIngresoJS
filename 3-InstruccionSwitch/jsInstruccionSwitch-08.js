function mostrar()
{
	let puntoCar;
	puntoCar = document.getElementById("txtIdDestino").value;

	switch (puntoCar)
	{
		case "Bariloche":
			alert("Frio.");
		break;
		case "Cataratas":
			alert("Calor.");
		break;
		case "Mar del plata":
			alert("Frio.");
		break;
		default:
			alert("Frio.");
		break;
	}
}//FIN DE LA FUNCIÓN