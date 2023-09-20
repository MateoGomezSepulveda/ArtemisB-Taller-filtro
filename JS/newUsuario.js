import { newUsuario} from "../apiConection/API.js"

const formulario = document.getElementById('formulario1');
formulario.addEventListener('submit',ValidateUsuario);
function ValidateUsuario(e) {
    e.preventDefault();
    const nombre= document.getElementById('nombre').value,
    user = document.getElementById('user').value,
    password= document.getElementById('password').value,
    email=document.getElementById('email').value

const usuario = {
    nombre,
    user,
    password,
    email
 }
 
 if (validate(usuario)){
    alert('llena todos los campos')
    return 
 }
 newUsuario(usuario)
}

function validate(Objeto) {
    return !Object.values(Objeto).every(element => element!=="");
}