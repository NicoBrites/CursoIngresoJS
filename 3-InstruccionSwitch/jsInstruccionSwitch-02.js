function mostrar()
{
	//tomo el mes
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
		break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
		break;
		default:
			alert("Falta para el invierno.");
		break;
	}


}//FIN DE LA FUNCIÓN