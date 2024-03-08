fetch('https://hp-api.onrender.com/api/characters')
.then(response => response.json())
.then((personajes) => {
	const contenedor = document.querySelector('#personajes')

	for(let i=0; i < personajes.length; i++){

		let color = "" 
		if(personajes[i].house != "") {
			color =  "btn-primary" 
		}else{
			color =  "btn-danger"
		}

		contenedor.innerHTML += `<div class="col-sm-3">
			<div class="card">
				<img src="${personajes[i].image}" class="card-img-top" alt="${personajes[i].name}">
				<div class="card-body">
					<h5 class="card-title">${personajes[i].name}</h5>
					<p class="card-text">${personajes[i].species}</p>
					<a href="#" class="btn ${color}">${personajes[i].house != "" ? personajes[i].house : "Sin casa"}</a>
				</div>
			</div>
		</div>` 
	}
})

