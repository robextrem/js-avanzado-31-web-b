function agregarFruta(datos){

	const url = 'https://crudcrud.com/api/7ded2eabd36a4294b832da9d60cf4a31/frutas'
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(datos),
		headers: {
			'Content-Type': 'application/json'
		},
	}).then(()=>{
		alert('Se agregó una nueva fruta')
	})
	.catch((error)=>console.log(error))
}

function enviaFormulario(evt){
	evt.preventDefault()
	const nombre = document.getElementById('nombre').value
	const color = document.getElementById('color').value

	const datos = {
		'nombre': nombre,
		'color': color
	}

	agregarFruta(datos)

	/* Este es un atajo SOLO SI se llaman igual la propiedad y la variable
	const datos = {
		nombre,
		color
	} */

}

document.getElementById('boton').addEventListener('click', enviaFormulario)