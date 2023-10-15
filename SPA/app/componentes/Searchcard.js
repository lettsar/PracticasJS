

export function Searchcard(props){
let{id,title,_embedded}=props;

let slug = _embedded.self[0].slug
return `<article class="post-card">
<h2>${title}</h2>
<a href="#/${slug}" data-id="${id}">Ver Publicacion </a>

</article>`


}

