class Pelicula{
    constructor(nameMovie,actorMovie,screenwriter,director,producter,year){
        this.nameMovie = nameMovie;
        this.actorMovie = actorMovie;
        this.screenwriter = screenwriter;
        this.director = director;
        this.producter = producter;
        this.year = year;
}}

function look(result){
    let temporal = "";
    let tabla = `<table>
                <tr>
                <th>Nombre Pelicula</th>                    
                <th>productor</th>                  
                <th>año</th>
                </tr>`
temporal = temporal + tabla;
    for (let i = 0; i < result.length; i++){
        temporal += ` <tr>
                <td>${result[i].nameMovie}</td>                            
                <td>${result[i].producter}</td>
                <td>${result[i].year}</td>
                </tr>`}
document.getElementById("show-users").innerHTML = temporal + `</table>`
}

function look2(result){
    let temporal2 = "";
    let tabla = `<table>
                <tr>           
                <th>Actores:</th>                  
                </tr>
                `
temporal2 = temporal2 + tabla;
    for (let valor in result){
        temporal2+= `<div>   
                <tr>              
                <th><b>Actores:</b></th>              
                <td>${result[valor]}</td>   
                </tr>`}
document.getElementById("show-users").innerHTML = temporal2 + `</table>`
}

function look3(result){
    let temporal3 = "";
    let tabla = `<table>
                <tr>           
                <th>Guionistas:</th>                  
                </tr>
                `
temporal3 = temporal3 + tabla;
    for (let valor in result){
        temporal3+= `<div>   
                <tr>              
                <th><b>Guionistas:</b></th>              
                <td>${result[valor]}</td>   
                </tr>`}
document.getElementById("show-users").innerHTML = temporal3 + `</table>`
}

function look4(result){
    let temporal4 = "";
    let tabla = `<table>
                <tr>           
                <th>Director:</th>                  
                </tr>
                `
temporal4 = temporal4 + tabla;
    for (let valor in result){
        temporal4+= `<div>   
                <tr>              
                <th><b>Director:</b></th>              
                <td>${result[valor]}</td>   
                </tr>`}
document.getElementById("show-users").innerHTML = temporal4 + `</table>`
}

function look5(result){
    let temporal5 = "";
    let tabla = `<table>
                <tr>           
                <th>Productor:</th>                  
                </tr>
                `
temporal5 = temporal5 + tabla;
    // for (let valor in result){
        temporal5+= `<div>   
                <tr>              
                <th><b>Productor:</b></th>              
                <td>${result}</td>   
                </tr>`
document.getElementById("show-users").innerHTML = temporal5 + `</table>`
}

////PETICIONES GENERALES

function getPeliculas(){
    let _id = document.getElementById("_id").value;
    // let looks = document.getElementById('show-users');
    let url;
    look.innerHTML = ""
    if(_id){
        url = `http://localhost:3000/peliculas/?_id=${_id}`
    }else{
        url=`http://localhost:3000/peliculas`
    }
        // console.log(url)
        let param =
        {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        method: "GET"
        }
        fetch(url,param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.length>0){
                    look(result);
                }else{
                if(!result.err){
                    let look2=document.getElementById("show-users")
                        look2.innerHTML = `<div>
                        <tr>
                        <tr>                  
                        <th><b>Nombre Pelicula:</b></th>              
                        <td>${result.nameMovie}</td>   
                        </tr>           
                        <tr>              
                        <th><b>Productor:</b></th>              
                        <td>${result.producter}</td>              
                        </tr>  
                        <tr>              
                        <th><b>Año:</b></th>              
                        <td>${result.year}</td>         
                        </tr>              
                        </div>` 
                        }else{
                            showToast("Error" + result.mensaje, "bg-danger")
                }}})
                .catch(function(err)
                {
                    console.log(err)
                })
}

function postPeliculas(){
    let pelicula = new Pelicula(
        document.getElementById("name").value,
        document.getElementById("actorMovie").value,
        document.getElementById("director").value,
        document.getElementById("producter").value,
        document.getElementById("screenwriter").value,
        document.getElementById("year").value,
    )
    let url =`http://localhost:3000/peliculas`
    if (validar(pelicula)){
        let param =
        {
        headers: { "Content-type": "application/json; charset = UTF-8"},
        body: JSON.stringify(pelicula),
        method: "POST"
        }
        fetch(url, param)
            .then(function(data){
                return data.json()
            })
            .then(function (result){
                if (result.err){
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }else{
                    showToast("Pelicula creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err){
                console.log(err)
        })
}}

function putPeliculas(){
    let _id = document.getElementById("_id").value;
    let url = `http://localhost:3000/peliculas/?_id=${_id}`;
    let input = {
        _id:document.getElementById("_id").value,
        nameMovie:document.getElementById("name").value,
        actorMovie:document.getElementById("actorMovie").value,
        screenwriter:document.getElementById("screenwriter").value,
        director:document.getElementById("director").value,
        producter:document.getElementById("producter").value,
        year:document.getElementById("year").value,
        }
    let param =
    {
    headers: { "Content-type": "application/json; charset = UTF-8" },
    body: JSON.stringify(input),
    method: "PUT"
    }
    fetch(url, param)
        .then(function (data){
            return data.json()
        })
        .then(function (result){
            if (result.err) {
                showToast("ERROR" + result.mensaje, "bg-danger")
            }else{
                showToast("Usuario creado correctamente", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err){
            console.log(err)
})}

function deletePeliculas() {
    let _id = document.getElementById("_id").value;
    let url = `http://localhost:3000/peliculas/?_id=${_id}`;
    let param =
    {
    headers: { "Content-type": "application/json; charset = UTF-8" },
    method: "DELETE"
    }
    console.log(_id)
    fetch(url, param)
        .then(function (data){
            return data.json()
        })
        .then(function (result){
            if (result.err){
                showToast("ERROR" + result.mensaje, "bg-danger")
            }else{
                showToast("Usuario eliminado", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err){
            console.log(err)
})}

//////RESTO PETICIONES GET

function getActoresFromPeliculaId(){
    let _id = document.getElementById("_id").value;
    let url;
    if (_id){
        url = `http://localhost:3000/peliculas/actor/?_id=${_id}`
        console.log(url)
    }else{
        console.log("id no valido")
    }
    let param =
    {
    headers: { "Content-type": "application/json; charset = UTF-8" },
    method: "GET"
    }
    fetch(url,param)
        .then(function (data){
            return data.json()
        })
        .then(function (result){
            if (result.length > 0){
               look2(result);
            }else{
                showToast("Error" + result.mensaje, "bg-danger")
            }
        })
        .catch(function (err){
            console.log(err)
})}

function getGuionistasFromPeliculaId(){
    let _id = document.getElementById("_id").value;
    let url;
    if (_id) {
        url = `http://localhost:3000/peliculas/guionista/?_id=${_id}`
        console.log(url)
    }else{
        console.log("id no valido")
    }
    let param =
    {
    headers: { "Content-type": "application/json; charset = UTF-8" },
    method: "GET"
    }
    fetch(url,param)
        .then(function (data){
            return data.json()
        })
        .then(function (result){
            if (result.length > 0){
               look3(result);
            }else{
                showToast("Error" + result.mensaje, "bg-danger")
            }
        })
        .catch(function (err){
            console.log(err)
})}

function getDirectorsFromPeliculaId() {
    let _id = document.getElementById("_id").value;
    let url;
    if (_id){
        url = `http://localhost:3000/peliculas/director/?_id=${_id}`
        console.log(url)
    }else{
        console.log("id no valido")
    }
    let param =
    {
    headers: { "Content-type": "application/json; charset = UTF-8" },
    method: "GET"
    }
    fetch(url,param)
        .then(function (data){
            return data.json()
        })
        .then(function (result){
            if (result.length > 0){
               look4(result);
            }else{
                showToast("Error" + result.mensaje, "bg-danger")
            }
        })
        .catch(function (err){
            console.log(err)
})}

function getProducterFromPeliculaId(){
    let _id = document.getElementById("_id").value;
    // let looks = document.getElementById("show-users")
    let url;
    if (_id){
        url = `http://localhost:3000/peliculas/productora/?_id=${_id}`
        console.log(url)
    }else{
        showToast("Error" + result.mensaje, "bg-danger")
    }
    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        method: "GET"
    }
    fetch(url,param)
    .then(function (data){
        // alert(data.body)
        return data.json()
    })
    .then(function(result){
        // alert(result.producter)
        // if (result.length > 0){
           look5(result.producter);
        // }else{
        //     showToast("Error" + result.mensaje, "bg-danger")
        // }
    })
    .catch(function (err){
        console.log(err)
})}
//     fetch(url,param)
//         .then(function (data){
//             return data.json()
//         })
//         .then(function(result){
//             // showToast("Error" + result.mensaje, "bg-danger")
//             if (result){
//                 showToast("Error" + result.mensaje, "bg-danger")
//             }else{
//                 if (!result.err){
//                     looks.innerHTML = `<div>   
//                         <tr>              
//                         <th><b>producter</b></th>              
//                         <td>${result.producter}</td>         
//                         </tr>                              
//                         </div>`
//                 }else{
//                     showToast("Error" + result.mensaje, "bg-danger")
//                 }}
// })
//         .catch(function(err){
//             console.log(err)
// })}

////RESTO PETICIONES POST

function postPeliculaActor(){
    let pelicula = {
        _id:document.getElementById("_id").value,
        actorMovie:document.getElementById("actorMovie").value
       
       }
    console.log(pelicula)
    let url = `http://localhost:3000/peliculas/actor/?_id=${_id.value}`
    if (pelicula!=""){
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(pelicula),
            method: "POST"
        }
        fetch(url,param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.err) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }else{
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err) {
                console.log(err)
            })
}}

function postPeliculaDirector(){
    let pelicula = {
        _id:document.getElementById("_id").value,
        director:document.getElementById("director").value
      
       }
    console.log(pelicula)
    let url = `http://localhost:3000/peliculas/director/?_id=${_id.value}`
    if (pelicula!=""){
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(pelicula),
            method: "POST"
        }
        fetch(url,param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.err) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }else{
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err) {
                console.log(err)
            })
}}

function postPeliculaGuionista(){
    let pelicula = {
        _id:document.getElementById("_id").value,
        screenwriter:document.getElementById("screenwriter").value
      
       }
    console.log(pelicula)
    let url = `http://localhost:3000/peliculas/guionista/?_id=${_id.value}`
    if (pelicula!=""){
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(pelicula),
            method: "POST"
        }
        fetch(url,param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.err) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }else{
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err) {
                console.log(err)
            })
}}

/////RESTO PETICIONES DELETE

function deletePeliculasActor(){
    let url = `http://localhost:3000/peliculas/actor/?_id=${_id}`;
    let quitarActor = {
        _id:document.getElementById("_id").value,
        actorMovie:document.getElementById("actorMovie").value
    }
    let param =
    {
    headers: { "Content-type": "application/json; charset = UTF-8" },
    body: JSON.stringify(quitarActor),
    method: "DELETE"
    }
    console.log(quitarActor)
    fetch(url, param)
        .then(function (data){
            return data.json()
        })
        .then(function (result){
            if (result.err){
                showToast("ERROR" + result.mensaje, "bg-danger")
            }else{
                showToast("Usuario eliminado", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err){
            console.log(err)
})}

function deletePeliculasDirector(){
    let url = `http://localhost:3000/peliculas/director/?_id=${_id}`;
    let quitarPelicula = {
        _id:document.getElementById("_id").value,
        director:document.getElementById("director").value
    }
    let param =
    {
    headers: { "Content-type": "application/json; charset = UTF-8" },
    body: JSON.stringify(quitarPelicula),
    method: "DELETE"
    }
    console.log(quitarPelicula)
    fetch(url, param)
        .then(function (data){
            return data.json()
        })
        .then(function (result){
            if (result.err){
                showToast("ERROR" + result.mensaje, "bg-danger")
            }else{
                showToast("Usuario eliminado", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err){
            console.log(err)
})}

function deletePeliculasGuionista(){
    let url = `http://localhost:3000/peliculas/guionista/?_id=${_id}`;
    let quitarGuionista = {
        _id:document.getElementById("_id").value,
        screenwriter:document.getElementById("screenwriter").value
    }
    let param =
    {
    headers: { "Content-type": "application/json; charset = UTF-8" },
    body: JSON.stringify(quitarGuionista),
    method: "DELETE"
    }
    console.log(quitarGuionista)
    fetch(url, param)
        .then(function (data){
            return data.json()
        })
        .then(function (result){
            if (result.err){
                showToast("ERROR" + result.mensaje, "bg-danger")
            }else{
                showToast("Usuario eliminado", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err){
            console.log(err)
})}

function validar(pelicula){
    result = false
    if (pelicula.nameMovie == "" || pelicula.nameMovie== "null"){
        showToast("AVISO: Campo nombre pelicula vacío", "bg-warning");
    }else if (pelicula.actorMovie == "" || pelicula.actorMovie == "null"){
        showToast("AVISO: Campo actor vacío", "bg-warning")
    }else if (pelicula.screenwriter == "" || pelicula.screenwriter == "null"){
        showToast("AVISO: Campo escritor vacío", "bg-warning");
    }else if (pelicula.director== "" || pelicula.director == "null"){
        showToast("AVISO: Campo director vacío", "bg-warning");
    }else if (pelicula.producter == "" || pelicula.producter == "null"){
        showToast("AVISO: Campo productor vacío", "bg-warning");
    }else if (pelicula.year== "" || pelicula.year == "null"){
        showToast("AVISO: Campo año vacío", "bg-warning");
    }else {
        result = true;
    }   return result;
}

function showToast(message, color) {
    document.getElementById("toastText").innerText = message;
    let toastElement = document.getElementById('toast')
    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " " + color;
    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}