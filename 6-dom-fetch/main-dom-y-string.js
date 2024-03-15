let personajes = []

fetch('https://hp-api.onrender.com/api/characters')
.then(response => response.json())
.then((resultados) => {
	personajes = resultados
	dibujarPersonajes(personajes)
})

function dibujarPersonajes(personajes){
	const contenedor = document.querySelector('#personajes')
	contenedor.innerHTML = ""
	for(let i=0; i < personajes.length; i++){

		let color = "" 
		if(personajes[i].house == "Gryffindor") {
			color =  "rojo" 
		}else if(personajes[i].house == "Slytherin") {
			color =  "verde"
		}else if(personajes[i].house == "Hufflepuff") {
			color =  "azul"
		}else {
			color =  "amarillo"
		}

		const col = document.createElement('div')
		col.classList.add('col-sm-3')

		const imagen = (personajes[i].image !== "") ? personajes[i].image : "https://placehold.co/400x600?text=HP"

		col.innerHTML = `<div class="card ${color}">
							<img src="${imagen}" class="card-img-top" alt="${personajes[i].name}">
							<div class="card-body">
								<h5 class="card-title">${personajes[i].name}</h5>
								<p class="card-text">${personajes[i].species}</p>
								<a href="#" class="btn ${color}">${personajes[i].house != "" ? personajes[i].house : "Sin casa"}</a>
							</div>
						</div>` 

		contenedor.append(col)
	}
}

function buscar(){
	const termino = document.getElementById("termino").value.toLowerCase()
	const busqueda = personajes.filter((personaje)=>{
		return personaje.name.toLowerCase().includes(termino)
	})
	dibujarPersonajes(busqueda)
}

function casa(){
	const busqueda = personajes.filter((personaje)=>{
		return personaje.house == 'Gryffindor'
	})
	dibujarPersonajes(busqueda)
}

const formulario = document.getElementById("busqueda")
formulario.addEventListener("submit", (evt)=>{
	evt.preventDefault()
	buscar()
})

const input = document.getElementById("termino")
input.addEventListener("keyup", buscar)

const boton = document.getElementById("gryffindor")
boton.addEventListener("click", casa)





