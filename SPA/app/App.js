import { Header } from "./componentes/header.js";
import { loader } from "./componentes/loader.js";
import { Main} from "./componentes/Main.js";
import { Router } from "./componentes/Router.js";



export function App(){

const $root= document.getElementById("root");
document.addEventListener("click",e=>{
    if(e.target.matches(".post-card a")){
        localStorage.setItem("id",e.target.dataset.id)
        console.log(e.target.dataset.id)

  }})

$root.innerHTML=null;
$root.appendChild(Header())
$root.appendChild(loader())
$root.appendChild(Main());
Router();
   
}
