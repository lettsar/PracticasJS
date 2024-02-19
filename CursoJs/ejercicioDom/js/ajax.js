(() => {
  const xhr = new XMLHttpRequest(); //Creamos Instancia
  const $xhr = document.getElementById("xhr");
  const $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
        
    
      let json = JSON.parse(xhr.responseText);
      console.log("XMLHttpRequest")
      console.log()
      json.forEach((el) => {
        let $li = document.createElement("li");
        $li.innerHTML = `${el.name} || ${el.email} || ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.append($fragment);
    } else {
      
      let message = xhr.statusText || "Ocurrio Error";
      $xhr.innerHTML = `Error:${xhr.status} ${message}`;
    }
  });
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
})();

//////////////Metodo Fetch////////////////////////////////////////////////////////////////////////
(() => {
  const $fetch = document.getElementById("fetch");
  const $fragment = document.createDocumentFragment();
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>{
    return res.ok ? res.json():Promise.reject(res);//Valida, Convierte Texto Json y retorna 107
 

  })
  .then(json=>{
    json.forEach((el) => {
      let $li = document.createElement("li");
      $li.innerHTML = `${el.name} || ${el.email} || ${el.phone}`;
      $fragment.appendChild($li);
    });
    $fetch.append($fragment);

  })
  .catch((err) =>{
    let message = err.statusText || "Ocurrio Error";
    $fetch.innerHTML = `Error:${err.status} ${message}`;
  })
  .finally(()=>{
    console.log("Se Ejecuta independiente de Fecth")
  })
})();
//////////////Metodo Fetch Asincrona////////////////////////
(() => {
const $fetchAsync = document.getElementById("fetch-async");
const $fragment = document.createDocumentFragment();

async function gethData(){
  try {
  let res  = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await res.json();
  if(!res.ok) throw {status:res.status,statusText:res.statusText}

  json.forEach((el) => {
    let $li = document.createElement("li");
    $li.innerHTML = `${el.name} || ${el.email} || ${el.phone}`;
    $fragment.appendChild($li);
  });
  $fetchAsync.append($fragment);

  } catch (err) {
    let message = err.statusText || "Ocurrio Error";
    $fetchAsync.innerHTML = `Error:${err.status} ${message}`;
    
  }finally{
    console.log("Se Ejecuta independiente de Fecth Async")
  }
  
}
gethData()
})();
  /////////////////////////////////////////////////////////////////////////////////////////////


//////////////Metodo Axios////////////////////////////////////////////////////////////////////
(() => {
  const $axios = document.getElementById("axios");
  const $fragment = document.createDocumentFragment();

  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(res=>{
    let resp = res.data;
    resp.forEach((el) => {
      let $li = document.createElement("li");
      $li.innerHTML = `${el.name} || ${el.email} || ${el.phone}`;
      $fragment.appendChild($li);
    });
    $axios.append($fragment);
  })
  .catch(err => {
    let message = err.response.statusText || "Ocurrio Error";
    $axios.innerHTML = `Error:${err.response.status} ${message}`;
  })
  .finally(()=>{
    console.log("Se Ejecuta independiente de Axion")
  });
  })();


  //////////////Metodo Axios Async////////////////////////
(() => {
  const $axiosAsinc = document.getElementById("axiosAsinc");
  const $fragment = document.createDocumentFragment();
async function getData(){
  try {
    let res  = await axios.get("https://jsonplaceholder.typicode.com/users")
    let json = await res.data;

    json.forEach((el) => {
      let $li = document.createElement("li");
      $li.innerHTML = `${el.name} || ${el.email} || ${el.phone}`;
      $fragment.appendChild($li);
    });
    $axiosAsinc.append($fragment);

  } catch (err) {
    let message = err.response.statusText || "Ocurrio Error";
    $axiosAsinc.innerHTML = `Error:${err.response.status} ${message}`;
    
  }finally{

  }
  
}
getData();
  })();
  /////////////////////////////////////////////////////////////////////////////////////////////