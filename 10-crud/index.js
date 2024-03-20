fetch('https://crudcrud.com/api/7ded2eabd36a4294b832da9d60cf4a31/frutas')
	.then(response => response.json())
	.then(frutas => {
		const contenedor = document.getElementById('contenedor')

		frutas.forEach((fruta)=>{
			contenedor.innerHTML += `<tr>
				<td>${fruta._id}</td>
				<td>${fruta.nombre}</td><td>${fruta.color}</td>
				<td>
					<a class="btn btn-warning btn-sm" href="editar.html?id=${fruta._id}">Editar</a>
					<button class="btn btn-danger btn-sm" onclick="borrarFruta('${fruta._id}')">Borrar</button>
				</td>
			</tr>`
		})
	})

function borrarFruta(id){
	if(confirm('¿Estas seguro?')){
		const url = 'https://crudcrud.com/api/7ded2eabd36a4294b832da9d60cf4a31/frutas/'+id

		fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
		}).then(()=>{
			window.location.reload() // recargas
		})
		.catch((error)=>console.log(error))
	/* Este no lleva then, porque el response no regresa nada */
	}
}