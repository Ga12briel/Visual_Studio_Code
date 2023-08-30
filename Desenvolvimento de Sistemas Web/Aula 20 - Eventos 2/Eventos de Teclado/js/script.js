// onkeyodwn - Dispara quando a tecla é pressionado
function apertouTecla(event) {
  console.log("Apertou alguma tecla: "+event.keyCode);
}

function soltouTecla(event) {
  console.log("Soltou alguma tecla: "+event.keyCode)
}

function pressionouTecla() {
  console.log("Está pressionando alguma tecla: "+event.keyCode)
}

function pressionouShift(event) {
  console.log(event.shiftKey)
  if (event.shiftKey == true) {
    console.log("Pressionou alguma tecla com o shift")
  }
}

function apertouAltMais(event) {
  if (event.altKey == true && event.keyCode == 65) {
    console.log("Pressionou as teclas Alt + 'A'")
  }
}

function apertouCtrlMais(event) {
  if (event.ctrlKey == true && event.keyCode == 66) {
    console.log("Pressionou as teclas Ctrl + 'B'")
  }
}