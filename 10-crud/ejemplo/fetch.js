/* CRUD */

/** Create:  */

function agregarFruta(datos){

	const url = 'https://crudcrud.com/api/d43b0177569948ffbf456e7c4ea9415e/frutas'
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(datos),
		headers: {
			'Content-Type': 'application/json'
		},
	}).then((response)=>response.json()
	).then((json) => console.log(json))
	.catch((error)=>console.log(error))
}

const datos = {
	nombre: 'Limón',
	color: 'Verde'
}

const granada = {
	nombre: 'Granada',
	color: 'Rojo'
}

agregarFruta(datos)
agregarFruta({
	nombre: 'Melón',
	color: 'Naranja'
})
agregarFruta(granada)

/** Update:  */

function editarFruta(datos, id){

	const url = 'https://crudcrud.com/api/d43b0177569948ffbf456e7c4ea9415e/frutas/'+id

	fetch(url, {
		method: 'PUT',
		body: JSON.stringify(datos),
		headers: {
			'Content-Type': 'application/json'
		},
	})
	.catch((error)=>console.log(error))
	/* Este no lleva then, porque el response no regresa nada */
}

const jicama = {
	nombre: 'Jicama',
	color: 'Blanca'
}

editarFruta(jicama, '65fa37a61492af03e8f0ee8f')

/** Delete:  */

function borrarFruta(id){

	const url = 'https://crudcrud.com/api/d43b0177569948ffbf456e7c4ea9415e/frutas/'+id

	fetch(url, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
	})
	.catch((error)=>console.log(error))
	/* Este no lleva then, porque el response no regresa nada */
}

borrarFruta('65fa338b1492af03e8f0ee87')