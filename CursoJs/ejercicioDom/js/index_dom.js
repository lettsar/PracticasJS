import hanburguesaMenu from "./menu_hamburquesa.js";
import { digtalClock,alarm} from "./reloj.js";//Cuando no Hay Estructuracion por Defecto
const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    hanburguesaMenu(".panel-btn",".panel",".menu a");
    digtalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("./assets/alarma-para-despertar-3-.mp3","#activar-alarma","#desactivar-alarma",);
    
})
/* hanburguesaMenu(); */
