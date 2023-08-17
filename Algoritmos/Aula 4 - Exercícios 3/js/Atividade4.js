var ano = parseInt(prompt("Digite um ano que tenha somente quatro digitos: "))
if ((ano % 4 == 0 && ano%100 != 0) || (ano % 400 == 0)) {
  alert("Ano é bissexto");
} else {
  alert("Ano não é bissexto");
}