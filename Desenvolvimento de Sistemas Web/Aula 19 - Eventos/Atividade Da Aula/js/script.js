function mouseEmCima() {
  document.getElementById('opcoes').style.display = 'block'
}

function mouseSaiuDeCima() {
  document.getElementById('opcoes').style.display = 'none'
}

function mouseClick() {
  document.getElementById('opcoes2').style.display = 'block'
}

setInterval(() => {
    document.getElementById('opcoes2').style.display = 'none'
  }, 5000);