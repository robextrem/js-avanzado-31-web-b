fetch('https://swapi.dev/api/people/3')
.then((response) => response.json())
.then(personaje => {
	// console.log(personaje)
	console.log(`Hola soy ${personaje.name}, y mido ${personaje.height}`)
});	