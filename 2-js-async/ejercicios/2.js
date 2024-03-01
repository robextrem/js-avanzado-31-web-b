/*Crear una función que reciba como
argumento una variable de cualquier tipo y un callback. 
La función debe retornar como resultado, mediante el callback, cual es el tipo 
de dato de la variable ingresada e imprimir su contenido. typeof 

//contenido
console.log(variable)

//tipo de variable
console.log(typeof variable)

*/ 
const variable = 7

const defineTipo = (callback, variable) => {
	callback(variable)
}

const mensaje = (contenido) => {
	console.log(`La variable es de tipo ${typeof contenido} y su contenido es ${contenido}`)
}

defineTipo(mensaje, variable)