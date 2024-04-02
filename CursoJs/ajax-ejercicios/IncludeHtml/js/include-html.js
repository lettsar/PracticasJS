const attr = document.querySelectorAll("[data-include]")
const IncludeHtml = (el,url)=>{

  xhr.addEventListener("readystatechange", e=>{
    if(xhr.readyState !== 4) return;

    if(xhr.status >=200 && xhr.status <= 300){
        el.outerHTML =xhr.r
    }else{
        let message = xhr.statusText || "Ocurrio un Error";
        el.outerHTML =`<div><p>Error: ${xhr.status}: ${message}</p></div>`;
    }
});
xhr.open("GET",url);
xhr.setRequestHeader("Content-Type", "text-html; charset=utf-8")
xhr.send();
}

document.addEventListener("DOMContentLoaded",e=>{

})



/* document.addEventListener("DOMContentLoaded", e=>{

    const includeHTML = (el,url)=>{

}

 attr.forEach(element => {
   console.log(element.getAttribute("[data-include]"))
 });
}) */