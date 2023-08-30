function mouseEmCima() {
  document.getElementById('opcoes').style.display = 'block'
}

function mouseSaiuDeCima() {
  document.getElementById('opcoes').style.display = 'none'
}

function mouseClick() {
  document.getElementById('opcoes2').style.display = 'block'
  setInterval(() => {
    document.getElementById('opcoes2').style.display = 'none'
  }, 5000);
}

function moveuMouse() {
  setInterval(() => {
    document.getElementById('link').href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }, 5000);
  setInterval(() => {
    document.getElementById('input').style.display = "block"
  }, 10000);
}

function j(event) {
  if (event.keyCode == 74) {
    document.getElementById('classic').innerHTML = "<a href='https://classic.minecraft.net'><img src='../img/Minecraft2.jpg'><a/>"
  }
}

function shiftJ(event) {
  if (event.shiftKey == true && event.keyCode == 74) {
    document.getElementById('classic').innerHTML = "<a href='https://www.launchershiginima.com/br/shiginima-launcher/'><img src='../img/Minecraft2.jpg'><a/>"
  }
} 

function carregou() {
  alert("Esse é um site feito por um fã de Minecraft, esté NÃO é um site oficial da Mojang.")
}

function desceu() {
 document.getElementById('icone').style.color = 'red' 
 document.getElementById('icone2').style.color = 'red' 
 document.getElementById('icone3').style.color = 'red' 
}