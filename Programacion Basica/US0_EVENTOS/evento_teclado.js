document.addEventListener("keydown", dibujarTeclado);
var teclas =
{
	DOWN: 40, 
	LEFT: 37,
	RIGHT: 39,
	UP: 38
}
console.log(teclas);
var area = document.getElementById("area_dibujo");
var papel = area.getContext("2d");

var x = 150;
var y = 150;

//dibujarLinea("red", 150, 149, 150, 150, papel);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo)
{
	lienzo.beginPath();
	lienzo.lineWidth=1;
	lienzo.lineHeight=1;
	lienzo.strokeStyle = color;
	lienzo.moveTo(xInicial,yInicial);
	lienzo.lineTo(xFinal,yFinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento)
{	
	/*if (evento.keyCode == teclas.UP)
	{
		alert("UP");
	}
	if (evento.keyCode == teclas.DOWN)
	{
		alert("DOWN")
	}
	if(evento.keyCode == teclas.LEFT)
	{
		alert("LEFT")
	}
	if(evento.keyCode == teclas.RIGHT)
	{
		alert("RIGHT")
	}
	*/
	switch (evento.keyCode)
	{
		case teclas.UP:
		y= y-1;
		dibujarLinea("red", x-1, y, x , y , papel);
		break;

		case teclas.DOWN:
		y= y+1;
		dibujarLinea("red", x-1, y, x , y , papel);
		break;

		case teclas.RIGHT:
		x= x+1;
		dibujarLinea("red", x-1, y, x , y , papel);
		break;

		case teclas.LEFT:
		x= x-1;
		dibujarLinea("red", x-1, y, x , y , papel);
		break;

		case teclas.DOWN:
		//alert("DOWN")
		break;	

		default:
		alert("NOO");
		break;
	}
};