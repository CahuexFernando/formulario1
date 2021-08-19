var boton = document.getElementById("Enviar");
var mensaje = document.getElementById("bienvenida");

nombre=("nombre");
fecha=("fecha");
function calcular(){
var nombre = document.getElementById("nombre").value;
var fecha = document.getElementById("fecha").value;

if (fecha <= 2003){
    alert ('Hola señor '+nombre);
}
else{
    alert ('Hola niño '+nombre);
}
}
function cajaTexto (){
    mensaje.classList.remove('mensaje');
    mensaje.classList.add('mensaje2');
}

boton.addEventListener('click',cajaTexto);
boton.addEventListener('click',calcular);