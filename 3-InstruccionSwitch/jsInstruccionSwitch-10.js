function mostrar()
{
	let destino;
	let estacion;
	
	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	switch (estacion)
	{
		case "Invierno":
			switch(destino)
			{
			case "Bariloche":
                alert("Se viaja.");
			break;
			default:
				alert("No se viaja.");
			break;
			}
		break;
		case "Verano":
			switch(destino)
			{
			case "Cataratas":
			case "Mar del plata":
				alert("Se viaja.");
			break;
			default:
				alert("No se viaja.");
			break;
			}
		break;
		case "Otoño":
			alert("Se viaja.");
		break;	
		case "Primavera":
			switch(destino)
			{
			case "Bariloche":
				 alert("No se viaja.");
			break;
			default:
				alert("Se viaja.");
			break;
			}
		break;
	}
}//FIN DE LA FUNCIÓN