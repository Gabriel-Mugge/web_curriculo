const direita = document.querySelectorAll(".right")
  const qtd_direita = direita.length
  const esquerda = document.querySelectorAll(".left")
  const qtd_esquerda = esquerda.length
  var pos = 0
  

  function show_items_timeline(){
    
    if (pos < qtd_direita){ 
      //direita[pos].style.transform = "translateX(-100%)"
      direita[pos].style.transform = "translateX(-150%)"
      direita[pos].style.transition = "all 2s"
      direita[pos].style.zIndex = "1"
    }
    
    if (pos < qtd_esquerda){ 
      //esquerda[pos].style.transform = "translateX(100%)"
      esquerda[pos].style.transform = "translateX(120%)"
      esquerda[pos].style.transition = "all 2s"
      esquerda[pos].style.zIndex = "1"
    }
    
    pos += 1

    console.log(pos)

  }


  /*setInterval(() => {show_items_timeline()}, 1000)*/

  function scroll_check(){
    var y = window.scrollY;

    if (y % 10 == 0){
      show_items_timeline()
    }

  }

  

  window.addEventListener("scroll", scroll_check);