import { menu } from "./menu.js";
import { searchForm } from "./search-from.js";
import { Title } from "./title.js";

export function Header(){
    const $header = document.createElement("header");
    $header.classList.add("header");
    $header.appendChild(Title())
    $header.appendChild(menu())
    $header.appendChild(searchForm())
    return $header


}