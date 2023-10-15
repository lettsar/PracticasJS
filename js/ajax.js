//XMLHTTPRequest
(() => {
    const xhr = new XMLHttpRequest(); // 1. Instanciamos los objeto xml
    const $xhr = document.getElementById("xhr");
    const $fragmento = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", e => {       // 2.Verificamos Ready State
        if (xhr.readyState !== 4) { return; }// Validamos

        //console.log(xhr)

        if (xhr.status >= 200 && xhr.status < 300) {        // 3. Validamos que sea 200 efectiva


            // 4. Convertir la Respuesta en Formato JSON

            const dreponse = JSON.parse(xhr.responseText);

            dreponse.forEach(el => {
                const elementod = document.createElement("li");
                elementod.innerHTML = `Nombre: ${el.name} - Email: ${el.email} - Telefono: ${el.phone}`;
                $fragmento.appendChild(elementod);
            });



            $xhr.appendChild($fragmento);

        } else {
            let messaje = xhr.statusText || "Ocurrio un Error";
            $xhr.innerHTML = `Error: ${xhr.status}: ${messaje}`
        }

    });
    // Asignacion de Eventoz
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users") // Metodo recibe 2 por donde comunicarnos
    xhr.send()

})();
//API FETCH
(() => {

    const $fecth = document.getElementById("fetch");
    const $fragmento_fetch = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(
            //Recibimos la info "ReadableStream"
            resp => {
                return resp.ok ? resp.json() : Promise.reject(resp);
            }).then(
                //Pasamos el Siguiente para Convertir en JSON y Plasmamos
                json => {

                    json.forEach(elej => {
                        const dt = document.createElement("id");
                        dt.innerHTML = ` • Nombre:${elej.name} - • Email:${elej.email}`;
                        $fragmento_fetch.appendChild(dt)
                    })
                    $fecth.appendChild($fragmento_fetch)

                }).catch(
                    err => {
                        console.log(err)
                    }
                ).finally()

})();

//API FETCH + ASYNC-AWAIT 
(() => {
    const $fetchAasync = document.getElementById("fetch-async");
    const $fragmento_fetchAsycn = document.createDocumentFragment();

    async function getData() {
        try {
            let respasy = await fetch("https://jsonplaceholder.typicode.com/users");
            let jsonAsy = await respasy.json();

            if (!respasy.ok) throw { sts: respasy.status, sText: respasy.statusText };

            jsonAsy.forEach(elejs => {
                const dts = document.createElement("id");
                dts.innerHTML = ` • Nombre:${elejs.name} - • Email:${elejs.email}`;
                $fragmento_fetchAsycn.appendChild(dts);
            });
            $fetchAasync.appendChild($fragmento_fetchAsycn)
        } catch (err) {
            let messaje = err.sText || "Fallo Conexion";
            console.log(`Error: ${err.sts} ${messaje}`)
            console.log(err.sText)

        } finally {

        }

    }
    getData();
})();
//API AXIOS

(() => {
    const $axios = document.getElementById("axios");
    const $fragmento_axios = document.createDocumentFragment();
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(resax => {

            let json = resax.data;
            json.forEach(aele => {

                let dtax = document.createElement("div");
                dtax.innerHTML = `Nombre: ${aele.name} y su email es: ${aele.email}`;
                $fragmento_axios.appendChild(dtax);
            })
            $axios.appendChild($fragmento_axios)
        })

        .catch(mserr => {
            let messaje = mserr.response.statusText || "Fallo Conexion";

            console.log(`${mserr.response.status}: ${messaje}`)
        })
        .finally()
})();
//API AXIOS + ASYNC - AWAIT
(() => {
    const $axiosAsync = document.getElementById("axios-async");
    const $fragmento_axiosAsync = document.createDocumentFragment();
    async function datosGet() {
        try {
            let respasy = await axios.get("https://jsonplaceholder.typicode.com/userss");
            let json = await respasy.data;
            console.log(json)
            json.forEach(aeles => {
                let dtax = document.createElement("div");
                dtax.innerHTML = `Nombre: ${aeles.name} y su email es: ${aeles.email}`;
                $fragmento_axiosAsync.appendChild(dtax);
            })
            $axiosAsync.appendChild($fragmento_axiosAsync)

        } catch (mserr) {
            let messaje = mserr.response.statusText || "Fallo Conexion";

            console.log(`${mserr.response.status}: ${messaje}`)
        } finally {
            console.log("Fino")
        }
    }
    datosGet()

})();
//Video 115