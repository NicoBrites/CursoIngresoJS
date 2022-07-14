function mostrar()
{
	let puntoCar;
	puntoCar = document.getElementById("txtIdDestino").value;

	switch (puntoCar)
	{
		case "Bariloche":
			alert("Oeste");
		break;
		case "Cataratas":
			alert("Norte");
		break;
		case "Mar del plata":
			alert("Este");
		break;
		default:
			alert("Sur");
		break;
	}
}//FIN DE LA FUNCIÓN