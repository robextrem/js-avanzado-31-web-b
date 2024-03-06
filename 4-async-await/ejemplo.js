// const esperar = async () => {
async function esperar(){
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			console.log('La funcion termino despues de esperar un tiempo')
			resolve(true)
		}, 2000)
	})
}

async function esperar2(){
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			console.log('Hola te estoy esperando 2')
			resolve(true)
		}, 1000)
	})
}


async function correr(){
	await esperar()
	await esperar2()
	console.log('Otro mensaje')
}

correr()

