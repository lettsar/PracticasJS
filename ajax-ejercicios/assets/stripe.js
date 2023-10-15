import STRIKE_KEYS from "./stripe-keys.js";

const d= document,
$tacos=d.getElementById("tacos"),
$template= d.getElementById("tacos-template"),
$fragmento = d.createDocumentFragment();

fetch("https://api.stripe.com/v1/products",
{headers:{
    Authorization:`Bearer ${STRIKE_KEYS.secret}`
}})
.then(res=>{
   const dato = res.json();
    return dato;
}).then(json=>{
 console.log(json)
 console.log(json.data[0].name)
})

fetch("https://api.stripe.com/v1/prices",
{headers:{
    Authorization:`Bearer ${STRIKE_KEYS.secret}`
}})
.then(res=>{
   const dato = res.json();
    return dato;
}).then(json=>{
 console.log(json)
 console.log(json.data[0].name)
})

//130