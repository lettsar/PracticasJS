export function searchForm() {
  const d = document;
  const $form = d.createElement("form");
  const $input = d.createElement("input");
  $form.classList.add("search-Form");
  $input.type = "search";
  $input.name="search"
  $input.placeholder = "Buscar";
  $input.autocomplete="off"
  $input.classList.add("search-Form");
  $form.appendChild($input);

  if(location.hash.includes("#/search")){
      $input.value= localStorage.getItem("wpSearch")
  }
  d.addEventListener("search", e=>{
      if(e.target.matches("input[type='search']")) {
        if(!e.target.value) localStorage.removeItem("wpSearch");
      }
      
  })
d.addEventListener("submit", e=>{
   if(e.target===$form){
       e.preventDefault()

   console.log(e.target.search.value)
   localStorage.setItem("wpSearch",e.target.search.value)


   location.hash=`#/search?search=${e.target.search.value}`
   }
})
 
  return $form;
}
/* 
      if(e.target.matches(".search-Form")){
      
      console.log(e.target) */
