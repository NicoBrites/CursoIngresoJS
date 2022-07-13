/*
Nicolas Brites
DIV X

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    const costolamp = 35 ;
    let cantLamp;
    let marcaLamp;
    let precio;
    cantLamp = document.getElementById("txtIdCantidad").value;
    cantLamp = parseInt(cantLamp);
    marcaLamp =  document.getElementById("Marca").value;

    if (cantLamp >= 6)
    {
        precio = (cantLamp*costolamp)/2
        document.getElementById("txtIdprecioDescuento").value = precio
    }
    //EJERCICIO B
    else if (cantLamp == 5)
    {
        if (marcaLamp == "ArgentinaLuz")
        {
            precio = (cantLamp*costolamp)*0.4
            document.getElementById("txtIdprecioDescuento").value = precio
        }
        else
        {
            precio = (cantLamp*costolamp)*0.3
            document.getElementById("txtIdprecioDescuento").value = precio
        }
        
    }
    //EJERCICIO C
    else if (cantLamp == 4)
    {
        if (marcaLamp == "ArgentinaLuz" || marcaLamp == "FelipeLamparas")
        {
            precio = (cantLamp*costolamp)*0.25
            document.getElementById("txtIdprecioDescuento").value = precio
        }
        else
        {
            precio = (cantLamp*costolamp)*0.2
            document.getElementById("txtIdprecioDescuento").value = precio
        }
    }
    //EJERCICIO D
    else if (cantLamp == 3)
    {
        if (marcaLamp == "ArgentinaLuz" )
        {
            precio = (cantLamp*costolamp)*0.15
            document.getElementById("txtIdprecioDescuento").value = precio
        }
        else if (marcaLamp == "FelipeLamparas")
        {
            precio = (cantLamp*costolamp)*0.1
            document.getElementById("txtIdprecioDescuento").value = precio
        }
        else
        {
            precio = (cantLamp*costolamp)*0.05
            document.getElementById("txtIdprecioDescuento").value = precio
        }
    }
    //EJERCICIO E
    if (precio > 120)
    {
        precio = precio*0.1
        alert("Usted pago " + precio + " de IIBB.")
    }
}
