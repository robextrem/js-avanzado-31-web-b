const numeros = [6, 7, 5, 8, 9, 1]

const busqueda = numeros.filter((numero)=>{
	return numero > 5
})

/*
Esto es el equivalente como si lo hicieramos con un if:
const busqueda = numeros.filter((numero)=>{
	if(numero > 5)
		return true
	else
	return false
}) */



/*
const busqueda = []
for(let i=0; i< numeros.length; i++){
	if(numeros[i]>5){
		busqueda.push(numeros[i])
	}
}
*/

console.log(busqueda)