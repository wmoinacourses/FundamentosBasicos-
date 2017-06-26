// require carga una libreria instaldo en el computador en este caso express
// carga express como una funcion entera

var express  = require ('express')

var aplicacion = express() // creamos una instancia del servidor express

// inicio similar al generador de un evento que se va hacer cuando arranque esta url
aplicacion.get('/', inicio)

function inicio(peticion, resultado) {
  resultado.send('Este es el <strong>home</strong>')
}

aplicacion.get('/cursos', cursos)

function cursos(peticion, resultado) {
  resultado.send('Los curso de <h1>dlogic</h1>')
}

aplicacion.listen(8080)
