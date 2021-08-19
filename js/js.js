var boton = document.getElementById('Enviar');

function calcular(){

var fecha = document.getElementById('fecha').value;
var nombre = document.getElementById('nombre').value;
var mensaje = document.getElementById('bienvenida');

var respuestaNiño = "Hola niño "+ nombre
var respuestaSeñor = "Hola señor "+ nombre

if (fecha>=2003){
   mensaje.textContent = respuestaNiño
}
else{
    mensaje.textContent = respuestaSeñor
}
}

function cajaTexto (){

mensaje.classList.add('mensaje');

}

boton.addEventListener('click', cajaTexto);
boton.addEventListener('click', calcular);