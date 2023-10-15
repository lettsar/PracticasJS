export function PostCard(props){
    let {date,title,slug,_embedded,id}=props;
    let dateFormat= new Date(date).toLocaleString();
    let urlPoster = _embedded["wp:featuredmedia"]?_embedded["wp:featuredmedia"][0].source_url: "app/assets/Favicon_Lettsar.png";

 


    return `
    <article class="post-card">
    <img src="${urlPoster}" alt="${title.rendered}  "></img>
    <h2>${title.rendered}</h2>
    <time datetime="${dateFormat}">${dateFormat}</time>
    <a href="#/${slug}" data-id="${id}" >Ver Publicacion</a>
</article>
    `
}
