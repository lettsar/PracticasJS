export function loader(){
    const $loader= document.createElement("img");
    $loader.src="./app/assets/loader-lettsar.gif";
    $loader.style.width="90px"
    $loader.alt="Cargando";
    $loader.classList.add("loader");
    return $loader;

}