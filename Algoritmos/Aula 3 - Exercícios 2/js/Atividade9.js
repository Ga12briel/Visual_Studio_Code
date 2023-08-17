var nome = prompt("Digite seu nome: ")
var salario_fixo = parseFloat(prompt("Digite seu salário fixo: "))
var total_vendas = parseFloat(prompt("Digite o valor total das vendas: "))
var percentual = parseFloat(prompt("Digite o percentual que você ganhar por cada venda: "))
var salario_total = (percentual / 100) * total_vendas + salario_fixo
alert("Seu nome é "+nome+" e seu salário é "+salario_total+".")