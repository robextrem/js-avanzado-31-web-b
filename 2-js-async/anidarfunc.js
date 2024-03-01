const primera = () => {
	setTimeout(() => {
		console.log("Soy la primer funcion 1")
		segunda()
	}, 1000)
}

const segunda = () => {
	setTimeout(() => {
		console.log("Soy la segunda funcion 2")
		tercera()
	}, 1000)
}

const tercera = () => {
	setTimeout(() => {
		console.log("Soy la tercera funcion 3")
	}, 1000)
}

primera()
