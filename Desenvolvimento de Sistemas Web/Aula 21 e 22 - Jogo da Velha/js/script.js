var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var placarX = document.getElementById('vitoriasX');
var placarO = document.getElementById('vitoriasO');
var vitoriasx = 0;
var vitoriaso = 0;
var imagemTema = document.getElementById('imagemTema')
var tema = 'claro'
var corpo = document.getElementById('body')
mudarJogador('X');

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function escolherQuadrado(id) {
  if (vencedor !== null) {
    return;
  }
  var quadrado = document.getElementById(id);
  if (quadrado.innerHTML !== "-") {
    return;
  }
  quadrado.innerHTML = jogador;
  quadrado.style.color = '#000'
  if (jogador === 'X'){
    jogador = 'O';
  } else {
    jogador = 'X'
  }
  mudarJogador(jogador);
  checaVencedor();
}

function checaVencedor() {
  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);  
  if (checaSequencia(quadrado1, quadrado2, quadrado3)){
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    return;
  }
  if (checaSequencia(quadrado4, quadrado5, quadrado6)){
    mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    return;
  }
  if (checaSequencia(quadrado7, quadrado8, quadrado9)){
    mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    return;
  }
  if (checaSequencia(quadrado1, quadrado4, quadrado7)){
    mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarVencedor(quadrado1);
    return;
  }
  if (checaSequencia(quadrado2, quadrado5, quadrado8)){
    mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado2);
    return;
  }
  if (checaSequencia(quadrado3, quadrado6, quadrado9)){
    mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado3);
    return;
  }
  if (checaSequencia(quadrado1, quadrado5, quadrado9)){
    mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado1);
    return;
  }
  
  if (checaSequencia(quadrado3, quadrado5, quadrado7)){
    mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado3);
    return;
  }
}  

function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
  quadrado1.style.background = 'lightgreen';
  quadrado2.style.background = 'lightgreen';
  quadrado3.style.background = 'lightgreen';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
  var eIgual = false;
  if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
    eIgual = true;
    if (jogador === 'O') {
      vitoriasx++;
      placarX.innerHTML = vitoriasx
    } else {
      vitoriaso++;
      placarO.innerHTML = vitoriaso
    }
  }
  return eIgual;
}

// function reiniciar() {
//   vencedor = null;
//   vencedorSelecionado.innerHTML = ' ';
//   var quadrado1 = document.getElementById(1);
//   quadrado1.style.background = '#eee';
//   quadrado1.style.color = '#eee';
//   quadrado1.innerHTML = '-';
//   var quadrado2 = document.getElementById(2);
//   quadrado2.style.background = '#eee';
//   quadrado2.style.color = '#eee';
//   quadrado2.innerHTML = '-';
//   var quadrado3 = document.getElementById(3);
//   quadrado3.style.background = '#eee';
//   quadrado3.style.color = '#eee';
//   quadrado3.innerHTML = '-';
//   var quadrado4 = document.getElementById(4);
//   quadrado4.style.background = '#eee';
//   quadrado4.style.color = '#eee';
//   quadrado4.innerHTML = '-';
//   var quadrado5 = document.getElementById(5);
//   quadrado5.style.background = '#eee';
//   quadrado5.style.color = '#eee';
//   quadrado5.innerHTML = '-';
//   var quadrado6 = document.getElementById(6);
//   quadrado6.style.background = '#eee';
//   quadrado6.style.color = '#eee';
//   quadrado6.innerHTML = '-';
//   var quadrado7 = document.getElementById(7);
//   quadrado7.style.background = '#eee';
//   quadrado7.style.color = '#eee';
//   quadrado7.innerHTML = '-';
//   var quadrado8 = document.getElementById(8);
//   quadrado8.style.background = '#eee';
//   quadrado8.style.color = '#eee';
//   quadrado8.innerHTML = '-';
//   var quadrado9 = document.getElementById(9);
//   quadrado9.style.background = '#eee';
//   quadrado9.style.color = '#eee';
//   quadrado9.innerHTML = '-';
//   mudarJogador('X');
// }

function reiniciar()  {
  vencedor = null;
  vencedorSelecionado.innerHTML = ' ';
  var i = 1;
  while (i <= 9) {
    var quadrado = document.getElementById(i);
    quadrado.style.background = '#eee';
    quadrado.style.color = '#eee'
    quadrado.innerHTML = '-';
    i++;
  }
  mudarJogador('X')
}

function mudarTema() {
  if (tema == 'claro') {
    imagemTema.src = '../img/claro.png';
    tema = 'escuro';
    corpo.style.backgroundColor = 'black';
    corpo.style.color = 'white';
  } else {
    imagemTema.src = '../img/escuro.png';
    tema = 'claro';
    corpo.style.backgroundColor = 'white';
    corpo.style.color = 'black';
  }
}