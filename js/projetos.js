function gira_sombra(elemento){
	const sombra = elemento.querySelector('.card-project-shadow')
	console.log(sombra)
	sombra.style.transition = "0.4s"
	sombra.style.transform = "rotate(-30deg)"
}


function desgira_sombra(elemento){
	const sombra = elemento.querySelector('.card-project-shadow')
	sombra.style.transition = "0.4s"
	sombra.style.transform = "rotate(0deg)"
}

