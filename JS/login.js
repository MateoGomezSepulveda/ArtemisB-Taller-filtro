import { getUsuarios} from "../apiConection/API.js";

const formularioSesion = document.querySelector('#formulario2');
formularioSesion.addEventListener('submit', validatelogin);

function validatelogin(e){
    e.preventDefault();
    const user = document.querySelector('#user2').value
    const password = document.querySelector('#password2').value

    const sesionado = {
        user,
        password
    }
    buscador(sesionado)
}

async function buscador(sesionado){

    if (sesionado.user && sesionado.password){

        const usuarios = await getUsuarios();
        array.forEach(element => {
            if (element.user === sesionado.user && element.password === sesionado.password){
                window.location.href = 'Usuarios.html'
                console.log(element);
            }
        });
    }
}
