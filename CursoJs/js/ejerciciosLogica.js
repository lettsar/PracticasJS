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
    console.warn("No Ingresastes el Texto")
}else{
    console.log(cadena.slice(0,longitud))
}
}

export const ConvArray = (cadena="",caracter=undefined) => {
(!cadena)?console.warn("Debes Colocar una Cadena")
         :(caracter===undefined)
         ? console.warn("Debes Colocar un Separador")
         : console.log(cadena.split(caracter));
                  
}
export const RepetirVeces =(texto="",veces=undefined)=>{
    if(!texto) return console.log("Debes ingresar datos");
    if(veces===undefined) return console.log("Debes Numero de Veces debe tener valor");
    if(veces===0) return console.log(`NO Puesdes Ingresar el numero ${veces} como valor`);
    if(Math.sign(veces)=== -1) return console.log("El Numero de veces no puede Ser Negativo");
    for (let i = 1; i <= veces; i++) {
        console.log(`Se imprime ${texto} numero ${i}`);
        
    } 
    console.log(`Se imprime "${texto}" la Cantidad Solicitada de ${veces}`)
}


