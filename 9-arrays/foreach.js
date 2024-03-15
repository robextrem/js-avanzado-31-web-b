const numeros = [6, 7, 5, 8, 9, 1]

numeros.forEach((numero)=>{
	console.log(numero)
})

const cadenas = ["hola", "mundo", "cruel"]

cadenas.forEach((cadena)=>{
	console.log(cadena)
})

const animales = [
	{nombre: "perro", especie: "mamifero"},
	{nombre: "huachinango", especie: "pez"}
]

animales.forEach((animal)=>{
	console.log(animal.nombre)
	console.log(animal.especie)
})