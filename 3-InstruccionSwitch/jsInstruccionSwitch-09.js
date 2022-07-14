function mostrar()
{
	let destino;
	let estacion;
	let precio = 15000;
	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	switch (estacion)
	{
		case "Invierno":
			switch(destino)
			{
			case "Bariloche":
                 precio = precio*1.2;
				 alert("El precio a bariloche en invierno es :$" + precio);
			break;
			case "Cataratas":
				precio = precio - precio*0.1;
				alert("El precio a Cataratas en invierno es :$" + precio);
			break;
			case "Cordoba":
				precio = precio - precio*0.1;
				alert("El precio a Cordoba en invierno es :$" + precio);
			break;
			case "Mar del plata":
				precio = precio - precio*0.2;
				alert("El precio a Mar del Plata en invierno es :$" + precio);
			break;
			}
		break;
		case "Verano":
			switch(destino)
			{
			case "Bariloche":
				 precio = precio - precio*0.2;
				 alert("El precio a bariloche en verano es :$" + precio);
			break;
			case "Cataratas":
				precio = precio + precio*0.1;
				alert("El precio a Cataratas en verano es :$" + precio);
			break;
			case "Cordoba":
				precio = precio + precio*0.1;
				alert("El precio a Cordoba en verano es :$" + precio);
			break;
			case "Mar del plata":
				precio = precio + precio*0.2;
				alert("El precio a Mar del Plata en verano es :$" + precio);
			break;
			}
		break;
		case "Otoño":
			switch(destino)
			{
			case "Bariloche":
				 precio = precio + precio*0.1;
				 alert("El precio a bariloche en otoño es :$" + precio);
			break;
			case "Cataratas":
				precio = precio + precio*0.1;
				alert("El precio a Cataratas en otoño es :$" + precio);
			break;
			case "Cordoba":
				alert("El precio a Cordoba en otoño es :$" + precio);
			break;
			case "Mar del plata":
				precio = precio + precio*0.1;
				alert("El precio a Mar del Plata en otoño es :$" + precio);
			break;	
			}
		break;	
		case "Primavera":
			switch(destino)
			{
			case "Bariloche":
				 precio = precio + precio*0.1;
				 alert("El precio a bariloche en primavera es :$" + precio);
			break;
			case "Cataratas":
				precio = precio + precio*0.1;
				alert("El precio a Cataratas en primavera es :$" + precio);
			break;
			case "Cordoba":
				alert("El precio a Cordoba en primavera es :$" + precio);
			break;
			case "Mar del plata":
				precio = precio + precio*0.1;
				alert("El precio a Mar del Plata en primavera es :$" + precio);
			break;	
			}
		break;
	}

}
//FIN DE LA FUNCIÓN