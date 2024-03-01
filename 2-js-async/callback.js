//function hablar(callback){
const hablar = (callback) => { 
	// callback <- saludar | despedirse | sumar
	consolellog('Bienvenido')
	callback() //<- despedirse() o saludar() o sumar()
}

const saludar = () => {
	console.log('Hello como estas?')
}

const despedirse = () => {
	console.log('Hola como estas?')
}

const sumar = () => {
	console.log(5+5)
}

//Imprimimos la definicion de la función
//console.log(despedirse)

hablar(saludar)