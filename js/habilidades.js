let configuracao = 1
let habilidades = document.querySelectorAll('#carrosel > div')
const avancar = document.querySelector('#avancar')
const voltar = document.querySelector('#voltar')

let time = 3000
currentImageIndex = 1

max = habilidades.length;

function nextImage() {
	

	if(currentImageIndex == max - 2){
		habilidades[currentImageIndex - 1].className = "hidden"
	    habilidades[currentImageIndex].className = "hidden"
	    habilidades[currentImageIndex + 1].className = "hidden"

        currentImageIndex = 1
        habilidades[currentImageIndex - 1].className = "esquerda"
	    habilidades[currentImageIndex].className = "centro"
	    habilidades[currentImageIndex + 1].className = "direita"
	    
	}else{
		habilidades[currentImageIndex - 1].className = "hidden"
	    habilidades[currentImageIndex].className = "esquerda"
	    habilidades[currentImageIndex + 1].className = "centro"
	    habilidades[currentImageIndex + 2].className = "direita"


	    currentImageIndex++
	}
    
}

function backImage() {
	

	if(currentImageIndex == 1){
		habilidades[currentImageIndex - 1].className = "hidden"
	    habilidades[currentImageIndex].className = "hidden"
	    habilidades[currentImageIndex + 1].className = "hidden"

        currentImageIndex = max - 2
        habilidades[currentImageIndex - 1].className = "esquerda"
	    habilidades[currentImageIndex].className = "centro"
	    habilidades[currentImageIndex + 1].className = "direita"

	    
	    
	}else{
		currentImageIndex--

		habilidades[currentImageIndex - 1].className = "esquerda"
	    habilidades[currentImageIndex].className = "centro"
	    habilidades[currentImageIndex + 1].className = "direita"
	    habilidades[currentImageIndex + 2].className = "hidden"
	    
	}   
}


function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}


window.addEventListener("load", start)


avancar.addEventListener("click", (elemento) =>{
	elemento.preventDefault()
	//backImage()
	console.log("teste")
	console.log(currentImageIndex)
	nextImage()
	console.log(currentImageIndex)
})


voltar.addEventListener("click", (elemento) =>{
	elemento.preventDefault()
	//nextImage()
	console.log("teste")
	console.log(currentImageIndex)
	backImage()
	console.log(currentImageIndex)
})