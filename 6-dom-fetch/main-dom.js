fetch('https://hp-api.onrender.com/api/characters')
.then(response => response.json())
.then((personajes) => {
	const contenedor = document.querySelector('#personajes')

	for(let i=0; i < personajes.length; i++){

		let color = "" 
		if(personajes[i].house != "") {
			color =  "btn btn-primary" 
		}else{
			color =  "btn btn-danger"
		}

		const col = document.createElement('div')
		col.classList.add('col-sm-3')

		const card =  document.createElement('div')
		card.classList.add('card','mt-3')

		const img = document.createElement('img')
		img.classList.add('card-img-top')
		img.setAttribute("src", personajes[i].image)
		img.setAttribute("alt", personajes[i].name)

		card.append(img)

		const cardBody = document.createElement('div')
		cardBody.classList.add('card-body')

		const h5 = document.createElement('h5')
		h5.classList.add('card-title')
		h5.innerHTML = personajes[i].name
		cardBody.append(h5)

		const p =  document.createElement('p')
		p.classList.add("card-text")
		p.innerHTML = personajes[i].species

		cardBody.append(p)

		if(personajes[i].house != ""){
			const a = document.createElement('a')
			a.setAttribute("href","#")
			a.classList.add('btn', 'btn-primary')
			a.innerHTML = personajes[i].house
			cardBody.append(a)
		}

		card.append(cardBody)

		col.append(card)

		/*
		contenedor.innerHTML += `
		<div class="col-sm-3">
			<div class="card">
				<img src="${personajes[i].image}" class="card-img-top" alt="${personajes[i].name}">
				<div class="card-body">
					<h5 class="card-title">${personajes[i].name}</h5>
					<p class="card-text">${personajes[i].species}</p>
					<a href="#" class="btn ${color}">${personajes[i].house != "" ? personajes[i].house : "Sin casa"}</a>
				</div>
			</div>
		</div>` */

		contenedor.append(col)
	}
})

