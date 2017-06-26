var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncillo");

boton.addEventListener("click", dibujar_por_click);
console.log("Botoevent" + boton)

function dibujar_por_click()
{

	var lineas = parseInt(texto.value);
	var linea_base = parseInt(texto.value);

	var l = 0;

	//while (lineas <= 300)
	//{
	//	dibujarLinea("gray",0,l,lineas,300);	
	//	l = l + 10;
	//	lineas = lineas + 10;
	//	console.log ("linea" + l);
	//}

	for (l=0; lineas<=300 ; l++)
	{
		dibujarLinea("gray",0,l,lineas,300);	
		l = l + linea_base;
		lineas = lineas + linea_base;
		console.log ("linea" + l);
	}

	lineas = 300;

	for (l=300; lineas>=0 ; l--)
	{
		dibujarLinea("gray",300,l,lineas,0);	
		l = l - 10;
		lineas = lineas - 10;
		console.log ("linea" + l);
	}
}

// JavaScript Document
var d = document.getElementById("dibujo");
var lienzo= d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();
}

//dibujarLinea("blue",1,1,1,299);
//dibujarLinea("#AAFA",1,299,299,299);