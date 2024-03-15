// const obtenBroma = () => {
function obtenBroma(){
	// alert('Soy una funcion')
	fetch('https://official-joke-api.appspot.com/jokes/random')
	.then(response => response.json())
	.then(chiste => {
		//console.log(chiste)
		const contenedor = document.getElementById('broma')

		contenedor.innerHTML = `
		<h2>${chiste.setup}</h2>
		<p>${chiste.punchline}</p>`

	})
}

const boton = document.getElementById('boton')
boton.addEventListener("click", obtenBroma)

/**
 *  touchstart
 *  mouseenter
 *  mouseleave
 *  change
 *  error
 *  focus
 *  blur
 *  keypress
 *  keyup
 *  keydown
 */