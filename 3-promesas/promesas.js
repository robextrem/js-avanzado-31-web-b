//const promise = new Promise(function(resolve, reject){
const promise = new Promise((resolve, reject)=>{
	const number = 1
	setTimeout(() => {
		if(number == 1){
			resolve("El numero es Uno")
		}else{
			reject("El numero no es Uno. ERROR!")
		}
	}, 1500)
	// const x = (number == 1) ? 'Es uno' : 'No es uno'

})

console.log("Comienza la ejecucion")

promise
	.then((mensaje) => {
		console.log(mensaje)
		return 'Otro mensaje'
	}).then((mensaje2) => {
		console.log(mensaje2)
	})
	// Funcion simplificada
	/*.then(mensaje => console.log(mensaje))*/
	// Funcion clásica
	/* .then(function(mensaje){
		console.log(mensaje)
	}) */

	.catch((error) => {
		console.log(error)
	})

console.log("'Termina' la ejecucion")
