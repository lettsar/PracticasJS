export function PostCard(props){
    
    let {title,id,date,slug,_embedded} = props
    let datosfecha = new Date(date).toLocaleDateString();
    let utlposter= _embedded["wp:featuredmedia"] ?  _embedded["wp:featuredmedia"][0].source_url:"app/favicon_Lettsar.png";
    document.addEventListener("click", e=>{
        if(!e.target.matches(".post-card a")){
        return false;
        }
        localStorage.getItem("WoPostId",e.target.dataset.id);
        console.log(localStorage)
    })

    return `
    <article class="post-card">
    <img src="${utlposter}" alt=""></img>
    <h2>${title.rendered}]</h2>
    <p>
    <time datetime="${date}">${datosfecha}</time>
    <a href="#/${slug}" data-id="${id}">Ver Publicacion</a>
    </p>
    </article>
    `;
}