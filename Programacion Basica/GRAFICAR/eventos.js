var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncillo");

boton.addEventListener("click", dibujar_por_click);
console.log("Botoevent" + boton)

function dibujar_por_click()
{
	console.log(texto)
	var x= texto.value;
	//alert(x);
}