const sumar = (x, y) => {
	return x + y
}

const restar = (x, y) => {
	return x - y
}

const multiplicar = (x, y) => {
	return x * y
}

const division = (x, y) => {
	return x / y
}

const operacion = (callback, x, y) => {
	console.log("El resultado es "+ callback(x, y))
}

const n = 1
const m = 2

operacion(sumar, n, m)
operacion(restar, n, m)
operacion(multiplicar, n, m)
operacion(division, n, m)





