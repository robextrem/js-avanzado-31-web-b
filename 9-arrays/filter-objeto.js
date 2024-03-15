
const animales = [
	{
		nombre: "Perro",
		edad: 7
	},
	{
		nombre: "Gato",
		edad: 14
	},
	{
		nombre: "Camaleon",
		edad: 5
	},
	{
		nombre: "Leon",
		edad: 11
	}
]

const busqueda = animales.filter((animal) => {
	const nombre = animal.nombre.toLowerCase()
	return nombre.includes("leon")
})

console.log(busqueda)

const busqueda2 = animales.filter((animal) => {
	const nombre = animal.nombre.toLowerCase()
	// Busqueda de los que SI contienen 'leon' y son mayores a 10
	return nombre.includes("leon") && animal.edad > 10
})

console.log(busqueda2)


const busqueda3 = animales.filter((animal) => {
	const nombre = animal.nombre.toLowerCase()
	// Busqueda de los que NO contienen 'leon' y no son mayores a 10
	return !nombre.includes("leon") && !(animal.edad > 10)
})

console.log(busqueda3)
