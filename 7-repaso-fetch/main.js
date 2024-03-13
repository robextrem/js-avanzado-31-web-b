fetch('https://api.thecatapi.com/v1/images/search?limit=10&api_key=')
.then(response => response.json())
.then(gatos => {
	// console.log(gatos)

	const row = document.getElementById('contenedor')

	gatos.forEach((gato)=>{
		console.log(gato)
		const elemento = document.createElement('div')
		elemento.classList.add('col-sm-3')

		elemento.innerHTML = `<div class="card">
			<img class="imagen-gato" src="${gato.url}">
			<h4>ID: ${gato.id}</h4>
			<p>width: ${gato.width} height: ${gato.height}</p>
		</div>`
		row.append(elemento)
	})			

	/*
	for(let i=0; i< gatos.length; i++){
		console.log(gatos[i].id)
	}*/

})
