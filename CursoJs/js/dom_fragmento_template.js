let d = document;

const $linkDom = document.querySelector(".link-dom");
console.log($linkDom);
console.log($linkDom.dataset);
//Creamos Elemento
const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $fcaption = document.createElement("figcaption");
const $fcaptionText = document.createTextNode("Animals");
const $cards = document.querySelector(".cards");
$cards.appendChild($figure);
//Estaciones del Año
const estacionesDelAño = ["Primavera", "Verano", "Otoño", "Invierno"];
const $ul = document.createElement("ul");
document.write("<h3>Estaciones del Año</he>");
document.body.appendChild($ul);
estacionesDelAño.forEach((element) => {
  const $li = document.createElement("li");
  $li.textContent = element;
  $ul.appendChild($li);
});
///////////////////////////////////////////////CardContent//////////////////////////////////////////////
const cardContenido = [
  { title: "Tegnologia", img: "https://picsum.photos/200/300" },
  { title: "Animales", img: "https://picsum.photos/200/300" },
  { title: "Arquitectura", img: "https://picsum.photos/200/300" },
  { title: "Gente", img: "https://picsum.photos/200/300" },
  { title: "Naturaleza", img: "https://picsum.photos/200/300" }
];
////////////////////////////////////////////Fragmento///////////////////////////////////////////////////
document.write("<h3>Fragmento</h3>");
const $ul2 = document.createElement("ul");
const $fragmento = document.createDocumentFragment();

estacionesDelAño.forEach((element) => {
  const $li = document.createElement("li");
  $li.textContent = element;
  $ul2.appendChild($li);
  $fragmento.appendChild($ul2);
});

document.body.appendChild($fragmento);
//////////////////////////////////////////Template////////////////////////////////////////////////////////
///((((((   1   ))))))//
const $cards2 = document.querySelector(".cards");//Donde se va a agregar
///((((((   2   ))))))//
const $template = document.getElementById("template-card").content;//seleccionamos template
///((((((   3   ))))))//
const $fragmento_templ = document.createDocumentFragment(); //creamos Fragmento

cardContenido.forEach(elemento=>{
$template.querySelector("img").setAttribute("src",elemento.img);//Agregamos dentro
$template.querySelector("img").setAttribute("alt",elemento.title);//Agregamos dentro
$template.querySelector("figcaption").textContent=elemento.title//Agregamos dentro
let $clone = document.importNode($template,true);//clonamos template
$fragmento_templ.appendChild($clone);//agregamos a gragmento
})
$cards2.appendChild($fragmento_templ)//agregamos gragmento a Html
console.log(cardContenido)
//////////////////Delegacion de Eventos///////////////////
document.addEventListener("click",e=>{
  console.log(`Click en `,e.target)
  e.preventDefault();
  if(e.target.matches("#que-es")){
    alert("AJaaaa")
  }
})
//eventos y propiedades 77/// 
window.addEventListener("resize", e => {  
  console.log(window.innerWidth)
  console.log(window.innerHeight)
  console.log(window.outerHeight)
  console.log(window.outerWidth)
})
window.addEventListener("scroll", e => {
  console.log(window.scrollX)
  console.log(window.scrollY)
  console.log(e)
  
})

window.addEventListener("load", e => {
  console.log("Evento Load");
  alert("Cargado")
console.log(e)
})

document.addEventListener("DOMContentLoaded", e=>{
  console.log("DOMContentLoaded");///  mejor de usar

})
//79