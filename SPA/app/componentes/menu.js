export function menu(){
    const $menu= document.createElement("nav")
    $menu.innerHTML=`
    <a href="#/">Home</a>
<span>-</span>
<a href="#/search">Busqueda</a>
<span>-</span>
<a href="#/contac">Contacto</a>
<span>-</span>
<a href="#/https://aprendejavascript.org" target="_blank" rel="noopener">AprendeJs</a>
<span>-</span>
    `;
    return $menu
}

