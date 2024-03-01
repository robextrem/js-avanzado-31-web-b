const primera = (callback1, callback2) => {
	// callback1 -> segunda, callback2 -> tercera
	setTimeout(() => {
		console.log("Soy la primer funcion 1")
		callback1(callback2) //segunda(tercera)
	}, 1000)
}

const segunda = (callback) => {
	setTimeout(() => {
		console.log("Soy la segunda funcion 2")
		callback(()=>{})
	}, 1000)
}

const tercera = (callback) => {
	setTimeout(() => {
		console.log("Soy la tercera funcion 3")
		callback(function(){})
	}, 1000)
}

primera(tercera, segunda)