var contagemCaixas = 0;
var num1 = 0;
var num2 = 0;
var resultadoCorrto = 0;
var sinalConta = 0;
var resultadoConta = 0;

contaRandom();
numerosRandom();

function contaRandom() {
  sinalConta = Math.floor(Math.random() * 4) + 1;
  if (sinalConta == 1) {
    resultadoConta = Math.floor(Math.random() * 150) + 1;
    document.querySelector('#conta>span').textContent = 'X + Y = ' + resultadoConta;
    while (num1 + num2 !== resultadoConta) {
      num1 = Math.floor(Math.random() * 100) + 1;
      num2 = Math.floor(Math.random() * 100) + 1;
      resultadoCorrto = [num1, num2]
    }
  } else if (sinalConta == 2) {
    resultadoConta = Math.floor(Math.random() * 50) + 1;
    document.querySelector('#conta>span').textContent = 'X - Y = ' + resultadoConta;
    while (num1 - num2 !== resultadoConta) {
      num1 = Math.floor(Math.random() * 100) + 1;
      num2 = Math.floor(Math.random() * 100) + 1;
      resultadoCorrto = [num1, num2]
    }
  } else if (sinalConta == 3) {
    resultadoConta = Math.floor(Math.random() * 300) + 50;
    document.querySelector('#conta>span').textContent = 'X * Y = ' + resultadoConta;
    while (num1 * num2 !== resultadoConta) {
      num1 = Math.floor(Math.random() * 100) + 1;
      num2 = Math.floor(Math.random() * 100) + 1;
      resultadoCorrto = [num1, num2]
    }
  } else {
    resultadoConta = Math.floor(Math.random() * 30) + 1;
    document.querySelector('#conta>span').textContent = 'X ÷ Y = ' + resultadoConta;
    while (num1 / num2 !== resultadoConta) {
      num1 = Math.floor(Math.random() * 100) + 1;
      num2 = Math.floor(Math.random() * 100) + 1;
      resultadoCorrto = [num1, num2]
    }
  }
}

function numerosRandom() {
  num1 = 0
  num2 = 0
  while (num1 == num2) {
    num1 = Math.floor(Math.random() * 24) + 1;
    num2 = Math.floor(Math.random() * 24) + 1;
  }
  for (i = 1; i <= 24; i++) {
    var carta = document.getElementById('carta'+i);
    carta.textContent = Math.floor(Math.random() * 100) + 1;
    if (i == num1) {
      carta.textContent = resultadoCorrto[0]
    }
    if (i == num2) {
      carta.textContent = resultadoCorrto[1]
    }
  }
}

function conta(id) {
  contagemCaixas = contagemCaixas + 1
  if (contagemCaixas == 1) {
    num1 = document.getElementById(id).textContent;
    num1 = parseInt(num1)
  } else {
    num2 = document.getElementById(id).textContent;
    num2 = parseInt(num2)
  }
  if (contagemCaixas == 2) {
    verificarConta()
  }
}

function verificarConta() {
  if (sinalConta == 1) {
    if (num1 + num2 == resultadoConta) {
      alert('Acertou, Parabens!')
      contaRandom();
      numerosRandom();
    } else {
      alert('Errou, tente novamente!')
    }
  } else if (sinalConta == 2) {
    if (num1 - num2 == resultadoConta) {
      alert('Acertou, Parabens!')
      contaRandom();
      numerosRandom();
    } else {
      alert('Errou, tente novamente!')
    }
  } else if (sinalConta == 3) {
    if (num1 * num2 == resultadoConta) {
      alert('Acertou, Parabens!')
      contaRandom();
      numerosRandom();
    } else {
      alert('Errou, tente novamente!')
    }
  } else {
    if (num1 / num2 == resultadoConta) {
      alert('Acertou, Parabens!')
      contaRandom();
      numerosRandom();
    } else {
      alert('Errou, tente novamente!')
    }
  }
  contagemCaixas = 0
}