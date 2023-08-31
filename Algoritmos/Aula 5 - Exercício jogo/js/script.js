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
var divUm = document.getElementById('um')
var divDois = document.getElementById('dois')
var divTres = document.getElementById('tres')
var divQuatro = document.getElementById('quatro')
var divCinco = document.getElementById('cinco')
var divSeis = document.getElementById('seis')
var divSete = document.getElementById('sete')
var divOito = document.getElementById('oito')
var divNove = document.getElementById('nove')
var jogadores = document.getElementById('jogador')
var mensagemFim = document.getElementById('fim')


function um() {
  if (p1 == 0) {
    if ((numeroJogada % 2) == 0) {
      umX.style.display = 'block'
      p1 = 1
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '2'
    } else {
      umC.style.display = 'block'
      p1 = 2
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '1'
    }
  }
  if ((p1 == 1) && (p2 == 1) && (p3 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p4 = 3
    p5 = 3
    p6 = 3
    p7 = 3
    p8 = 3
    p9 = 3
  } else if ((p1 == 2) && (p2 == 2) && (p3 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p4 = 3
    p5 = 3
    p6 = 3
    p7 = 3
    p8 = 3
    p9 = 3
  }
  if ((p1 == 1) && (p4 == 1) && (p7 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p2 = 3
    p3 = 3
    p5 = 3
    p6 = 3
    p8 = 3
    p9 = 3
  } else if ((p1 == 2) && (p4 == 2) && (p7 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p2 = 3
    p3 = 3
    p5 = 3
    p6 = 3
    p8 = 3
    p9 = 3
  }
  if ((p1 == 1) && (p5 == 1) && (p9 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p2 = 3
    p3 = 3
    p4 = 3
    p6 = 3
    p7 = 3
    p8 = 3
  } else if ((p1 == 2) && (p5 == 2) && (p9 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p2 = 3
    p3 = 3
    p4 = 3
    p6 = 3
    p7 = 3
    p8 = 3
  }
  if (numeroJogada == 9) {
    mensagemFim.innerHTML = 'O jogo acabou por empate.'
  }
}

function dois() {
  if (p2 == 0) {
    if ((numeroJogada % 2) == 0) {
      doisX.style.display = 'block'
      p2 = 1
      numeroJogada = numeroJogada + 1
    } else {
      doisC.style.display = 'block'
      p2 = 2
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '1'
    }
  }
  if ((p1 == 1) && (p2 == 1) && (p3 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p4 = 3
    p5 = 3
    p6 = 3
    p7 = 3
    p8 = 3
    p9 = 3
  } else if ((p1 == 2) && (p2 == 2) && (p3 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p4 = 3
    p5 = 3
    p6 = 3
    p7 = 3
    p8 = 3
    p9 = 3
  }
  if ((p2 == 1) && (p5 == 1) && (p8 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p3 = 3
    p4 = 3
    p6 = 3
    p7 = 3
    p9 = 3
  } else if ((p2 == 2) && (p5 == 2) && (p8 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p3 = 3
    p4 = 3
    p6 = 3
    p7 = 3
    p9 = 3
  }
  if (numeroJogada == 9) {
    mensagemFim.innerHTML = 'O jogo acabou por empate.'
  }
}

function tres() {
  if (p3 == 0) {
    if ((numeroJogada % 2) == 0) {
      tresX.style.display = 'block'
      p3 = 1
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '2'
    } else {
      tresC.style.display = 'block'
      p3 = 2
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '1'
    }
  }
  if ((p1 == 1) && (p2 == 1) && (p3 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p4 = 3
    p5 = 3
    p6 = 3
    p7 = 3
    p8 = 3
    p9 = 3
  } else if ((p1 == 2) && (p2 == 2) && (p3 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p4 = 3
    p5 = 3
    p6 = 3
    p7 = 3
    p8 = 3
    p9 = 3
  }
  if ((p3 == 1) && (p6 == 1) && (p9 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p2 = 3
    p4 = 3
    p5 = 3
    p7 = 3
    p8 = 3
  } else if ((p3 == 2) && (p6 == 2) && (p9 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p2 = 3
    p4 = 3
    p5 = 3
    p7 = 3
    p8 = 3
  }
  if ((p3 == 1) && (p5 == 1) && (p7 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p2 = 3
    p4 = 3
    p6 = 3
    p8 = 3
    p9 = 3
  } else if ((p3 == 2) && (p5 == 2) && (p7 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p2 = 3
    p4 = 3
    p6 = 3
    p8 = 3
    p9 = 3
  }
  if (numeroJogada == 9) {
    mensagemFim.innerHTML = 'O jogo acabou por empate.'
  }
}

function quatro() {
  if (p4 == 0) {
    if ((numeroJogada % 2) == 0) {
      quatroX.style.display = 'block'
      p4 = 1
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '2'
    } else {
      quatroC.style.display = 'block'
      p4 = 2
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '1'
    }
  }
  if ((p4 == 1) && (p5 == 1) && (p6 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p2 = 3
    p3 = 3
    p7 = 3
    p8 = 3
    p9 = 3
  } else if ((p4 == 2) && (p5 == 2) && (p6 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p2 = 3
    p3 = 3
    p7 = 3
    p8 = 3
    p9 = 3
  }
  if ((p1 == 1) && (p4 == 1) && (p7 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p2 = 3
    p3 = 3
    p5 = 3
    p6 = 3
    p8 = 3
    p9 = 3
  } else if ((p1 == 2) && (p4 == 2) && (p7 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p2 = 3
    p3 = 3
    p5 = 3
    p6 = 3
    p8 = 3
    p9 = 3
  }
  if (numeroJogada == 9) {
    mensagemFim.innerHTML = 'O jogo acabou por empate.'
  }
}

function cinco() {
  if (p5 == 0) {
    if ((numeroJogada % 2) == 0) {
      cincoX.style.display = 'block'
      p5 = 1
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '2'
    } else {
      cincoC.style.display = 'block'
      p5 = 2
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '1'
    }
  }
  if ((p2 == 1) && (p5 == 1) && (p8 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p3 = 3
    p4 = 3
    p6 = 3
    p7 = 3
    p9 = 3
  } else if ((p2 == 2) && (p5 == 2) && (p8 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p3 = 3
    p4 = 3
    p6 = 3
    p7 = 3
    p9 = 3
  }
  if ((p4 == 1) && (p5 == 1) && (p6 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p2 = 3
    p3 = 3
    p7 = 3
    p8 = 3
    p9 = 3
  } else if ((p4 == 2) && (p5 == 2) && (p6 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p2 = 3
    p3 = 3
    p7 = 3
    p8 = 3
    p9 = 3
  }
  if ((p1 == 1) && (p5 == 1) && (p9 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p2 = 3
    p3 = 3
    p4 = 3
    p6 = 3
    p7 = 3
    p8 = 3
  } else if ((p1 == 2) && (p5 == 2) && (p9 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p2 = 3
    p3 = 3
    p4 = 3
    p6 = 3
    p7 = 3
    p8 = 3
  }
  if ((p3 == 1) && (p5 == 1) && (p7 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p2 = 3
    p4 = 3
    p6 = 3
    p8 = 3
    p9 = 3
  } else if ((p3 == 2) && (p5 == 2) && (p7 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p2 = 3
    p4 = 3
    p6 = 3
    p8 = 3
    p9 = 3
  }
  if (numeroJogada == 9) {
    mensagemFim.innerHTML = 'O jogo acabou por empate.'
  }
}

function seis() {
  if (p6 == 0) {
    if ((numeroJogada % 2) == 0) {
      seisX.style.display = 'block'
      p6 = 1
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '2'
    } else {
      seisC.style.display = 'block'
      p6 = 2
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '1'
    }
  }
  if ((p4 == 1) && (p5 == 1) && (p6 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p2 = 3
    p3 = 3
    p7 = 3
    p8 = 3
    p9 = 3
  } else if ((p4 == 2) && (p5 == 2) && (p6 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p2 = 3
    p3 = 3
    p7 = 3
    p8 = 3
    p9 = 3
  }
  if ((p3 == 1) && (p6 == 1) && (p9 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p2 = 3
    p4 = 3
    p5 = 3
    p7 = 3
    p8 = 3
  } else if ((p3 == 2) && (p6 == 2) && (p9 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p2 = 3
    p4 = 3
    p5 = 3
    p7 = 3
    p8 = 3
  }
  if (numeroJogada == 9) {
    mensagemFim.innerHTML = 'O jogo acabou por empate.'
  }
}

function sete() {
  if (p7 == 0) {
    if ((numeroJogada % 2) == 0) {
      seteX.style.display = 'block'
      p7 = 1
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '2'
    } else {
      seteC.style.display = 'block'
      p7 = 2
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '1'
    }
  }
  if ((p1 == 1) && (p4 == 1) && (p7 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p2 = 3
    p3 = 3
    p5 = 3
    p6 = 3
    p8 = 3
    p9 = 3
  } else if ((p1 == 2) && (p4 == 2) && (p7 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p2 = 3
    p3 = 3
    p5 = 3
    p6 = 3
    p8 = 3
    p9 = 3
  }
  if ((p7 == 1) && (p8 == 1) && (p9 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p2 = 3
    p3 = 3
    p4 = 3
    p5 = 3
    p6 = 3
  } else if ((p7 == 2) && (p8 == 2) && (p9 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p2 = 3
    p3 = 3
    p4 = 3
    p5 = 3
    p6 = 3
  }
  if ((p7 == 1) && (p5 == 1) && (p3 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p2 = 3
    p4 = 3
    p6 = 3
    p8 = 3
    p9 = 3
  } else if ((p3 == 2) && (p5 == 2) && (p7 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p2 = 3
    p4 = 3
    p6 = 3
    p8 = 3
    p9 = 3
  }
  if (numeroJogada == 9) {
    mensagemFim.innerHTML = 'O jogo acabou por empate.'
  }
}

function oito() {
  if (p8 == 0) {
    if ((numeroJogada % 2) == 0) {
      oitoX.style.display = 'block'
      p8 = 1
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '2'
    } else {
      oitoC.style.display = 'block'
      p8 = 2
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '1'
    }
  }
  if ((p7 == 1) && (p8 == 1) && (p9 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p2 = 3
    p3 = 3
    p4 = 3
    p5 = 3
    p6 = 3
  } else if ((p7 == 2) && (p8 == 2) && (p9 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p2 = 3
    p3 = 3
    p4 = 3
    p5 = 3
    p6 = 3
  }
  if ((p2 == 1) && (p5 == 1) && (p8 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p3 = 3
    p4 = 3
    p6 = 3
    p7 = 3
    p9 = 3
  } else if ((p2 == 2) && (p5 == 2) && (p8 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p3 = 3
    p4 = 3
    p6 = 3
    p7 = 3
    p9 = 3
  }
  if (numeroJogada == 9) {
    mensagemFim.innerHTML = 'O jogo acabou por empate.'
  }
}

function nove() {
  if (p9 == 0) {
    if ((numeroJogada % 2) == 0) {
      noveX.style.display = 'block'
      p9 = 1
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '2'
    } else {
      noveC.style.display = 'block'
      p9 = 2
      numeroJogada = numeroJogada + 1
      jogadores.innerHTML = '1'
    }
  }
  if ((p3 == 1) && (p6 == 1) && (p9 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p2 = 3
    p4 = 3
    p5 = 3
    p7 = 3
    p8 = 3
  } else if ((p3 == 2) && (p6 == 2) && (p9 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p2 = 3
    p4 = 3
    p5 = 3
    p7 = 3
    p8 = 3
  }
  if ((p7 == 1) && (p8 == 1) && (p9 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p1 = 3
    p2 = 3
    p3 = 3
    p4 = 3
    p5 = 3
    p6 = 3
  } else if ((p7 == 2) && (p8 == 2) && (p9 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p1 = 3
    p2 = 3
    p3 = 3
    p4 = 3
    p5 = 3
    p6 = 3
  }
  if ((p1 == 1) && (p5 == 1) && (p9 == 1)) {
    mensagemFim.innerHTML = 'O jogador um venceu! Parabens!'
    p2 = 3
    p3 = 3
    p4 = 3
    p6 = 3
    p7 = 3
    p8 = 3
  } else if ((p1 == 2) && (p5 == 2) && (p9 == 2)) {
    mensagemFim.innerHTML = 'O jogador dois venceu! Parabens!'
    p2 = 3
    p3 = 3
    p4 = 3
    p6 = 3
    p7 = 3
    p8 = 3
  }
  if (numeroJogada == 9) {
    mensagemFim.innerHTML = 'O jogo acabou por empate.'
  }
}