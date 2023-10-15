import wpApi from "../helpers/wp-api.js";
import { ajax } from "../helpers/ajax.js";

import { PostCard } from "./PostCard.js";

export async function Router(){
 const d =document; 
/*  const w = window; */
 const $main = d.getElementById("main");
 $main.innerHTML=null;
 let {hash} = location;

 if(!hash || hash === "#/"){
   await ajax({   
        url:wpApi.POSTS,    
        cbSuccess: data => {                   
            console.log(data)   
            let html ="";     
            data.forEach(el => {                          
            html += PostCard(el)        
            $main.innerHTML=html
            })
        }     
    }) 
console.log(wpApi.POST)
 }else if(hash.includes("#/search")){
    await ajax({   
        url:wpApi.POSTS,    
        cbSuccess: data => {                   
            
            let html ="";     
            data.forEach(el => {
                
            html += PostCard(el)        
            $main.innerHTML=html
            })
        }     
    })


 }else{
    d.getElementById("main").innerHTML="<h1>Contenidooo</h1>";
/*     await ajax({   
        url:wpApi.POSTS,    
        cbSuccess: posts => {                   
            console.log(posts)
            let html ="";     
            posts.forEach(post => {
            html += PostCard(post)        
            $main.innerHTML=html
            })
        }     
    })  */
   
 }
 d.querySelector(".loader").style.display="none";
}