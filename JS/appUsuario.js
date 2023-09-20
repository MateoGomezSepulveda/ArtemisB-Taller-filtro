import { showUsuario } from "./showUsuario.js";
import { getUsuarios } from "../apiConection/API.js";

(function (){
    document.addEventListener('DOMContentLoaded', show)

    async function show(){
        const Usuario = await getUsuarios();
        showUsuario(Usuario)
    }
})()