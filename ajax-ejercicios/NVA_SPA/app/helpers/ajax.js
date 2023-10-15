export async function ajax(props){
    try {            
            let{url,cbSuccess}= props;    
            let res = await fetch(url);
            let json = await res.json();
            if (!res.ok)throw { status: res.status, statusText: res.statusText };
              cbSuccess(json)            
    } catch (err) {
        let messaje= err.StatusText || "Ocurrio un Error al acceder a la API";
        document.getElementById("main").innerHTML=`
        <div class="error">
        <p>Error ${err.status}:${messaje}</p>
        </div>`;
        document.querySelector(".loader").style.display="none";
        console.log(err)
        
    } //154

}