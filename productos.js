let nombre = prompt ("ingrese su nombre");
alert ("Hola"+" "+nombre+" "+"bienvenido a la pagina de los Piratas Celestes De Alberdi");

let entrada2 = prompt("Te gusto algun producto?");
if ((entrada2 == "si") || (entrada2 == "SI")) {
    alert("Perfecto, te ayudaremos a elegir correctamente");
} else {
    alert("sigue disfrutando de nuestro contenido");
}

let entrada3 = prompt("INGRESAR EL NOMBRE DE TU PRODUCTO");
if ((entrada3 == "Musculosa Negra") || (entrada3 == "musculosa negra")) {
    alert("ELEGISTE Musculosa Negra, su precio es $ 2000");
}else if ((entrada3 == "Musculosa roja") || (entrada3 == "musculosa roja")) {
    alert("ELEGISTE Musculosa Roja, su precio es $ 2000");
}else if ((entrada3 == "Short") || (entrada3 == "short")) {
    alert("ELEGISTE Short, su precio es $ 2000");
}
else {
    alert("sigue disfrutando de nuestro contenido"); 
}

const iva = 0.21
let preciosiniva = (2000-2000*iva);
alert ("el precios sin iva es"+" "+ "$"+preciosiniva);


