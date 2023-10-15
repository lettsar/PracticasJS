export function Post(props){
    const {title,date,content} = props;
return `<seccion class="post-page">
<aside>
    <h2>${title.rendered}</h2>
    <time datetime="2022-11-12">${date}</time>
</aside>
<article>${content.rendered}</article>
</seccion>`;

}

