/*var z = aleatorio(10,20);
document.write(z);*/
/*var z;

for ( var i = 1; i <= 10; i++) {
      z = aleatorio(-10,2);
	document.write(z+';');
}
*/

var vCanvas = document.getElementById("idCanvas");
var papel = vCanvas.getContext("2d");

var fondo = {
	url: "tile.png",
	cargaOk:false
};

var vaca = {
	url: "vaca.png",
	cargaOk: false
};

var pollo = {
	url: "pollo.png",
	cargaOk: false
};

var cerdo = {
	url: "cerdo.png",
	cargaOk: false
};



fondo.imagenFondo= new Image();
fondo.imagenFondo.src= fondo.url;
fondo.imagenFondo.addEventListener("load", cargarFondo);


pollo.imagenPollo= new Image();
pollo.imagenPollo.src= pollo.url;
pollo.imagenPollo.addEventListener("load", cargarPollo);


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


function cargarPollo()
{
	pollo.cargaOk = true;
	dibujar();

}


function cargarCerdo()
{
	cerdo.cargaOk = true;
	dibujar();

}


function dibujar ()
{
	var cantidad = aleatorio (1,10);
	
	if (fondo.cargaOk==true)
	{
		papel.drawImage(fondo.imagenFondo,0,0);
	}

	for (var i=0; i< cantidad; i++)
	{
		
		if (cerdo.cargaOk==true)
		{
			var x = 80* aleatorio (0,6);
			var y = 80* aleatorio (0,6);
			papel.drawImage(cerdo.imagenCerdo,x,y);
			console.log(cerdo.imagenCerdo);
		}
		if (vaca.cargaOk==true)
		{
			var x = 80* aleatorio (0,6);
			var y = 80* aleatorio (0,6);
			papel.drawImage(vaca.imagenVaca,x,y);
		}
		if (pollo.cargaOk==true)
		{
			var x = 80* aleatorio (0,6);
			var y = 80* aleatorio (0,6);
			papel.drawImage(pollo.imagenPollo,x,y);
		}
	}
}


function aleatorio (min, max)
{
	var resultado;
	resultado = Math.floor(Math.random()* (max-min+1))+min;

	return resultado;
}