// Atividade 1
function cabecalho() {
  document.getElementById('cabecalho').innerHTML = 'A mágica continua!'
}

// Atividade 2
function p1() {
  document.getElementById('p1').style.color = 'green'
}

// Atividade 3
function b1() {
  document.getElementById('p2').style.display = 'none'
}

function b2() {
  document.getElementById('p2').style.display =  'block'
}

// Atividade 4
function trocarImagem() {
  document.getElementById('f1').innerHTML = "<img src='../img/adulto.jpg'>";
  console.log('Imagem trocada com sucesso');
  document.getElementById('b1').style.display = 'none';
}

// Atividade 5
function pequena() {
  document.getElementById('f2').innerHTML = "<img id='foto1' src='../img/criança.jpg'>"
}

function media() {
  document.getElementById('f2').innerHTML = "<img id='foto2' src='../img/criança.jpg'>"
}

function grande() {
  document.getElementById('f2').innerHTML = "<img id='foto3' src='../img/criança.jpg'>"
}