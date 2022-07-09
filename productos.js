//let nombre = prompt ("ingrese su nombre");//
//alert ("Hola"+" "+nombre+" "+"bienvenido a la pagina de los Piratas Celestes De Alberdi");

const form = document.getElementById("formulario");
let nombre
let apellido
let prenda
let cantidad
let total

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event)
const datosusuario = event.target
nombre = datosusuario[0].value
apellido = datosusuario[1].value
console.log(nombre,apellido)

    const h3 = document.createElement('h3');
    h3.innerHTML = 'Bienvenido'+" "+ nombre +" "+apellido;
    document.getElementById("test").appendChild(h3);

localStorage.setItem ("Bienvenido", nombre)
let bienvenido = localStorage.getItem ("bienvenido");

})

const form1 = document.getElementById("formularioP");

form1.addEventListener('submit', function (event1) {
    event1.preventDefault();
    console.log(event1)
    const datosusuarioprendas = event1.target
    prenda = datosusuarioprendas[0].value
    cantidad = datosusuarioprendas[1].value
    console.log(prenda,cantidad)

    const h4 = document.createElement('h4');
    h4.innerHTML = 'Elegiste'+" "+ cantidad+" "+"prendas"+" "+"de"+" "+ prenda
    const h5 = document.createElement('h5');
    h5.innerHTML = 'El total de tu compra es igual a'+" "+"$"+(cantidad*2000)
    document.getElementById("testprenda").appendChild(h4);
    document.getElementById("testtotal").appendChild(h5);

    localStorage.setItem("Carrito",cantidad+" "+"prendas"+" "+"de"+" "+prenda)
    let Carrito = localStorage.getItem ("Carrito");
    Swal.fire(
        'Gracias por tu compra',
        'Los piratas celestes de alberdi!',
      )
})


// let entrada2 = prompt("Te gusto algun producto?");
// if ((entrada2 == "si") || (entrada2 == "SI")) {
//     alert("Perfecto, te ayudaremos a elegir correctamente");
// } else {
//     alert("sigue disfrutando de nuestro contenido");
// }

// const prendas = [];
// class Prendas {
//     constructor (codigo,talle, tipoycolor, precio) {
// this.talle = talle;
// this.tipoycolor = tipoycolor;
// this.precio =precio;
// this.codigo = codigo;
//     }
// }
// //let cantidad =parseInt(prompt("Cuantas prendas quieres agregar?"))

// function agregarprendas (arr,cantidad) {
//   for (let i = 0; i < cantidad; i++) {
//    let talle=prompt("ingrese el talle")
//    let precio=parseInt(prompt("ingrese el precio"))
//    let codigo = prompt("ingrese el codigo")
//    let tipoycolor = prompt("ingrese el Tipo de prenda y el color")
//    arr.push(new Prendas (codigo,talle,tipoycolor,precio))
//   }
// }
// function mostrarprendas(arr){
//     arr.forEach(item => {
//         console.log ("Talle: "+ item.talle +"Precio: "+item.precio +"Tipo de prenda y color "+
//         item.tipoycolor+ "Codigo: "+ item.codigo)
//     });
// }


// // agregarprendas(prendas,cantidad)
// // mostrarprendas (prendas)

// // let operacion = prompt ("Ingrese el codigo del producto seleccionado")

// let prendaselegidas = prendas.filter((item)=> item.codigo == operacion)
// let mensaje = ""
// prendaselegidas.forEach(item => {
//     mensaje += "Talle: "+" "+ item.talle +"Precio: "+" "+item.precio +"Tipo de prenda y color "+" "+
//     item.tipoycolor+ "Codigo: "+ " "+item.codigo
// });

// // alert(mensaje)

// const carro = ['Musculosa negra', 'Musculosa Roja', 'Short negro', 'Ningun producto'];
// let select = document.createElement("select");
// for (let index = 0; index < carro.length; index++) {
//     select.innerHTML +=  `<option value='${index}'>${carro[index]}</option>`;
// }

//select.addEventListener('change', function (e) {
//    const h3 = document.createElement('h3');
 //   h3.innerHTML = carro[e.target.value];
   // document.body.appendChild(h3);
//})
//document.body.appendChild(select);
//
//const btnNucleo = document.createElement("button");//
//
//btnNucleo.id = 'btnNucleo';
//
//btnNucleo.innerHTML = 'BOTON DE COMPRA';
//
//btnNucleo.addEventListener('click', function () {
  //  const h3 = document.createElement('h3');
    //h3.innerHTML = 'Gracias por tu compra';
    //document.body.appendChild(h3);
//})
//
//document.body.appendChild(btnNucleo);

// localStorage.setItem ("Bienvenido", nombre)
// localStorage.setItem("Carrito", prenda)

//let Bienvenide1 = localStorage.getItem ("bienvenide");
//let Carrito1 = localStorage.getItem ("Carrito");

//console.log (Bienvenide1);
//console.log (Carrito1);





