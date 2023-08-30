var numeroJogada = 0
var p1 = 0
var p2 = 0
var p3 = 0
var p4 = 0
var p5 = 0
var p6 = 0
var p7 = 0
var p8 = 0
var p9 = 0
var umX = document.getElementById('x1')
var umC = document.getElementById('c1')
var doisX = document.getElementById('x2')
var doisC = document.getElementById('c2')
var tresX = document.getElementById('x3')
var tresC = document.getElementById('c3')
var quatroX = document.getElementById('x4')
var quatroC = document.getElementById('c4')
var cincoX = document.getElementById('x5')
var cincoC = document.getElementById('c5')
var seisX = document.getElementById('x6')
var seisC = document.getElementById('c6')
var seteX = document.getElementById('x7')
var seteC = document.getElementById('c7')
var oitoX = document.getElementById('x8')
var oitoC = document.getElementById('c8')
var noveX = document.getElementById('x9')
var noveC = document.getElementById('c9')

function um() {
  if (p1 == 0) {
    if ((numeroJogada % 2) == 0) {
      umX.style.display = 'block'
      p1 = p1 + 1
      numeroJogada = numeroJogada + 1
    } else {
      umC.style.display = 'block'
      p1 = p1 + 1
      numeroJogada = numeroJogada + 1
    }
  }
}

function dois() {
  if (p2 == 0) {
    if ((numeroJogada % 2) == 0) {
      doisX.style.display = 'block'
      p2 = p2 + 1
      numeroJogada = numeroJogada + 1
    } else {
      doisC.style.display = 'block'
      p2 = p2 + 1
      numeroJogada = numeroJogada + 1
    }
  }
}

function tres() {
  if (p3 == 0) {
    if ((numeroJogada % 2) == 0) {
      tresX.style.display = 'block'
      p3 = p3 + 1
      numeroJogada = numeroJogada + 1
    } else {
      tresC.style.display = 'block'
      p3 = p3 + 1
      numeroJogada = numeroJogada + 1
    }
  }
}

function quatro() {
  if (p4 == 0) {
    if ((numeroJogada % 2) == 0) {
      quatroX.style.display = 'block'
      p4 = p4 + 1
      numeroJogada = numeroJogada + 1
    } else {
      quatroC.style.display = 'block'
      p4 = p4 + 1
      numeroJogada = numeroJogada + 1
    }
  }
}

function cinco() {
  if (p5 == 0) {
    if ((numeroJogada % 2) == 0) {
      cincoX.style.display = 'block'
      p5 = p5 + 1
      numeroJogada = numeroJogada + 1
    } else {
      cincoC.style.display = 'block'
      p5 = p5 + 1
      numeroJogada = numeroJogada + 1
    }
  }
}

function seis() {
  if (p6 == 0) {
    if ((numeroJogada % 2) == 0) {
      seisX.style.display = 'block'
      p6 = p6 + 1
      numeroJogada = numeroJogada + 1
    } else {
      seisC.style.display = 'block'
      p6 = p6 + 1
      numeroJogada = numeroJogada + 1
    }
  }
}

function sete() {
  if (p7 == 0) {
    if ((numeroJogada % 2) == 0) {
      seteX.style.display = 'block'
      p7 = p7 + 1
      numeroJogada = numeroJogada + 1
    } else {
      seteC.style.display = 'block'
      p7 = p7 + 1
      numeroJogada = numeroJogada + 1
    }
  }
}

function oito() {
  if (p8 == 0) {
    if ((numeroJogada % 2) == 0) {
      oitoX.style.display = 'block'
      p8 = p8 + 1
      numeroJogada = numeroJogada + 1
    } else {
      oitoC.style.display = 'block'
      p8 = p8 + 1
      numeroJogada = numeroJogada + 1
    }
  }
}

function nove() {
  if (p9 == 0) {
    if ((numeroJogada % 2) == 0) {
      noveX.style.display = 'block'
      p9 = p9 + 1
      numeroJogada = numeroJogada + 1
    } else {
      noveC.style.display = 'block'
      p9 = p9 + 1
      numeroJogada = numeroJogada + 1
    }
  }
}

