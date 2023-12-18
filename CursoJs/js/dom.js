let d = document;

const $linkDom = document.querySelector(".link-dom");
console.log($linkDom)
console.log($linkDom.dataset)
//Creamos Elemento
const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $fcaption = document.createElement("figcaption");
const $fcaptionText =  document.createTextNode("Animals");
const $cards = document.querySelector(".cards");
$cards.appendChild($figure);