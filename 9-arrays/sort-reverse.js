const numeros = [6, 7, 5, 8, 9, 11]
// numeros.sort()
numeros.sort((a, b) => a-b ) // ordenamiento numerico
console.log(numeros)
numeros.reverse() // Reverse voltea el arreglo, no ordena descendente
console.log(numeros)

const cadenas = ["hola", "mundo", "cruel", "caballo"]
cadenas.sort()
console.log(cadenas)
cadenas.reverse()
console.log(cadenas)

const animales = [
	{nombre: "perro", especie: "mamifero", edad: 11},
	{nombre: "huachinango", especie: "pez", edad: 5},
	{nombre: "gato", especie: "mamifero", edad: 5}
]
const animales_num = [...animales]

console.log("Ordenamiento por edad:")
animales_num.sort((a, b) => {
	return a.edad - b.edad //  orden numerico
})
console.log(animales_num)

console.log("Ordenamiento por nombre:")
animales.sort((a) => {
	return a.nombre
})
console.log(animales)

console.log("Ordenamiento por especie:")
animales.sort(animal => {
	return animal.especie
})
console.log(animales)
