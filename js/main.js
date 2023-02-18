/*inicio efeito d digitação*/
function typeWriter(elementos) {

	console.log(elementos[0])

		      
   		paragrafo_fatiado = elementos[0].innerHTML.split('')
       	elementos[0].innerHTML = '';
       	paragrafo_fatiado.forEach((letra, i) => {

   	    	setTimeout(() => {
            	if (letra == "|"){
            		elementos[0].innerHTML += "<br>"
          		}
          		else{
            		elementos[0].innerHTML += letra
          		}

          		if (i == paragrafo_fatiado.length - 1){
          			dowload_curriculo.style.transition = "all 2s"
          			dowload_curriculo.style.opacity = '1'

          		}
    		}
      		, 75 * i)
  		})

}



const titulo = document.querySelectorAll('p')
var dowload_curriculo = document.querySelector('.curriculo')

										
typeWriter(titulo)
/*fim efeito d digitação*/


/*inicio efito de scrool suave*/
const menuLinks = document.querySelectorAll('#menu ul li a[href^="#"]');
  

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}


function scrollToSection(event) {
	
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target);
  smoothScrollTo(0, distanceFromTheTop, 1000);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

/*fim efito de scrool suave*/