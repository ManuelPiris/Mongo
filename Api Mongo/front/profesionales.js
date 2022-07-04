class Profesional {
    constructor(name,surname,age,genre,isRetired) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.genre = genre;
        this.isRetired = isRetired;
       
}}

function look(result) {
    let temporal = "";
    let tabla = `<table>
                <tr>
                <th>Nombre</th>                    
                <th>Apellido</th>
                <th>Edad</th>
                <th>Genero</th>                    
                <th>Retirado?</th>
                </tr>`
temporal = temporal + tabla;
    for (let i = 0; i < result.length; i++) {
        temporal += ` <tr>
                <td>${result[i].name}</td>
                <td>${result[i].surname}</td>
                <td>${result[i].age}</td>
                <td>${result[i].genre}</td>                                  
                <td>${result[i].isRetired}</td>
                </tr>`}
document.getElementById("show-users").innerHTML = temporal + `</table>`
}

function getProfesionales(){
    let _id = document.getElementById("_id").value;
    // let looks = document.getElementById('show-users');
    let url;
    look.innerHTML = ""
    if(_id){
        url = `http://localhost:3000/profesionales/?_id=${_id}`
    }else{
        url=`http://localhost:3000/profesionales`
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
                        <th><b>Id Usuario:</b></th>              
                        <td>${result._id}</td> 
                        <tr>                   
                        <th><b>Nombre:</b></th>              
                        <td>${result.name}</td>   
                        </tr>           
                        <tr>              
                        <th><b>Apellido:</b></th>              
                        <td>${result.surname}</td>              
                        </tr>  
                        <tr>              
                        <th><b>Edad: </b></th>              
                        <td>${result.age}</td>         
                        </tr>  
                        <tr>              
                        <td><b>Genero:</b></td>              
                        <th>${result.genre}</th>         
                        </tr>  
                        <tr>              
                        <td><b>¿Retirado?:</b></td>              
                        <th>${result.isRetired}</th>         
                        </tr>  
                        <tr>            
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

///

function postProfesionales(){
    let profesional = new Profesional(
        document.getElementById("name").value,
        document.getElementById("surname").value,
        document.getElementById("age").value,
        document.getElementById("genre").value,
        document.getElementById("isRetired").value,
    )
    let url = "http://localhost:3000/profesionales"
    if (validar(profesional)){
        let param =
        {
        headers: { "Content-type": "application/json; charset = UTF-8"},
        body: JSON.stringify(profesional),
        method: "POST"
        }
        fetch(url, param)
            .then(function (data){
                return data.json()
            })
            .then(function (result){
                if (result.err){
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }else{
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err){
                console.log(err)
        })
}}

////

function putProfesionales(){
    let _id = document.getElementById("_id").value;
    let url = `http://localhost:3000/profesionales/?_id=${_id}`;
    let input = {
        _id:document.getElementById("_id").value,
        name:document.getElementById("name").value,
        surname:document.getElementById("surname").value,
        age:document.getElementById("age").value,
        genre:document.getElementById("genre").value,
        isRetired:document.getElementById("isRetired").value
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

//////
function deleteProfesionales(){
    let _id =  document.getElementById("_id").value ;
    url = `http://localhost:3000/profesionales/?_id=${_id}`;
    let param =
    {
    headers: { "Content-type": "application/json; charset = UTF-8" },       
    method: "DELETE"
    }
    console.log(_id)
    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            if (result.err){
                showToast("ERROR" + result.mensaje, "bg-danger")
            }else{
                showToast("Usuario eliminado", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err) {
            console.log(err)
})}


function validar(profesional){
    result = false
    if (profesional.name == "" || profesional.name == "null"){
        showToast("AVISO: Campo nombre vacío", "bg-warning");
    }else if (profesional.surname == "" || profesional.surname == "null"){
        showToast("AVISO: Campo apellido vacío", "bg-warning")
    }else if (profesional.age == "" || profesional.age == "null"){
        showToast("AVISO: Campo edad vacío", "bg-warning");
    }else if (profesional.genre == "" || profesional.genre == "null"){
        showToast("AVISO: Campo genero vacío", "bg-warning");
    }else if (profesional.isRetired == "" || profesional.isRetired == "null"){
        showToast("AVISO: Campo ¿Retirado? vacío", "bg-warning");
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