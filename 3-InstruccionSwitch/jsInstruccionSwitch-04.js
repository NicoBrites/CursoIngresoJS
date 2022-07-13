function mostrar()
{
	//tomo el mes
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Abril":
		case "Junio":
		case "Noviembre":
		case "Septiembre":
			alert("Tiene 30 días.");
		break;
		case "Febrero":
			alert("Tiene 28 días.");
		break;
		default:
			alert("Tiene 31 días.");
		break;
	}




/*Tienen 31 días: Enero, marzo, mayo, julio, agosto, octubre y diciembre. Tienen 30 días: Abril, junio, septiembre y noviembre. Tienen 28 días: Febrero*/


}//FIN DE LA FUNCIÓN