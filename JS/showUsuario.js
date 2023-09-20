export function showUsuario(Usuario){
    Usuario.forEach(element => {
        const {id,imagen,nombre,user,password,email} = element
        const row = document.createElement('tr')
        row.innerHTML = `
        <th scope="row">${id}</th>
        <td><img src="img/${imagen}" class="cuenta"></td>
        <td>${nombre}</td>
        <td>${user}</td>
        <td>${password}</td>
        <td>${email}</td>
        <td><button type="button" data-Categoria="${id}" class="btn btn-warning delete">Borrar</button></td>
        `;
        document.querySelector('#listaUsuarios').appendChild(row)
    });
}




