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
}