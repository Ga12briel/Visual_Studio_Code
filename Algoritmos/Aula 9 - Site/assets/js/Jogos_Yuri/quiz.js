//pagina inicial
function voltar(id){
  window.location.href = '../cien.html'
}

function entrar() {
  document.location.href = "quiz.html";
  alert(
    'Seja bem vindo, teste seus conhecimentos matemáticos! Depois de responder todas as questões clique em "ver pontuação" e descubra seu resultado ;)'
  );
}

//contar ponto
var ponto = 0;

//pergunta 1
function conferir1() {
  let resposta = document.getElementById("r1").value;
  console.log(resposta);
  if (resposta == "b") {
    document.getElementById("ce1").innerHTML = "Resposta certa &#x1F609";
    document.getElementById("d1").style.backgroundColor = "#3CB371";
    ponto = ponto + 1;
  } else {
    document.getElementById("ce1").innerHTML = "Resposta errada &#x1F635";
    document.getElementById("d1").style.backgroundColor = "#B22222";
  }
}

//pergunta 2
function conferir2() {
  let resposta = document.getElementById("r2").value;
  console.log(resposta);
  if (resposta == "c") {
    document.getElementById("ce2").innerHTML = "Resposta certa &#x1F609";
    document.getElementById("d2").style.backgroundColor = "#3CB371";
    ponto = ponto + 1;
  } else {
    document.getElementById("ce2").innerHTML = "Resposta errada &#x1F635";
    document.getElementById("d2").style.backgroundColor = "#B22222";
  }
}

//pergunta3
function conferir3() {
  let resposta = document.getElementById("r3").value;
  console.log(resposta);
  if (resposta == "b") {
    document.getElementById("ce3").innerHTML = "Resposta certa &#x1F609";
    document.getElementById("d3").style.backgroundColor = "#3CB371";
    ponto = ponto + 1;
  } else {
    document.getElementById("ce3").innerHTML = "Resposta errada &#x1F635";
    document.getElementById("d3").style.backgroundColor = "#B22222";
  }
}

//pergunta4
function conferir4() {
  let resposta = document.getElementById("r4").value;
  console.log(resposta);
  if (resposta == "d") {
    document.getElementById("ce4").innerHTML = "Resposta certa &#x1F609";
    document.getElementById("d4").style.backgroundColor = "#3CB371";
    ponto = ponto + 1;
  } else {
    document.getElementById("ce4").innerHTML = "Resposta errada &#x1F635";
    document.getElementById("d4").style.backgroundColor = "#B22222";
  }
}

//pergunta5
function conferir5() {
  let resposta = document.getElementById("r5").value;
  console.log(resposta);
  if (resposta == "b") {
    document.getElementById("ce5").innerHTML = "Resposta certa &#x1F609";
    document.getElementById("d5").style.backgroundColor = "#3CB371";
    ponto = ponto + 1;
  } else {
    document.getElementById("ce5").innerHTML = "Resposta errada &#x1F635";
    document.getElementById("d5").style.backgroundColor = "#B22222";
  }
}

//pergunta6
function conferir6() {
  let resposta = document.getElementById("r6").value;
  console.log(resposta);
  if (resposta == "a") {
    document.getElementById("ce6").innerHTML = "Resposta certa &#x1F609";
    document.getElementById("d6").style.backgroundColor = "#3CB371";
    ponto = ponto + 1;
    console.log(ponto);
  } else {
    document.getElementById("ce6").innerHTML = "Resposta errada &#x1F635";
    document.getElementById("d6").style.backgroundColor = "#B22222";
  }
}

//pergunta7
function conferir7() {
  let resposta = document.getElementById("r7").value;
  console.log(resposta);
  if (resposta == "a") {
    document.getElementById("ce7").innerHTML = "Resposta certa &#x1F609";
    document.getElementById("d7").style.backgroundColor = "#3CB371";
    ponto = ponto + 1;
    console.log(ponto);
  } else {
    document.getElementById("ce7").innerHTML = "Resposta errada &#x1F635";
    document.getElementById("d7").style.backgroundColor = "#B22222";
  }
}

//pergunta8
function conferir8() {
  let resposta = document.getElementById("r8").value;
  console.log(resposta);
  if (resposta == "c") {
    document.getElementById("ce8").innerHTML = "Resposta certa &#x1F609";
    document.getElementById("d8").style.backgroundColor = "#3CB371";
    ponto = ponto + 1;
    console.log(ponto);
  } else {
    document.getElementById("ce8").innerHTML = "Resposta errada &#x1F635";
    document.getElementById("d8").style.backgroundColor = "#B22222";
  }
}

//pergunta9
function conferir9() {
  let resposta = document.getElementById("r9").value;
  console.log(resposta);
  if (resposta == "b") {
    document.getElementById("ce9").innerHTML = "Resposta certa &#x1F609";
    document.getElementById("d9").style.backgroundColor = "#3CB371";
    ponto = ponto + 1;
    console.log(ponto);
  } else {
    document.getElementById("ce9").innerHTML = "Resposta errada &#x1F635";
    document.getElementById("d9").style.backgroundColor = "#B22222";
  }
}

//pergunta10
function conferir10() {
  let resposta = document.getElementById("r10").value;
  console.log(resposta);
  if (resposta == "d") {
    document.getElementById("ce10").innerHTML = "Resposta certa &#x1F609";
    document.getElementById("d10").style.backgroundColor = "#3CB371";
    ponto = ponto + 1;
    console.log(ponto);
  } else {
    document.getElementById("ce10").innerHTML = "Resposta errada &#x1F635";
    document.getElementById("d10").style.backgroundColor = "#B22222";
  }
}

//pergunta11
function conferir11() {
  let resposta = document.getElementById("r11").value;
  console.log(resposta);
  if (resposta == "d") {
    document.getElementById("ce11").innerHTML = "Resposta certa &#x1F609";
    document.getElementById("d11").style.backgroundColor = "#3CB371";
    ponto = ponto + 1;
    console.log(ponto);
  } else {
    document.getElementById("ce11").innerHTML = "Resposta errada &#x1F635";
    document.getElementById("d11").style.backgroundColor = "#B22222";
  }
}

//pergunta12
function conferir12() {
  let resposta = document.getElementById("r12").value;
  console.log(resposta);
  if (resposta == "c") {
    document.getElementById("ce12").innerHTML = "Resposta certa &#x1F609";
    document.getElementById("d12").style.backgroundColor = "#3CB371";
    ponto = ponto + 1;
    console.log(ponto);
  } else {
    document.getElementById("ce12").innerHTML = "Resposta errada &#x1F635";
    document.getElementById("d12").style.backgroundColor = "#B22222";
  }
}

function verPontos() {
  document.getElementById("textponto").innerHTML = ponto + "/12";
}
