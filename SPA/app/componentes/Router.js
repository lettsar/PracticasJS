import { ajax } from "../helpers/ajax.js";
import wpApi from "../helpers/wp-api.js";
import { Post } from "./post.js";
import { PostCard } from "./Postcard.js";
import { Searchcard } from "./Searchcard.js";

export async function Router() {
  const d = document;
  const w = window;
  let { hash } = location;
  const $main = d.getElementById("main");
  console.log(hash);
  $main.innerHTML = null;
  //Condicionales del Router segun Hash

  if (!hash || hash === "#/") {
    $main.innerHTML = `<h1>Cargando Home...</h1>`;
    await ajax({
      url: wpApi.POSTS,
      CbSuccess: (dato) => {
        let html = "";
        dato.forEach((ele) => (html += PostCard(ele)));
        d.getElementById("main").innerHTML = html;
      },
    });
    //CARGA CON SEARCH
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");
    if (!query) {
        d.querySelector(".loader").style.display="none";
      return false;
    }
    await ajax({
      url: `${wpApi.SEARCH}${query}`,
      CbSuccess: (dato) => {
        let html = "";
        if (dato.length === 0) {
          html = `<p>No Existe resultados de busqueda para el termino</p>
          <mark>${query}</mark>`;
        }else{
            dato.forEach((ele) => (html += Searchcard(ele)));
        }
        $main.innerHTML = html;

        
      },
    });
    //CARGA CONTACTO
  } else if (!hash || hash === "#/contac") {
    $main.innerHTML = `<h1>Cargando Contacto...</h1>`;
    //Carga por Defaul
  } else {
    await ajax({
      url: `${wpApi.POST}/${localStorage.getItem("id")}`,
      CbSuccess: (dato) => {
        $main.innerHTML = Post(dato);
      },
    });
  }
  d.querySelector(".loader").style.display = "none";
}
