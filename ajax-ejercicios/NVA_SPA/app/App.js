
import { Loader } from "./components/Loader.js";
import { Headers } from "./components/header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
export function App(){
const d = document;
const $main= d.getElementById("root");
$main.innerHTML=null;
$main.appendChild(Headers());
$main.appendChild(Main())
$main.appendChild(Loader());

Router();

};