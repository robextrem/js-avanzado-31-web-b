fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((response) => response.json())
.then(personaje => {
	// console.log(personaje)
	console.log(`Hola soy ${personaje.name}, y mido ${personaje.height}`)
	console.log(personaje.abilities)
});