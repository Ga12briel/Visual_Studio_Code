var descricao = prompt("Informe a descrição do produto: ")
var quantidade = parseInt(prompt("Informe a quantidade de estoque desse produto: "))
var preco = parseInt(prompt("Informe o valor unitário desse produto: "))
var valor_total = quantidade * preco
alert("Juntando esses produtos eles tem o valor de: "+valor_total+" reais.")