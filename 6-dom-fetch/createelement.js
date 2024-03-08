const personajes = document.getElementById('personajes')

const div = document.createElement('h1')
div.classList.add('titulo')
div.innerHTML = 'Un titulo'

personajes.append(div)
// <h1 class='titulo'>Un titulo</h1>