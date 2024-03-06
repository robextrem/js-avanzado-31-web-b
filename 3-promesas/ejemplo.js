
const promise = new Promise((resolve, reject)=>{
	const usuario = 'roberto'
	const password = '12345'
	setTimeout(() => {
		if(usuario == 'roberto' && password == '12345'){
			resolve({ numero: '375984757680105', banco: 'AMEX', mexExp:7, anioExp: 2023 })
		}else{
			reject(0)
		}
	}, 1500)

})

promise
	.then((tarjeta) => {
		console.log(tarjeta)
		return tarjeta.anioExp < 2024 ? true : false
	})
	.then((expiro)=>{
		if(expiro){
			console.log('Tu tarjeta ha expirado')
		}
	})
	.catch((error) => {
		console.log(error)
	})

