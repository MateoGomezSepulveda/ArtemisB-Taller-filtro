const urlclientes = "http://localhost:4211/clientes"
const urlusuarios = "http://localhost:4211/usuarios"

export  const getUsuarios= async()=>{
    try {
        const result = await fetch(urlusuarios)
        const response = await result.json()
        return response
    } catch (error) {
        console.log(error);
    }
}

export const newUsuario= async (Usuario)=>{
    try {
        await fetch(urlusuarios,{
            method:'POST',
            body: JSON.stringify(Usuario),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href='login.html'
    } catch (error) {
        console.log(error);
    }
}




