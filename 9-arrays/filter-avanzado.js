const numeros = [6, 7, 5, 8, 9, 1, 8, 9, 8]

const busqueda = numeros.filter((numero)=>{
	return numero == 8 || numero == 9
})

/* Como si lo hicieramos con IF
const busqueda = numeros.filter((numero)=>{
	if(numero == 8 || numero == 9)
		return true
	else
		return false
})
*/

const frutas = ["manzana", "uva", "mAnGO", "papaya", "melon", "mango", "mandarina", "MANGOSTAN", "jicaman"]

const busqueda2 = frutas.filter((fruta) => {
	return fruta == "mango"
})

const busqueda3 = frutas.filter((fruta) => {
	return fruta.toLowerCase() == "mango"
	// return fruta.toUpperCase() == "MANGO"
})

const busqueda4 = frutas.filter((fruta) => {
	return fruta.toLowerCase().includes("i")
})

/*
console.log(busqueda)
console.log(busqueda2)
console.log(busqueda3) */

console.log(busqueda4)


