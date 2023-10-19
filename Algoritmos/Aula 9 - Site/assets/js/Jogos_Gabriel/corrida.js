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
  if (perguntaPosicao.left < personagemPosicao.right + 10) {
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
    const id = setInterval(mudarPergunta, 550);
    function mudarPergunta() {
      pergunta = 2;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = 'A incógnita é a letra da equação!';
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
    const id = setInterval(mudarPergunta, 550);
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
    if (resposta == 1) {
      mudarCor.style.color = 'red'
    } else {
      mudarCor.style.color = 'green'
    }
    const id = setInterval(mudarPergunta, 550);
    function mudarPergunta() {
      pergunta = 4;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = 'As equações são sentenças matemáticas que não estabelecem relações entre suas sentenças!';
      pergunta2.textContent = 'As equações são sentenças matemáticas que estabelecem relações entre suas sentenças!';
      clearInterval(id);
    }
  } else if (pergunta == 4) {
    mudarCor = document.getElementById('resposta4')
    if (resposta == 1) {
      mudarCor.style.color = 'green'
    } else {
      mudarCor.style.color = 'red'
    }
    const id = setInterval(mudarPergunta, 550);
    function mudarPergunta() {
      pergunta = 5;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = 'As equações são sentenças matemáticas que não estabelecem relações entre suas sentenças!';
      pergunta2.textContent = 'As equações são sentenças matemáticas que estabelecem relações entre suas sentenças!';
      clearInterval(id);
    }
  } else if (pergunta == 5) {
    mudarCor = document.getElementById('resposta5')
    if (resposta == 1) {
      mudarCor.style.color = 'red'
    } else {
      mudarCor.style.color = 'green'
    }
    const id = setInterval(mudarPergunta, 550);
    function mudarPergunta() {
      pergunta = 6;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = 'As equações são sentenças matemáticas que não estabelecem relações entre suas sentenças!';
      pergunta2.textContent = 'As equações são sentenças matemáticas que estabelecem relações entre suas sentenças!';
      clearInterval(id);
    }
  } else if (pergunta == 6) {
    mudarCor = document.getElementById('resposta6')
    if (resposta == 1) {
      mudarCor.style.color = 'red'
    } else {
      mudarCor.style.color = 'green'
    }
    const id = setInterval(mudarPergunta, 550);
    function mudarPergunta() {
      pergunta = 7;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = 'As equações são sentenças matemáticas que não estabelecem relações entre suas sentenças!';
      pergunta2.textContent = 'As equações são sentenças matemáticas que estabelecem relações entre suas sentenças!';
      clearInterval(id);
    }
  } else if (pergunta == 7) {
    mudarCor = document.getElementById('resposta7')
    if (resposta == 1) {
      mudarCor.style.color = 'red'
    } else {
      mudarCor.style.color = 'green'
    }
    const id = setInterval(mudarPergunta, 550);
    function mudarPergunta() {
      pergunta = 8;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = 'As equações são sentenças matemáticas que não estabelecem relações entre suas sentenças!';
      pergunta2.textContent = 'As equações são sentenças matemáticas que estabelecem relações entre suas sentenças!';
      clearInterval(id);
    }
  } else if (pergunta == 8) {
    mudarCor = document.getElementById('resposta8')
    if (resposta == 1) {
      mudarCor.style.color = 'green'
    } else {
      mudarCor.style.color = 'red'
    }
    const id = setInterval(mudarPergunta, 550);
    function mudarPergunta() {
      pergunta = 9;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = 'As equações são sentenças matemáticas que não estabelecem relações entre suas sentenças!';
      pergunta2.textContent = 'As equações são sentenças matemáticas que estabelecem relações entre suas sentenças!';
      clearInterval(id);
    }
  } else if (pergunta == 9) {
    mudarCor = document.getElementById('resposta9')
    if (resposta == 1) {
      mudarCor.style.color = 'green'
    } else {
      mudarCor.style.color = 'red'
    }
    const id = setInterval(mudarPergunta, 550);
    function mudarPergunta() {
      pergunta = 10;
      resposta = 0;
      personagem.style.top = '';
      personagem.style.bottom = '200px';
      pergunta1.textContent = 'As equações são sentenças matemáticas que não estabelecem relações entre suas sentenças!';
      pergunta2.textContent = 'As equações são sentenças matemáticas que estabelecem relações entre suas sentenças!';
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
  perguntas.style.animation = 'none';
}