var ladoQuadrado = parseFloat(prompt("Digite o número do lado do quadrado: "))
var baseRetangulo = parseFloat(prompt("Digite o número da base do retângulo: "))
var alturaRetangulo = parseFloat(prompt("Digite o número da altura do retângulo: "))
var baseTriangulo = parseFloat(prompt("Digite o número da base do triângulo: "))
var alturaTriangulo = parseFloat(prompt("Digite o número da altura do triângulo: "))
var raio = parseFloat(prompt("Digite o número do raio da circunferência: "))

var perimetro = ladoQuadrado * 4
var area1 = ladoQuadrado * ladoQuadrado
alert("O perímetro do quadrado é "+perimetro+" e a área do quadrado é "+area1)

var perimetro = alturaRetangulo * 2 + baseRetangulo * 2
var area2 = alturaRetangulo * baseRetangulo
alert("O perímetro do retângulo é "+perimetro+" e a área do retângulo é "+area2)

var area3 = (baseTriangulo * alturaTriangulo)/2
alert("A área do triângulo é "+area3)

var area4 = raio^2 * 3.14
var circunferencia = 2 * (3.14 * raio)
alert("O comprimento da circunferência é "+circunferencia+" e a área da circunferência é "+area4)

if (area1 >= area2) {
  if (area1 >= area3) {
    if (area1 >= area4) {
      alert("A área do quadrado é a maior!")
    }
  }
}

if (area2 >= area1) {
  if (area2 >= area3) {
    if (area2 >= area4) {
      alert("A área do quadrado é a maior!")
    }
  }
}

if (area3 >= area1) {
  if (area3 >= area2) {
    if (area3 >= area4) {
      alert("A área do quadrado é a maior!")
    }
  }
}

if (area4 >= area1) {
  if (area4 >= area2) {
    if (area4 >= area3) {
      alert("A área do quadrado é a maior!")
    }
  }
}