const form = document.getElementById("form")
const user = document.getElementById("user")
const pass = document.getElementById("pass") 
const error = document.getElementById('err')


form.addEventListener("submit",(e)=>{
    if(user.value == "" && pass.value === ""){
        error.textContent = "Ingrese Usuario y contrasena"
        e.preventDefault()
    }else if(user.value === "" && pass.value !== ""){
        error.textContent = "Ingrese Usuario"
        e.preventDefault()
    }else if(user.value !== "" && pass.value === ""){
        error.textContent = "Ingrese contrasena"
        e.preventDefault()
    }
});
