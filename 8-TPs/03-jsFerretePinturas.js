/*
Nicolas Brites
DIV X
(CORREGI EL parceFloat Y EL .toFixed())
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahr;
    let cent;
    fahr = parseFloat(document.getElementById("txtIdTemperatura").value);
    cent = (fahr - 32) * 5/9 ;
    document.getElementById("txtIdTemperatura").value = fahr.toFixed(2) + " Fahrenheit son " + cent.toFixed(2) + " centígrados." ;
}

function CentigradosFahrenheit () 
{
	let cent;
    let fahr;
    cent = parseFloat(document.getElementById("txtIdTemperatura").value);
    fahr = (cent * 9/5) + 32;
    document.getElementById("txtIdTemperatura").value = cent.toFixed(2) + " centigrados son " + fahr.toFixed(2) + " Fahrenheit." ;
}

