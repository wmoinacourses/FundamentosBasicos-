class packiman
{
	constructor(nombre, vida, ataque)
	{
		this.nombre = nombre;
		this.vida = vida;
		this.ataque = ataque;
		this.tipo = "tierra";
		this.imagene = new Image();
		this.imagene.src= imagenes[this.nombre];
	} 

	hablar()
	{
		alert(this.nombre);
	}

	mostrar()
	{
		document.body.appendChild(this.imagene);
		document.writeln("<p>");
		document.write("<strong>Nombre: "+ this.nombre+"</strong></br>")
		document.write("<strong>Vida: "+ this.vida+"</strong></br>")
		document.write("<strong>Ataque: "+ this.ataque+"</strong></br>")
		document.writeln("</p>");
		document.writeln("<hr>");

	}
}