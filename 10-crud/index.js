fetch('https://crudcrud.com/api/d43b0177569948ffbf456e7c4ea9415e/frutas')
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
		const url = 'https://crudcrud.com/api/d43b0177569948ffbf456e7c4ea9415e/frutas/'+id

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