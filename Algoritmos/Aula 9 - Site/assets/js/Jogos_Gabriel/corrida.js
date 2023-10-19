const personagem = document.getElementById('personagem');
var perguntaPosicao = document.querySelector('.pergunta').getBoundingClientRect();
var perguntas = document.querySelector('.pergunta')
var personagemPosicao = document.querySelector('#personagem').getBoundingClientRect();
var pergunta1 = document.getElementById('pergunta1')
var pergunta2 = document.getElementById('pergunta2')
var resposta = 0;
var pergunta = 1;
var mudarCor

setInterval(() => {
  perguntaPosicao = document.querySelector('.pergunta').getBoundingClientRect();
  personagemPosicao = document.querySelector('#personagem').getBoundingClientRect();
  if (perguntaPosicao.right < personagemPosicao.left) {
    verificarResposta()
  }
}, 10)

window.addEventListener('keydown', (event) => {
  event.preventDefault;
  if (perguntaPosicao.left < personagemPosicao.right + 10) {
    return
  }
  if (event.key == 'w' || event.key == 'ArrowUp') {
    personagem.style.bottom = '';
    personagem.style.top = '10px';
    resposta = 1
  }
  if (event.key == 's' || event.key == 'ArrowDown') {
    personagem.style.top = '';
    personagem.style.bottom = '10px';
    resposta = 2
  }
})

function verificarResposta() {
  if (pergunta == 1) {
    mudarCor = document.getElementById('resposta1')
    if (resposta == 1) {
      mudarCor.style.color = 'green'
    } else {
      mudarCor.style.color = 'red'
    }
    const id = setInterval(mudarPergunta, 300);
    function mudarPergunta() {
      pergunta = 2;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = 'A incógnita é a parte que você não conhece da equação';
      pergunta2.textContent = 'Somente no 2º membro da equação haverá sinais e números!';
      clearInterval(id);
    }
  } else if (pergunta == 2) {
    mudarCor = document.getElementById('resposta2')
    if (resposta == 1) {
      mudarCor.style.color = 'green'
    } else {
      mudarCor.style.color = 'red'
    }
    const id = setInterval(mudarPergunta, 300);
    function mudarPergunta() {
      pergunta = 3;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = 'As equações são sentenças matemáticas que não estabelecem relações entre suas sentenças!';
      pergunta2.textContent = 'As equações são sentenças matemáticas que estabelecem relações entre suas sentenças!';
      clearInterval(id);
    }
  } else if (pergunta == 3) {
    mudarCor = document.getElementById('resposta3')
    if (resposta == 2) {
      mudarCor.style.color = 'green'
    } else {
      mudarCor.style.color = 'red'
    }
    const id = setInterval(mudarPergunta, 300);
    function mudarPergunta() {
      pergunta = 4;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = '1 + 1 = 2';
      pergunta2.textContent = '1 + 1 = 3';
      clearInterval(id);
    }
  } else if (pergunta == 4) {
    mudarCor = document.getElementById('resposta4')
    if (resposta == 1) {
      mudarCor.style.color = 'green'
    } else {
      mudarCor.style.color = 'red'
    }
    const id = setInterval(mudarPergunta, 300);
    function mudarPergunta() {
      pergunta = 5;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = '2 + 2 = 3';
      pergunta2.textContent = '2 + 2 = 4';
      clearInterval(id);
    }
  } else if (pergunta == 5) {
    mudarCor = document.getElementById('resposta5')
    if (resposta == 2) {
      mudarCor.style.color = 'green'
    } else {
      mudarCor.style.color = 'red'
    }
    const id = setInterval(mudarPergunta, 300);
    function mudarPergunta() {
      pergunta = 6;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = '3 + 3 = 5';
      pergunta2.textContent = '3 + 3 = 6';
      clearInterval(id);
    }
  } else if (pergunta == 6) {
    mudarCor = document.getElementById('resposta6')
    if (resposta == 2) {
      mudarCor.style.color = 'green'
    } else {
      mudarCor.style.color = 'red'
    }
    const id = setInterval(mudarPergunta, 300);
    function mudarPergunta() {
      pergunta = 7;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = '4 + 4 = 7';
      pergunta2.textContent = '4 + 4 = 8';
      clearInterval(id);
    }
  } else if (pergunta == 7) {
    mudarCor = document.getElementById('resposta7')
    if (resposta == 2) {
      mudarCor.style.color = 'green'
    } else {
      mudarCor.style.color = 'red'
    }
    const id = setInterval(mudarPergunta, 300);
    function mudarPergunta() {
      pergunta = 8;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = '5 + 5 = 10';
      pergunta2.textContent = '5 + 5 = 9';
      clearInterval(id);
    }
  } else if (pergunta == 8) {
    mudarCor = document.getElementById('resposta8')
    if (resposta == 1) {
      mudarCor.style.color = 'green'
    } else {
      mudarCor.style.color = 'red'
    }
    const id = setInterval(mudarPergunta, 300);
    function mudarPergunta() {
      pergunta = 9;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = '2 * 300 = 600';
      pergunta2.textContent = '2 * 300 = 700';
      clearInterval(id);
    }
  } else if (pergunta == 9) {
    mudarCor = document.getElementById('resposta9')
    if (resposta == 1) {
      mudarCor.style.color = 'green'
    } else {
      mudarCor.style.color = 'red'
    }
    const id = setInterval(mudarPergunta, 300);
    function mudarPergunta() {
      pergunta = 10;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = '10 * 10 = 100';
      pergunta2.textContent = '10 * 10 = 10';
      clearInterval(id);
    }
  } else {
    mudarCor = document.getElementById('resposta10')
    if (resposta == 1) {
      mudarCor.style.color = 'green'
    } else {
      mudarCor.style.color = 'red'
    }
    terminarJogo()
  }
}

function terminarJogo() {
  perguntas.style.display = 'none'
  pergunta1.style.display = 'none'
  pergunta2.style.display = 'none'
}