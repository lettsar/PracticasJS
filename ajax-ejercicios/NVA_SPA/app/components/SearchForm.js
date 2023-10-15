export function SearchForm(){
    const $form = document.createElement("form");
    const $input = document.createElement("input");
    $form.appendChild($input);
    $input.name="search";
    $input.type="search";
    $input.placeholder="Buscar";
    $input.classList.add("form-search")
    return $form;
}