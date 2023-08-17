var peso = parseFloat(prompt("Digite o peso de um objeto em kg: "));
var planeta = parseInt(prompt("Digite um planeta que você queira saber o peso desse objeto: \n \n (1) Mercúrio; \n (2) Vênus; \n (3) Marte; \n (4) Jupiter; \n (5) Saturno; \n (6) Urano;"));
switch (planeta) {
  case (1):
    resultado = peso * 0.38
    break;
  case (2):
    resultado = peso * 0.88
    break;
  case (3):
    resultado = peso * 0.38
    break;
  case (4):
    resultado = peso * 2.64 
    break;
  case (5):
    resultado = peso * 1.15 
    break;
  case (6):
    resultado = peso * 1.17
    break;
  default:
    alert("Não existe essa opção!")
}

alert("Seu peso no planeta escolhido é "+resultado)