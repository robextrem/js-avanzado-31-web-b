//const promise = new Promise(function(resolve, reject){
const promise = new Promise((resolve, reject)=>{
	const number = 1
	setTimeout(() => {
		if(number == 1){
			resolve(6)
		}else{
			reject(0)
		}
	}, 1500)
	// const x = (number == 1) ? 'Es uno' : 'No es uno'

})

promise
	.then((num) => {
		console.log(`La promesa regreso: ${num}`)
		return num + 1
	}).then((num2) => {
		console.log(`Se le sumo un 1 y queda: ${num2}`)
		return num2 * 5
	})
	.then((num3) => {
		console.log(`Se le multiplico por 5 y queda: ${num3}`)
	})
	.catch((error) => {
		console.log(error)
	})

