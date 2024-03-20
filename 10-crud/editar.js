const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id')
//alert('Se esta editando la fruta: '+id)

function precargarFruta(){
	fetch('https://crudcrud.com/api/d43b0177569948ffbf456e7c4ea9415e/frutas/'+id)
	.then(response => response.json())
	.then(fruta=> {
		document.getElementById('titulo').innerText = `Editar fruta: ${fruta.nombre}`
		document.getElementById('nombre').value = fruta.nombre
		document.getElementById('color').value = fruta.color
	})
}

precargarFruta()

/** TAREA: IMPLEMENTAR LA ACCION DE EDITAR (UPDATE) */
