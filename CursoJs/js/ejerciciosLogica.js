export const RecibeCadena = (cadena ="") =>{
    if(!cadena){
        console.warn("No Enviastes Cadenas!")

    }else{
        console.info(cadena)
        console.log(`Cadena tiene ${cadena.length} Caracteres`)
    }
}
export const RecortarText = (cadena="",longitud=undefined) => {
if(!cadena){
    console.warn("Debe Colocar un Texto")
}else if(longitud===undefined){
    longitud = 4;
 /*    console.log("Debes Colocar un Texto") */
}else{
    console.log(cadena.slice(0,longitud));

}
}