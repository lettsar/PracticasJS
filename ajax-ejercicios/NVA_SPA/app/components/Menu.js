export function Menu(){
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML=`
    <a href="#/">Home</a>
    <span>-</span>
    <a href="#/search">search</a>
    <span>-</span>
    <a href="#/">Home</a>
    <span>-</span>
    <a href="#/search">search</a>
    <span>-</span>
    `;
    return $menu;
}