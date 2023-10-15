const st= document.querySelector(".panel-btn")
const ver = document.querySelector(".panel")
const menu = document.querySelector(".menu")
const d= document;

d.addEventListener("DOMContentLoaded",(e)=>{

    st.addEventListener("click", e=>{
        ver.classList.toggle("p_act")
        });
        
        menu.addEventListener("click",e=>{
            ver.classList.remove("p_act")

})


})
