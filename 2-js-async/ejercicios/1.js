/*1.- Muestra un mensaje en consola mediante un callback. 
La función que escribas debe poder mostrar el mensaje como console.warn, console.log, 
console.info, o cualquier método para pintar en consola del objeto console.*/

const mensajeConNombre = (callback, nombre) => {
	callback(nombre)
}

const mensaje = (nombre) => {
	console.log(`Hola ${nombre}`)

}

mensajeConNombre(mensaje, 'Pedro')