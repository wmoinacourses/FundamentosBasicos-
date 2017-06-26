
document.addEventListener("keydown", dibujaMueve)
var vCanvas = document.getElementById("idCanvas");
var papel = vCanvas.getContext("2d");


var teclas =
{
	DOWN: 40, 
	LEFT: 37,
	RIGHT: 39,
	UP: 38
}

var x = 250;
var y = 250;



function dibujarAnimal(imagen, xInicial, yInicial, lienzo)
{	
	cargarCerdo();
	lienzo.drawImage(imagen,xInicial,yInicial);
}


var fondo = {
	url: "tile.png",
	cargaOk:false
};

var vaca = {
	url: "vaca.png",
	cargaOk: false
};

var cerdo = {
	url: "cerdo.png",
	cargaOk: false
};

fondo.imagenFondo= new Image();
fondo.imagenFondo.src= fondo.url;
fondo.imagenFondo.addEventListener("load", cargarFondo);

vaca.imagenVaca= new Image();
vaca.imagenVaca.src= vaca.url;
vaca.imagenVaca.addEventListener("load", cargarVaca);

cerdo.imagenCerdo= new Image();
cerdo.imagenCerdo.src= cerdo.url;
cerdo.imagenCerdo.addEventListener("load", cargarCerdo);


function cargarFondo()
{
	fondo.cargaOk = true;
	dibujar();
}

function cargarVaca()
{
	vaca.cargaOk = true;
	dibujar();

}

function cargarCerdo()
{
	cerdo.cargaOk = true;
	dibujar();
	if(cerdo.cargaOk == true)
	{
		papel.drawImage(cerdo.imagenCerdo,x,y);
	}
}

function dibujaMueve(evento)
{	
	
	switch (evento.keyCode)
	{
		case teclas.UP:
		y= y-1;
		if (cerdo.cargaOk== true)
		{
			console.log(cerdo.imagenCerdo);
			dibujarAnimal(cerdo.imagenCerdo, x-1, y, papel);
		}
		break;

		case teclas.DOWN:
		y= y+1;
		if (cerdo.cargaOk== true)
		{
			console.log(cerdo.imagenCerdo);
			dibujarAnimal(cerdo.imagenCerdo, x-1, y, papel);
		}

		break;

		case teclas.RIGHT:
		x= x+1;
		if (cerdo.cargaOk== true)
		{
			console.log(cerdo.imagenCerdo);
			dibujarAnimal(cerdo.imagenCerdo, x-1, y, papel);
		}
		break;

		case teclas.LEFT:
		x= x-1;
		if (cerdo.cargaOk== true)
		{
			console.log(cerdo.imagenCerdo);
			dibujarAnimal(cerdo.imagenCerdo, x-1, y, papel);
		}
		break;

		case teclas.DOWN:
		//alert("DOWN")
		break;	

		default:
		alert("NOO");
		break;
	}
}

function dibujar ()
{

	if (fondo.cargaOk==true)
	{
		papel.drawImage(fondo.imagenFondo,0,0);
	}

	for (var i=0; i<10;i++)
	{
		if (vaca.cargaOk==true)
		{
			var x = 8* i *6;
			var y = 8* i *8;
			papel.drawImage(vaca.imagenVaca,x,y);
			console.log(vaca.imagenVaca);
		}
	}

}

function aleatorio (min, max)
{
	var resultado;
	resultado = Math.floor(Math.random()* (max-min+1))+min;

	return resultado;
}