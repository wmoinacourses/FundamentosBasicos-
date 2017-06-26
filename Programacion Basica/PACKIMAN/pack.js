// se crean los indices por los valores asignados como indicadores.
var imagenes = [];

imagenes["Cauchin"]="vaca.png";
imagenes["pokacho"]="pollo.png";
imagenes["tosinauro"]="cerdo.png";

var coleccion = [];
// con push se coloca un indicador al array.
coleccion.push(new packiman("Cauchin",12,12));
coleccion.push(new packiman("pokacho",11,44));
coleccion.push(new packiman("tosinauro",23,33));

for( var indice of coleccion)
{
	//in itera sobre el indice
	//of itera sobre el objeto.
	indice.mostrar();
}

for (var x in coleccion[0])
{
	console.log(x);
}